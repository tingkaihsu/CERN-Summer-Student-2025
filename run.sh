#!/bin/bash

# ==============================================
# MACS PLOT GENERATION SCRIPT
# 
# This script coordinates the workflow for:
#  1. Processing nuclear data from libraries
#  2. Generating MACS comparison plots
#  3. Launching the visualization web application
#
# Usage: ./run.sh <element> <mass> <format_hint>
# ==============================================

# Validate argument count
if [ "$#" -ne 3 ]; then
    echo "Error: Invalid number of arguments"
    echo "Usage: ./run.sh <element> <mass> <format_hint>"
    echo "Example: ./run.sh zr 96 1"
    exit 1
fi

# Capture command-line arguments
element=$1    # Element symbol (e.g., 'zr')
mass=$2       # Mass number (e.g., 96)
format_hint=$3  # Significant digit format hint (e.g., '1')

# Define nuclear data libraries to process
# These will be passed to the data processing script
labs=('ENDF/B-VIII.1' 'JEFF-3.3' 'JENDL-5')

# ==============================================
# DATA PROCESSING STAGE
# ==============================================
# Run data processing script:
#   - Extracts MACS values from nuclear data libraries
#   - Generates CSV database entry
#   - Applies energy format conversion using the hint

cp page/build/items.csv page/

echo "Processing nuclear data for ${element}${mass}..."
python3 script.py "$element" "$mass" "$format_hint" "${labs[@]}"

# ==============================================
# PLOT GENERATION STAGE
# ==============================================
# Generate MACS comparison plots:
#   - Creates both main comparison and ratio plots
#   - Saves images in page/static/images/
echo "Generating MACS plots..."
python3 plot_MACS.py "$element" "$mass"

# ==============================================
# WEB VISUALIZATION STAGE
# ==============================================
# Launch web application to view results:
#   - Starts Flask web server
#   - Serves generated plots and data
echo "Launching visualization web app..."
cd page/
python3 app.py "$element" "$mass"

cp items.csv build/