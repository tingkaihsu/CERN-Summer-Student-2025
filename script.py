#!/usr/bin/env python3
"""
Nuclear Data Processing Pipeline

This script automates the workflow for processing nuclear data including:
1. Calculating theoretical Maxwellian-averaged cross sections (MACS)
2. Downloading experimental data from the EXFOR database
3. Processing and integrating cross-section data
4. Combining multiple data sources into unified CSV files
5. Updating the isotope database for web visualization

Usage:
    ./run.sh <element> <mass> <format_hint> [labs...]
Example:
    ./run.sh zr 96 2 ENDF/B-VIII.1 JEFF-3.3
"""

import os
import csv
import math
import sys
import shutil
import subprocess
import re
import pandas as pd
from pathlib import Path

from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

import requests

import numpy as np
from scipy.integrate import trapezoid  # More accurate integration

# Validate command-line arguments
if len(sys.argv) < 3:
    print("Usage: python3 script.py <element> <mass> [labs...]")
    sys.exit(1)

# Parse command-line arguments
element = sys.argv[1].lower()          # Element symbol (e.g., 'zr')
mass = sys.argv[2]             # Mass number (e.g., '96')
format_hint = sys.argv[3]      # Precision formatting hint for numerical values

# Use specified nuclear data libraries or default to ENDF/B-VIII.1 and JEFF-3.3
labs = sys.argv[4:] if len(sys.argv) > 4 else ["ENDF/B-VIII.1", "JEFF-3.3"]

print(f"Element: {element}, Mass: {mass}, Format hint: {format_hint}")
print(f"Labs: {labs}")

# ----------------------------
# DATA EXTRACTION FUNCTIONS
# ----------------------------

def extract_experimental_energy(element, mass, temp_list):
    """Extract experimental energy values from CSV file and convert to MeV"""
    folder_name = "{}{}".format(element,mass)
    os.makedirs(folder_name, exist_ok=True)
    file_path = os.path.join(folder_name,"{}{}.csv".format(element,mass))

    with open(file_path, 'r') as f:
        # Create a filtered reader that skips comment lines
        def comment_filter(f):
            for line in f:
                if not line.strip().startswith('#'):
                    yield line
        
        reader = csv.reader(comment_filter(f))
        
        for row in reader:
            if not row:  # Skip empty rows
                continue
                
            first_col = row[0].strip()
            try:
                # Convert keV to MeV for theoretical calculations
                energy = float(first_col)*0.001
                temp_list.append(energy)
            except ValueError:
                # Skip non-numeric values
                continue


def extract_experimental_temperature(element, mass, temp_list):
    """Extract experimental temperature values from CSV file and convert to MeV"""
    folder_name = f"{element}{mass}"
    file_path = os.path.join(folder_name, f"{element}{mass}.csv")
    
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"Experimental data file not found: {file_path}")
    
    with open(file_path, 'r') as f:
        def comment_filter(f):
            for line in f:
                if not line.strip().startswith('#'):
                    yield line
        reader = csv.reader(comment_filter(f))
        for row in reader:
            if not row:
                continue
            try:
                # Convert keV to MeV for theoretical calculations
                energy = float(row[0].strip()) * 0.001
                temp_list.append(energy)
            except ValueError:
                continue

# version with q value and astrorate.g

def write_results_to_csv(element, mass, results):

    file_path = "astrorate.g"
    
    if not os.path.exists(file_path):
        print(f"Error: File not found at {file_path}")
        return None

    data = {
        'Q_value': None,
    }

    with open(file_path, 'r') as rfile:
        for line in rfile:
            line = line.strip()
            
            # Extract nuclide
            if line.startswith('#   nuclide:'):
                pass            
            # Extract Q-value (keep original string + float)
            elif line.startswith('#   Q-value [MeV]:'):
                q_value_str = line.split(':')[1].strip()
                # data['Q_value_raw'] = q_value_str
                try:
                    data['Q_value'] = float(q_value_str)
                except ValueError:
                    print(f"Warning: Could not parse Q-value: {q_value_str}")

    folder_name = f"{element}{mass}"
    os.makedirs(folder_name, exist_ok=True)

    kT_list = []
    extract_experimental_temperature(element, mass, kT_list)

    # Write LAB-MACS data
    lab_file = os.path.join(folder_name, f"{element}{mass}_LAB_MACS.csv")

    with open(lab_file, 'w') as f:
        
        f.write("# Q [MeV]: {}\n".format(data['Q_value']))

        f.write("kT[keV],LAB_MACS[mb]\n")
        i = 0
        for kT, lab_macs, _, _ in results:
            kT = kT_list[i]*1000
            f.write(f"{kT:.1f},{lab_macs:.6e}\n")
            i = i + 1
    
    # Write SEF data
    sef_file = os.path.join(folder_name, f"{element}{mass}_SEF.csv")
    with open(sef_file, 'w') as f:
        i = 0
        f.write("kT[keV],SEF\n")
        for kT, _, _, sef in results:
            kT = kT_list[i]*1000
            f.write(f"{kT:.1f},{sef:.2f}\n")
            i = i + 1
    
    print(f"Results saved to {lab_file} and {sef_file}")

# version without q value and astrorate.g
# def write_results_to_csv(element, mass, results):
#     """Save calculated theoretical results to CSV files"""
#     folder_name = f"{element}{mass}".lower()
#     os.makedirs(folder_name, exist_ok=True)

#     # Get experimental temperatures for reference
#     kT_list = []
#     extract_experimental_temperature(element.lower(), mass, kT_list)

#     # Write LAB-MACS data
#     lab_file = os.path.join(folder_name, f"{element.lower()}{mass}_LAB_MACS.csv")
#     with open(lab_file, 'w') as f:
#         f.write("kT[keV],LAB_MACS[mb]\n")
#         i = 0
#         for kT, lab_macs, _, _ in results:
#             # Convert back to keV for storage
#             kT = kT_list[i]*1000
#             f.write(f"{kT:.1f},{lab_macs:.6e}\n")
#             i = i + 1
    
#     # Write SEF (Stellar Enhancement Factor) data
#     sef_file = os.path.join(folder_name, f"{element.lower()}{mass}_SEF.csv")
#     with open(sef_file, 'w') as f:
#         i = 0
#         f.write("kT[keV],SEF\n")
#         for kT, _, _, sef in results:
#             # Convert back to keV for storage
#             kT = kT_list[i]*1000
#             f.write(f"{kT:.1f},{sef:.2f}\n")
#             i = i + 1
    
#     print(f"Results saved to {lab_file} and {sef_file}")

# ----------------------------
# THEORETICAL CALCULATION (dosef)
# ----------------------------

# First version
def run_dosef(element, mass):
    kT_list = []
    extract_experimental_temperature(element, mass, kT_list)
    kT_grid_str = " ".join([f"{kt:.4f}" for kt in kT_list])
    
    # Use absolute path to dosef
    dosef_path = "/home/htk/talys/dosef/dosef"
    
    # Prepare input sequence
    input_sequence = f"{element}\n{mass}\n{kT_grid_str}\n"
    
    try:
        process = subprocess.Popen(
            ["bash", dosef_path],  # Explicitly run with bash
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        stdout, stderr = process.communicate(input=input_sequence)
        
        if process.returncode != 0:
            raise RuntimeError(f"dosef failed with error:\n{stderr}")
        
        output_file = "MACS_SEF"
        if not os.path.exists(output_file):
            raise FileNotFoundError("Output file MACS_SEF not created")
        
        results = []
        with open(output_file, 'r') as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith('#'):
                    continue
                
                parts = line.split()
                if len(parts) < 4:
                    continue
                
                try:
                    kT = float(parts[0])
                    lab_macs = float(parts[1])
                    star_macs = float(parts[2])
                    sef = float(parts[3])
                    results.append((kT, lab_macs, star_macs, sef))
                except (ValueError, IndexError) as e:
                    print(f"Skipping malformed line: {line} - Error: {str(e)}")
                    continue
        
        write_results_to_csv(element, mass, results)
        return results
    
    except Exception as e:
        raise RuntimeError(f"Error running dosef: {str(e)}")
    
# Second version
# def run_dosef(element, mass):
#     """Execute dosef program to calculate theoretical MACS and SEF values"""
#     # Prepare inputs for dosef
#     kT_list = []
#     extract_experimental_temperature(element, mass, kT_list)
#     element_fmt = element.capitalize()
#     isotope = f"{element_fmt}{mass}"
#     kT_grid_str = " ".join([f"{kt:.4f}" for kt in kT_list])
#     input_sequence = f"{isotope}\n{kT_grid_str}\nyes\n"

#     # Configure dosef execution
#     dosef_path = "/home/htk/talys/dosef2/dosef2"
#     dosef_dir  = os.path.dirname(dosef_path) or "."
#     env = os.environ.copy()

#     # Execute via bash to ensure proper environment setup
#     bash_cmd = f'. ~/.bashrc && exec "{dosef_path}"'
#     try:
#         proc = subprocess.Popen(
#             ["bash", "-lc", bash_cmd],
#             stdin=subprocess.PIPE,
#             stdout=subprocess.PIPE,
#             stderr=subprocess.PIPE,
#             text=True,
#             env=env,
#             cwd=dosef_dir
#         )

#         # Run dosef with prepared input
#         stdout, stderr = proc.communicate(input=input_sequence)

#         # Handle execution errors
#         if proc.returncode != 0:
#             raise RuntimeError(f"dosef failed (rc={proc.returncode}).\nSTDERR:\n{stderr}\n\nSTDOUT:\n{stdout}")

#         # Verify output file creation
#         output_file = f"MACS_{element_fmt}{mass}"
#         if not os.path.exists(os.path.join(dosef_dir, output_file)):
#             raise FileNotFoundError(f"Output file {output_file} not found in {dosef_dir}.\nSTDOUT:\n{stdout}\nSTDERR:\n{stderr}")

#         # Parse results from output file
#         results = []
#         with open(os.path.join(dosef_dir, output_file), 'r') as f:
#             for line in f:
#                 line = line.strip()
#                 if not line or line.startswith('#'):
#                     continue
#                 parts = line.split()
#                 if len(parts) < 5:
#                     continue
#                 try:
#                     # Extract calculated values
#                     kT = float(parts[1])
#                     lab_macs = float(parts[2])
#                     star_macs = float(parts[3])
#                     sef = float(parts[4])
#                     results.append((kT, lab_macs, star_macs, sef))
#                 except ValueError:
#                     continue
#         print(results)
#         write_results_to_csv(element,mass,results)
#         return results
    
#     except Exception as e:
#         raise RuntimeError(f"Error running dosef: {e}")

# ----------------------------
# EXFOR DATA DOWNLOAD FUNCTIONS
# ----------------------------

def download_data(element, mass, lab, save_dir="./downloaded"):
    """Download experimental data from EXFOR database using Selenium"""
    # Prepare to download data
    os.makedirs(save_dir, exist_ok=True)
    filename = f"{element}{mass}_{lab.replace('/', '_').replace('/', '_')}.txt"
    save_path = os.path.join(save_dir, filename)
    # Check if the file already exists
    if os.path.exists(save_path):
        print(f"File {filename} already exists in {save_dir}. Skipping download.")
        return  # Skip the downloading process if the file exists
    
    # Configure headless Chrome browser
    chrome_options = Options()
    chrome_options.add_argument("--headless")  # Run without GUI
    chrome_options.add_argument("--disable-gpu")  # Disable GPU acceleration
    chrome_options.add_argument("--no-sandbox")  # Bypass OS security model

    # Initialize WebDriver
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=chrome_options)

    # Helper functions for checkbox interaction
    def check_checkbox0(name):
        """Programmatically check a checkbox by name"""
        checkbox = driver.find_element(By.NAME, name)
        driver.execute_script("arguments[0].checked = true; arguments[0].dispatchEvent(new Event('change'));", checkbox)

    def check_checkbox(elem):
        """Check a checkbox if not already selected"""
        if not elem.is_selected():
            elem.click()

    try:
        # Navigate to EXFOR database
        driver.get("https://www-nds.iaea.org/exfor/endf.htm")
        wait = WebDriverWait(driver, 15)

        # Set search parameters for (n,γ) cross-sections
        target = wait.until(EC.element_to_be_clickable((By.NAME, "Target")))
        target.clear()
        target.send_keys(f"{mass}{element}".lower())  # Format: mass + element (e.g., "96zr")
        check_checkbox0("chkTarget")

        reaction = wait.until(EC.element_to_be_clickable((By.NAME, "Reaction")))
        reaction.clear()
        reaction.send_keys("n,g")  # Neutron capture reaction
        check_checkbox0("chkReaction")

        quantity = wait.until(EC.element_to_be_clickable((By.NAME, "Quantity")))
        quantity.clear()
        quantity.send_keys("cs")  # Cross-section data
        check_checkbox0("chkQuantity")

        # Submit search
        submit_btn = wait.until(EC.element_to_be_clickable((By.XPATH, '//input[@type="submit"]')))
        submit_btn.click()

        # Process results page
        wait.until(EC.presence_of_element_located((By.TAG_NAME, "form")))
        target_lab_name = lab

        # Find and select target lab
        checkboxes = wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, "input[type='checkbox'][name^='sub']")))
        found = False
        for cb in checkboxes:
            parent = cb.find_element(By.XPATH, "./..")
            text = parent.text
            if target_lab_name in text:
                print(f"Found {target_lab_name} checkbox, preparing to click")
                wait.until(EC.element_to_be_clickable(cb))
                check_checkbox(cb)
                found = True
                break

        if not found:
            print(f"{target_lab_name} checkbox not found")
            driver.quit()
            return
        
        # Generate plot to access data
        main_plot_btn = wait.until(EC.element_to_be_clickable((By.XPATH, '//input[@type="button" and @value="Plot"]')))
        driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", main_plot_btn)
        main_plot_btn.click()
        print("Clicked main Plot button")

        # Access plotted data
        plotted_data_link = wait.until(EC.element_to_be_clickable((By.LINK_TEXT, "plotted data")))
        plotted_data_link.click()
        print("Clicked plotted data")

        # Switch to new tab with data
        wait.until(lambda d: len(d.window_handles) > 1)
        driver.switch_to.window(driver.window_handles[-1])
        print("Switched to new tab, URL:", driver.current_url)

        # Get direct download URL
        wait.until(EC.url_to_be(driver.current_url))
        download_url = driver.current_url
        print("Download URL:", download_url)

        # Transfer cookies from Selenium to requests session
        cookies = driver.get_cookies()
        session = requests.Session()
        for cookie in cookies:
            session.cookies.set(cookie['name'], cookie['value'])

        # Download the file
        response = session.get(download_url)
        response.raise_for_status()

        with open(save_path, "w", encoding="utf-8") as f:
            f.write(response.text)

        print(f"Download finished, saved to {save_path}")

    finally:
        driver.close()


def read_data_and_integrate(element, mass, lab, temp, base_dir="./downloaded"):
    """Read cross-section data and compute MACS via numerical integration"""
    # Construct file path
    filename = f"{element}{mass}_{lab.replace('/', '_').replace('/', '_')}.txt"
    file_path = os.path.join(base_dir, filename)

    X = []  # Energy values (MeV)
    Y = []  # Cross-section values (mb)
    data_started = False  # Flag to identify data section

    # Parse data file
    with open(file_path, 'r') as f:
        for line in f:
            stripped = line.strip()
            # Stop at section boundaries
            if stripped.startswith("#---") or stripped.startswith("//"):
                break
            if data_started:
                try:
                    # Extract energy and cross-section values
                    x_str, y_str = stripped.split()
                    X.append(np.longdouble(x_str))
                    Y.append(np.longdouble(y_str))
                except ValueError:
                    continue
            # Identify start of data section
            elif stripped.startswith("#") and "MeV" in stripped:
                data_started = True

    # Validate data
    if len(X) == 0 or len(Y) == 0:
        raise ValueError(f"No data found in file: {file_path}")

    # Convert to numpy arrays for processing
    X = np.array(X, dtype=np.longdouble)
    Y = np.array(Y, dtype=np.longdouble)

    # Calculate MACS using Maxwell-Boltzmann distribution
    factor = float(mass)/(float(mass)+1)
    weight = factor*X * np.exp(-factor*X / temp, dtype=np.longdouble)
    integrand = Y * weight
    weighted_integral = (2 / np.sqrt(np.pi)) * (1 / temp**2) * trapezoid(integrand, X) * 1000

    print(f"Read {len(X)} data points from: {file_path}")
    print(f"Weighted integral = {weighted_integral:.12e} (mb) for z = {temp}")
    return weighted_integral

def evaluation(element, mass, labname):
    """Evaluate MACS for all experimental temperatures"""
    # Get temperature list
    temp_list = []
    extract_experimental_energy(element, mass, temp_list)
    results = []
    
    # Compute MACS for each temperature
    for temp in temp_list:
        integral = read_data_and_integrate(element, mass, labname, temp)
        results.append((temp, integral))
        print(f"Energy (keV): {temp*1000.0}, Weighted Integral (mb): {integral}")
    
    # Save results
    folder_name = f"{element}{mass}"
    os.makedirs(folder_name, exist_ok=True)
    safe_labname = labname.replace("/", "_").replace("\\", "_")
    output_filename = os.path.join(folder_name, f"{element}{mass}_{safe_labname}_e.csv")
    
    with open(output_filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["Energy (keV)", " MACS (mb)"])
        for temp, integral in results:
            # Round temperature to nearest 0.5 keV
            _temp = float(math.floor(temp*1000.0*2.0))/2.0
            writer.writerow([_temp, integral])
    
    print(f"Data written to {output_filename}")
    return

# ----------------------------
# DATA COMBINATION FUNCTIONS
# ----------------------------

def round_sim_to_format(sim, format_hint):
    """
    Round values to specified precision
    
    Args:
        sim: Value to round
        format_hint: 
            >0 : decimal places
            =0 : nearest integer
            <0 : left of decimal
    """
    if sim == 0 or format_hint == 0:
        return round(sim)
    return round(sim, format_hint)

def clean_column_name(col):
    """Normalize column names for consistent matching"""
    col = col.strip().lower()
    col = re.sub(r'[^a-z0-9]', '', col)  # Remove special characters
    col = re.sub(r'\s+', '', col)        # Remove whitespace
    return col

def find_matching_column(columns, patterns):
    """Find column matching any pattern"""
    cleaned_columns = {clean_column_name(col): col for col in columns}
    for pattern in patterns:
        for cleaned_col in cleaned_columns:
            if re.search(pattern, cleaned_col, re.IGNORECASE):
                return cleaned_columns[cleaned_col]
    return None

def extract_reference_link_from_csv(element, mass):
    """Extract reference links from CSV comments"""
    folder_name = f"{element}{mass}"
    file_path = os.path.join(folder_name, f"{element}{mass}.csv")

    if not os.path.exists(file_path):
        return None

    refs = []
    url_regex = re.compile(r'https?://\S+', re.IGNORECASE)
    doi_regex = re.compile(r'10\.\d{4,9}/\S+', re.IGNORECASE)

    with open(file_path, mode='r', encoding='utf-8') as f:
        for raw_line in f:
            if not raw_line.lstrip().startswith("#"):
                continue

            line = raw_line.strip()
            content = line.lstrip('#').strip()

            # Match REF lines
            if re.match(r'(?i)^REF\b', content):
                remainder = re.sub(r'(?i)^REF\b[:\s-]*', '', content).strip()
                if not remainder:
                    continue

                # Extract URLs
                found_urls = url_regex.findall(remainder)
                if found_urls:
                    refs.extend(found_urls)
                    continue

                # Extract DOIs
                doi_match = doi_regex.search(remainder)
                if doi_match:
                    refs.append(doi_match.group(0))
                    continue

                # Fallback to text
                refs.append(remainder)

    # Remove duplicates
    if not refs:
        return None
    seen = set()
    unique_refs = [r for r in refs if r not in seen and not seen.add(r)]
    return unique_refs

def extract_comments_except_ref(element, mass):
    """Extract non-REF comments from CSV"""
    folder_name = f"{element}{mass}"
    file_path = os.path.join(folder_name, f"{element}{mass}.csv")

    comments = []
    with open(file_path, 'r', encoding='utf-8') as f:
        for line in f:
            if line.startswith("#") and not line.startswith("# REF"):
                comments.append(line.strip())
    return comments

# Physical constants
AVOGADRO = 6.02214076e23  # mol⁻¹
KEV_TO_JOULE = 1.60217662e-16  # J/keV
U_TO_KG = 1.66053906660e-27  # kg/u
M_NEUTRON_U = 1.00866491588  # u (neutron mass)

def combine_element_data(element, mass, format_hint):
    """Combine all data files for a specific element-mass combination"""
    element_mass = f"{element}{mass}"
    dir_path = Path(element_mass)

    if not dir_path.exists():
        print(f"Directory not found: {dir_path}")
        return
    
    # Define expected files
    # One should modify if there are more files
    files = {
        'main': dir_path / f"{element_mass}.csv",
        'theor': dir_path / f"{element_mass}_LAB_MACS.csv",
        'sef': dir_path / f"{element_mass}_SEF.csv",
        'endf': dir_path / f"{element_mass}_ENDF_B-VIII.1_e.csv",
        'jeff': dir_path / f"{element_mass}_JEFF-3.3_e.csv",
        # New JENDL-5 file (text)
        'jendl': dir_path / f"{element_mass}_JENDL-5_e.csv"
    }
    
    # Check if all files exist
    missing = [f.name for f in files.values() if not f.exists()]
    if missing:
        print(f"Skipping {element_mass}: Missing files - {', '.join(missing)}")
        return
    
    # Extract Q-value from theor
    q_value = ""
    with open(files['theor'], 'r') as f:
        for line in f:
            if line.startswith('# Q [MeV]:'):
                raw_value = line.split(':')[1].strip()
                raw_value = float(raw_value)
                q_value = float(f"{raw_value:.3f}")
                break

    # Extract the URL of the n_TOF data ref
    ref_url = extract_reference_link_from_csv(element,mass)
    # Extract the comments
    comments = extract_comments_except_ref(element,mass)

    # Read and process each file
    data_frames = {}
    
    try:
        # 1. Process main file
        df_main = pd.read_csv(files['main'], comment='#', skipinitialspace=True)
        
        # Find temperature column
        temp_col = find_matching_column(
            df_main.columns, 
            [r'kT', r'keV', r'energy', r'temperature']
        )
        if not temp_col:
            temp_col = df_main.columns[0]  # Use first column as fallback
            print(f"Using first column as temperature for {files['main']}")
        
        # Rename temperature column to standard name
        df_main = df_main.rename(columns={temp_col: 'kT (keV)'})
        
        # Preserve all original columns except temperature
        main_columns = [col for col in df_main.columns if col != 'kT (keV)']
        data_frames['main'] = df_main
        
        # 2. Process theor
        df_t = pd.read_csv(files['theor'], comment='#', skipinitialspace=True)
        
        # Find and rename columns
        t_temp_col = find_matching_column(
            df_t.columns, 
            [r'kT', r'keV', r'energy', r'temperature']
        ) or df_t.columns[0]
        
        theor_macs_col = find_matching_column(
            df_t.columns, 
            [r'macs', r'theor']
        )
        
        # Rename columns
        rename_map = {}
        if t_temp_col:
            rename_map[t_temp_col] = 'kT (keV)'
        if theor_macs_col:
            rename_map[theor_macs_col] = 'TALYS-2.0 (mb)'
        # if reaction_rate_col:
        #     rename_map[reaction_rate_col] = 'Reaction_rate (cm³/mol/s)'
        
        df_t = df_t.rename(columns=rename_map)
        data_frames['theor'] = df_t
        
        # 3. Process SEF file
        df_sef = pd.read_csv(files['sef'], comment='#', skipinitialspace=True)
        
        sef_temp_col = find_matching_column(
            df_sef.columns, 
            [r'kT', r'keV', r'energy', r'temperature']
        ) or df_sef.columns[0]
        
        sef_col = find_matching_column(
            df_sef.columns, 
            [r'sef']
        ) or (df_sef.columns[1] if len(df_sef.columns) > 1 else None)
        
        rename_map = {}
        if sef_temp_col:
            rename_map[sef_temp_col] = 'kT (keV)'
        if sef_col:
            rename_map[sef_col] = 'SEF'
        df_sef = df_sef.rename(columns=rename_map)
        data_frames['sef'] = df_sef
        
        # 4. Process ENDF file
        df_endf = pd.read_csv(files['endf'], comment='#', skipinitialspace=True)
        
        endf_temp_col = find_matching_column(
            df_endf.columns, 
            [r'energy', r'keV', r'temperature']
        ) or df_endf.columns[0]
        
        endf_macs_col = find_matching_column(
            df_endf.columns, 
            [r'macs']
        ) or (df_endf.columns[1] if len(df_endf.columns) > 1 else None)
        
        rename_map = {}
        if endf_temp_col:
            rename_map[endf_temp_col] = 'kT (keV)'
        if endf_macs_col:
            rename_map[endf_macs_col] = 'ENDF/B-8.1 (mb)'
        df_endf = df_endf.rename(columns=rename_map)
        data_frames['endf'] = df_endf
        
        # 5. Process JEFF file
        df_jeff = pd.read_csv(files['jeff'], comment='#', skipinitialspace=True)
        
        jeff_temp_col = find_matching_column(
            df_jeff.columns, 
            [r'energy', r'keV', r'temperature']
        ) or df_jeff.columns[0]
        
        jeff_macs_col = find_matching_column(
            df_jeff.columns, 
            [r'macs']
        ) or (df_jeff.columns[1] if len(df_jeff.columns) > 1 else None)
        
        rename_map = {}
        if jeff_temp_col:
            rename_map[jeff_temp_col] = 'kT (keV)'
        if jeff_macs_col:
            rename_map[jeff_macs_col] = 'JEFF-3.3 (mb)'
        df_jeff = df_jeff.rename(columns=rename_map)
        data_frames['jeff'] = df_jeff

        # 6. Process JENDL-5 file (new)
        # Attempt normal CSV read first; if structure is whitespace-delimited, fall back.
        try:
            df_jendl = pd.read_csv(files['jendl'], comment='#', skipinitialspace=True)
        except Exception:
            # fallback to whitespace-delimited parsing (common for some .txt data dumps)
            df_jendl = pd.read_csv(files['jendl'], comment='#', skipinitialspace=True, delim_whitespace=True, engine='python')
        
        # Identify temperature and macs-like columns in JENDL
        jendl_temp_col = find_matching_column(
            df_jendl.columns,
            [r'energy', r'keV', r'kT', r'temperature']
        ) or df_jendl.columns[0]
        
        jendl_macs_col = find_matching_column(
            df_jendl.columns,
            [r'macs', r'cross', r'sigma']
        ) or (df_jendl.columns[1] if len(df_jendl.columns) > 1 else None)
        
        rename_map = {}
        if jendl_temp_col:
            rename_map[jendl_temp_col] = 'kT (keV)'
        if jendl_macs_col:
            rename_map[jendl_macs_col] = 'JENDL-5 (mb)'
        df_jendl = df_jendl.rename(columns=rename_map)
        data_frames['jendl'] = df_jendl
        
        # Find temperature column in main data EARLIER
        temp_col = find_matching_column(
            df_main.columns, 
            [r'kT', r'keV', r'energy', r'temperature']
        )
        if not temp_col:
            temp_col = df_main.columns[0]  # Use first column as fallback
            print(f"Using first column as temperature for {files['main']}")
        
        # Rename temperature column to standard name
        df_main = df_main.rename(columns={temp_col: 'kT (keV)'})

        # Find n_TOF column
        n_tof_col = find_matching_column(df_main.columns, [r'n[_\-]?tof'])
        # Calculate reduced mass (in atomic mass units)
        A = int(mass)
        reduced_mass_u = (M_NEUTRON_U * A) / (M_NEUTRON_U + A)

        if n_tof_col and n_tof_col in df_main.columns:
            reaction_rates = []
            for _, row in df_main.iterrows():
                try:
                    kT_keV = float(row['kT (keV)'])
                    macs_val = row[n_tof_col]
                    
                    # Handle all uncertainty formats by extracting the first numeric value
                    if isinstance(macs_val, str):
                        # Find the first number in the string (with optional sign and decimal)
                        match = re.search(r'[-+]?\d*\.?\d+', macs_val)
                        if match:
                            macs_val = match.group(0)
                        else:
                            # If no match, try converting directly
                            macs_val = macs_val
                    
                    macs_mb = float(macs_val)
                    
                    # Convert units
                    kT_J = kT_keV * KEV_TO_JOULE
                    mass_kg = reduced_mass_u * U_TO_KG
                    
                    # Calculate most probable velocity (m/s)
                    v_t = math.sqrt(2 * kT_J / mass_kg)
                    
                    # Convert MACS from mb to m² (1 mb = 1e-31 m²)
                    macs_m2 = macs_mb * 1e-31
                    
                    # Calculate reaction rate (m³/s/atom)
                    rate_atom = macs_m2 * v_t
                    
                    # Convert to cm³/mol/s
                    rate_cm3_mol_s = rate_atom * 1e6 * AVOGADRO
                    reaction_rates.append(f"{rate_cm3_mol_s:.2E}")
                except (ValueError, TypeError) as e:
                    print(f"Error calculating reaction rate: {e}")
                    reaction_rates.append("-")
            
            # Add computed reaction rates to dataframe
            df_main['Reaction_rate (cm³/mol/s)'] = reaction_rates

        # Merge all data
        merged = df_main
        
        # Define additional columns to merge from each file
        additional_columns = {
            'theor': ['TALYS-2.0 (mb)'],
            'sef': ['SEF'],
            'endf': ['ENDF/B-8.1 (mb)'],
            'jeff': ['JEFF-3.3 (mb)'],
            'jendl': ['JENDL-5 (mb)']  # include new JENDL column
        }
        
        for file_type, cols in additional_columns.items():
            # Get only columns that exist in the dataframe
            existing_cols = [col for col in cols if col in data_frames[file_type].columns]
            
            if existing_cols:
                # Add temperature column for merging
                merge_cols = ['kT (keV)'] + existing_cols
                merged = pd.merge(
                    merged, 
                    data_frames[file_type][merge_cols].drop_duplicates(subset=['kT (keV)']), 
                    on='kT (keV)', 
                    how='left'
                )
        # After df_main processing and renaming columns
        df_main['kT (keV)'] = pd.to_numeric(df_main['kT (keV)'], errors='coerce')
        n_tof_col = find_matching_column(df_main.columns, [r'n[_\-]?tof'])

        n_tof_30kev = None
        if n_tof_col:
            row_30kev = df_main[df_main['kT (keV)'] == 30]
            if not row_30kev.empty:
                n_tof_30kev = row_30kev.iloc[0][n_tof_col]

        outp_dir_path = os.path.join('page/database')
        # Create output file
        if not os.path.exists(outp_dir_path):
            os.makedirs(outp_dir_path)  # Create the directory structure
        output_file = os.path.join(outp_dir_path, f"{element_mass}.csv")

        with open(output_file, 'w') as f:
            # Write headers
            f.write(f"# {element_mass.capitalize()}\n")
            if q_value:
                f.write(f"# Q value : {q_value:.3f} [MeV]\n")
            else:
                pass
            if n_tof_30kev is not None:
                f.write(f"# MACS (n_TOF) @ 30 keV : {n_tof_30kev} [mb]\n")
            else:
                pass
            
            # Write the comment
            for comment in comments:
                f.write(f'{comment}\n')

            # Write the REF lines (one per REF entry)
            if ref_url is not None:
                # If extractor returned a list, write each as its own REF line
                if isinstance(ref_url, (list, tuple)):
                    for r in ref_url:
                        f.write(f'# REF : {r}\n')
                else:
                    # Backwards-compatible: if a string is returned, write single line
                    f.write(f'# REF : {ref_url}\n')
            else:
                f.write(f'# REF : (no reference found)\n')


            # Write column headers
            headers = ['kT (keV)'] + main_columns + [
                'TALYS-2.0 (mb)', 'ENDF/B-8.1 (mb)', 
                'JEFF-3.3 (mb)', 'JENDL-5 (mb)', 'Reaction_rate (cm³/mol/s)', 'SEF'
            ]
            # Remove duplicates while preserving order
            seen = set()
            unique_headers = [x for x in headers if not (x in seen or seen.add(x))]
            f.write("" + ",".join(unique_headers) + "\n")
            
            # Write data rows
            for _, row in merged.iterrows():
                # Format temperature
                t_val = row['kT (keV)']
                t_str = f"{int(t_val)}" if float(t_val).is_integer() else f"{t_val:.1f}"
                
                # Format other values
                formatted_values = [t_str]
                
                for col in unique_headers[1:]:
                    if col in row:
                        val = row[col]
                        if pd.isna(val):
                            formatted_values.append("-")
                        elif isinstance(val, str):
                            # Preserve string values as-is
                            formatted_values.append(val)
                        elif 'MACS' in col:
                            # Format MACS and SEF values
                            rounded_val = round_sim_to_format(val, int(format_hint))  # ← FIXED
                            val_value = (
                                f"{rounded_val:.{abs(int(format_hint))}f}" if int(format_hint) > 0 else str(rounded_val)
                            )
                            formatted_values.append(f"{val_value}")

                        elif 'Reaction_rate' in col:
                            rounded_val = round_sim_to_format(val, 2)
                            val_value = (
                                f"{float(rounded_val):.{abs(2)}E}"
                                if int(2) >= 0 else str(rounded_val)
                            )
                            # val_value = float(f"{val:.2f}")
                            # print(val)
                            formatted_values.append(val_value)
                        elif 'SEF' in col:
                            rounded_val = round_sim_to_format(val, 2)
                            val_value = (
                                f"{float(rounded_val):.{abs(2)}f}"
                                if int(2) >= 0 else str(rounded_val)
                            )
                            # val_value = float(f"{val:.2f}")
                            # print(val)
                            formatted_values.append(val_value)
                        else:
                            # Default formatting for other numeric values
                            rounded_val = round_sim_to_format(val, int(format_hint))  # ← FIXED
                            val_value = (
                                f"{rounded_val:.{abs(int(format_hint))}f}" if int(format_hint) > 0 else str(rounded_val)
                            )
                            formatted_values.append(f"{val_value}")
                    else:
                        formatted_values.append("-")
                
                f.write(",".join(formatted_values) + "\n")
        
        print(f"Created combined file: {output_file}")
        return True
        
    except Exception as e:
        print(f"Error processing {element_mass}: {str(e)}")
        import traceback
        traceback.print_exc()
        return False


def append_title(element, mass, filepath='page/items.csv'):
    """Add new isotope to master items list"""
    # Compose the title string
    title_to_check = f"{element.capitalize()}{mass}"

    if not os.path.exists(filepath):
        with open(filepath, 'w', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(['id', 'title'])  # Initialize the header row
        print(f"File '{filepath}' created and initialized with headers.")

    # Read existing rows
    with open(filepath, newline='') as csvfile:
        reader = list(csv.DictReader(csvfile))
        titles = [row['title'] for row in reader]

    # Check if title exists
    if title_to_check in titles:
        print(f"Title '{title_to_check}' already exists. No action taken.")
        return

    # Find the max id to add next id
    max_id = max(int(row['id']) for row in reader) if reader else 0
    new_id = max_id + 1

    # Append new row
    with open(filepath, 'a', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow([new_id, title_to_check])
    print(f"Added new title '{title_to_check}' with id {new_id}.")

def convert_nTOF_data_dynamic_ref(element, mass, base_output_dir="page/n_TOF_data"):
    element_mass = f"{element.lower()}{mass}"
    input_path = os.path.join(element_mass, f"{element_mass}.csv")
    output_path = os.path.join(base_output_dir, f"{element_mass}.txt")

    element_cap = element.capitalize()
    first_line = f"# {element_cap}{mass} Maxwellian-Averaged Cross Sections (MACS)"

    # Read input file
    with open(input_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Separate header comment lines and data lines
    header_lines = []
    data_start_idx = 0

    for i, line in enumerate(lines):
        if line.strip().startswith('#'):
            # Skip the unwanted collaboration line
            if 'n_TOF Collaboration' in line and '<br>' in line:
                continue
            header_lines.append(line.strip())
        else:
            data_start_idx = i
            break

    # Find REF line among header lines
    ref_line = None
    for hl in header_lines:
        if 'REF' in hl.upper():
            ref_line = hl
            break
    if not ref_line:
        ref_line = f"# REF: (no reference found)"

    # Compose output header lines
    output_lines = [
        first_line,
        ref_line,
        "# Cross sections and uncertainties in millibarns (mb)",
        "# kT [keV]\tn_TOF [mb]\t± uncertainty [mb]"
    ]

    # Read data lines with csv.DictReader
    data_lines = lines[data_start_idx:]
    reader = csv.DictReader(data_lines)

    for row in reader:
        kT = row['kT (keV)'].strip()
        value_str = row[list(row.keys())[1]].strip()

        match = re.match(r"([0-9]*\.?[0-9]+)\s*±\s*([0-9]*\.?[0-9]+)", value_str)
        if match:
            value = match.group(1)
            stat_uncertainty = match.group(2)
            kT = float(kT)
            output_lines.append(f"{kT:.1f}\t{value}\t{stat_uncertainty}")
        else:
            print(f"Warning: could not parse row: kT={kT}, value='{value_str}'")
            continue

    os.makedirs(base_output_dir, exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as outfile:
        outfile.write('\n'.join(output_lines))

    print(f"Converted {input_path} -> {output_path}")

def merge(element, mass):
    """Merge nTOF MACS into a combined output file, replacing existing entries.
    
    Args:
        element (str): Element symbol (e.g., 'Fe')
        mass (str): Mass number (e.g., '56')
    """
    output_file = "page/static/all_nTOF_MACS.txt"
    elementmass = f"{element}{mass}"
    header_string = f"# kT [keV]\t{elementmass}_macs [mb]\tunc [mb]"

    dir_path = os.path.join('page/n_TOF_data')
    input_filename = os.path.join(dir_path, f"{elementmass}.txt")

    # Validate input file exists
    if not os.path.exists(input_filename):
        print(f"Error: Input file '{input_filename}' not found.")
        return False

    # Read data from input file
    new_data_lines = []
    found_header = False
    with open(input_filename, 'r') as fin:
        for line in fin:
            if line.startswith('#'):
                if "kT [keV]" in line:
                    found_header = True
                continue
            if found_header and line.strip():
                parts = line.split()
                if len(parts) >= 3:
                    new_data_lines.append('\t'.join(parts[:3]))

    # Prepare new block
    new_block = [header_string + '\n'] + [line + '\n' for line in new_data_lines]

    # Process output file
    blocks = []
    current_block = []

    if os.path.exists(output_file):
        with open(output_file, 'r') as f:
            for line in f:
                if line.startswith('#') and "kT [keV]" in line:
                    # New block starting
                    if current_block:
                        blocks.append(current_block)
                    current_block = [line]
                else:
                    current_block.append(line)
            if current_block:
                blocks.append(current_block)

    # Remove existing block for this element-mass
    blocks = [block for block in blocks if not block[0].startswith(header_string)]

    # Add new block
    blocks.append(new_block)

    # Write all blocks back to file
    with open(output_file, 'w') as fout:
        for block in blocks:
            fout.writelines(block)

    print(f"Successfully updated data for {elementmass}")
    return True

# ----------------------------
# MAIN EXECUTION FLOW
# ----------------------------

# 1. Calculate theoretical MACS and SEF values
# run_dosef(element, mass)

# 2. Download experimental data for each library
for lab in labs:
    print(f"Downloading data for {element}{mass} from {lab}...")
    download_data(element, mass, lab)

# 3. Process downloaded data
for lab in labs:
    print(f"Evaluating MACS of {element}{mass} for {lab}...")
    evaluation(element, mass, lab)

# 4. Combine all data sources
combine_element_data(element, mass, format_hint)

# 5. Update isotope database
append_title(element, mass)

# 6. Create individual nTOF MACS in ASCII format
convert_nTOF_data_dynamic_ref(element, mass)

# 7. Merge data for download
merge(element, mass)