#!/usr/bin/env bash
# run_batch.sh
# Batch-run MACS pipeline from a jobs file (one job per line: "<element> <mass> <format_hint>")
# Usage: ./run_batch.sh [jobs_file] [--no-web]

set -u

JOBS_FILE="${1:-jobs.txt}"
NO_WEB=false
if [ "${2:-}" = "--no-web" ] || [ "${3:-}" = "--no-web" ]; then
    NO_WEB=true
fi

if [ ! -f "$JOBS_FILE" ]; then
    echo "Error: jobs file not found: $JOBS_FILE"
    echo "Create a file with lines like: au 197 0"
    exit 1
fi

# Nuclear data libraries (unchanged)
labs=('ENDF/B-VIII.1' 'JEFF-3.3' 'JENDL-5')

# Ensure logs directory exists
mkdir -p logs
cp page/build/items.csv page/

# Counters
total=0
success=0
failures=0

echo "Reading jobs from: $JOBS_FILE"
while IFS= read -r rawline || [ -n "$rawline" ]; do
    # Trim whitespace
    line="$(echo "$rawline" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')"
    # Skip empty lines and comments
    if [ -z "$line" ] || [[ "$line" == \#* ]]; then
        continue
    fi

    read -r element mass format_hint _rest <<< "$line"

    if [ -z "$element" ] || [ -z "$mass" ] || [ -z "$format_hint" ]; then
        echo "Skipping malformed line: '$line'"
        ((failures++))
        continue
    fi

    ((total++))
    job_id="${element}${mass}"
    log_file="logs/${job_id}.log"

    echo
    echo "========================================"
    echo "Job #$total: ${job_id} (format_hint=${format_hint})"
    echo "Log: $log_file"
    echo "----------------------------------------"

    {
        echo "===== JOB LOG for ${job_id} ====="
        echo "Timestamp: $(date)"
        echo "Element: $element"
        echo "Mass: $mass"
        echo "Format hint: $format_hint"
        echo "================================="
        echo
    } > "$log_file"

    # 1) Data processing
    echo "Running script.py..." | tee -a "$log_file"
    if python3 script.py "$element" "$mass" "$format_hint" "${labs[@]}" >>"$log_file" 2>&1; then
        echo "  -> data processing OK" | tee -a "$log_file"
    else
        echo "  -> ERROR in data processing" | tee -a "$log_file"
        ((failures++))
        continue
    fi

    # 2) Plot generation
    echo "Running plot_MACS.py..." | tee -a "$log_file"
    if python3 plot_MACS.py "$element" "$mass" >>"$log_file" 2>&1; then
        echo "  -> plotting OK" | tee -a "$log_file"
    else
        echo "  -> ERROR in plotting" | tee -a "$log_file"
        ((failures++))
        continue
    fi

    # 3) Page Updated/Added
    echo "Running app.py..." | tee -a "$log_file"
    if pushd page > /dev/null; then
        if python3 app.py "$element" "$mass" >>"../$log_file" 2>&1; then
            echo "  -> page OK" | tee -a "../$log_file"
        else
            echo "  -> ERROR in page" | tee -a "../$log_file"
            ((failures++))
            popd > /dev/null
            continue
        fi
        popd > /dev/null
    else
        echo "  -> ERROR: 'page' directory not found" | tee -a "$log_file"
        ((failures++))
        continue
    fi

done < "$JOBS_FILE"

echo
echo "========================================"
echo "Batch summary: total=$total, failures=$failures"
echo "Logs saved in: ./logs/"
echo "========================================"

# if [ "$NO_WEB" = false ]; then
#     if [ -d "page" ]; then
#     echo "Launching visualization web app..."
#     (cd page && python3 app.py)
#     else
#         echo "Warning: 'page' directory not found; skipping web app launch."
#     fi
# else
#     echo "Skipping web app launch (--no-web specified)."
# fi

cp page/items.csv page/build/

exit 0
