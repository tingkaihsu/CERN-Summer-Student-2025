import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import re
import json
import os
import sys
from matplotlib.lines import Line2D

element = sys.argv[1].lower()  # Element symbol (e.g., 'zr')
mass = sys.argv[2]     # Mass number (e.g., '96')

# ----------------------------
# DATA PROCESSING UTILITIES
# ----------------------------

def parse_value_uncertainty(entry):
    """Parse various number formats including uncertainties and missing values.
    Returns (value, uncertainty) tuple with NaNs for missing data.
    
    Handles formats:
    - "123.45 ± 6.78"
    - "123.45(67)"
    - "123.45 (stat) (sys)"
    - "123.45 (-stat/+stat)"
    """
    # Handle missing data cases
    if pd.isna(entry) or entry in ['-', '–', '']:
        return np.nan, np.nan
    
    if isinstance(entry, str):
        # New format: "value (stat) (sys)" or asymmetric uncertainties
        match_new = re.match(r'^\s*([\d.]+)\s*\(\s*([\d.+-]+)\s*\)', entry.strip())
        if match_new:
            try:
                value = float(match_new.group(1))
                stat_unc = match_new.group(2)
                
                # Handle asymmetric uncertainties
                if '/' in stat_unc:
                    parts = re.findall(r'([\d.]+)', stat_unc)
                    if parts:
                        # Use maximum absolute value for error bars
                        stat_unc_val = max(map(abs, map(float, parts)))
                        return value, stat_unc_val
                
                return value, float(stat_unc)
            except:
                pass
        
        # Traditional formats: "123 ± 45", "123(45)"
        match_old = re.match(r'([\d.,E\+\-]+)\s*(?:±|\()\s*([\d.,E\+\-]+)\s*\)?', entry.strip())
        if match_old:
            try:
                return float(match_old.group(1)), float(match_old.group(2))
            except:
                pass
        
        # Simple numeric value
        try:
            return float(entry), np.nan
        except:
            return np.nan, np.nan
    
    # Numeric type input
    try:
        return float(entry), np.nan
    except:
        return np.nan, np.nan

def load_and_process_data(file_path):
    """Load CSV file and process MACS columns with automatic uncertainty parsing"""
    df = pd.read_csv(file_path, comment='#')
    
    # Identify MACS columns (containing "(mb)")
    macs_columns = [col for col in df.columns if '(mb)' in col]
    
    # Process each MACS column: split into value and uncertainty
    for col in macs_columns:
        df[[f'{col}_value', f'{col}_unc']] = df[col].apply(
            lambda x: pd.Series(parse_value_uncertainty(x)))
    
    return df

# ----------------------------
# PLOTTING UTILITIES
# ----------------------------

def plot_data_with_line(ax, x, y, label, color, marker, **kwargs):
    """Plot connected data points without error bars"""
    valid_idx = ~np.isnan(y)
    if not valid_idx.any():
        return
    
    # Extract styling parameters (defaults provided)
    line_style = kwargs.get('line_style', '--')
    line_alpha = kwargs.get('line_alpha', 0.4)
    line_width = kwargs.get('line_width', 1.5)
    marker_size = kwargs.get('marker_size', 60)
    
    # Plot connecting line (subtle style)
    ax.plot(x[valid_idx], y[valid_idx], 
            color=color, linestyle=line_style, 
            alpha=line_alpha, linewidth=line_width)
    
    # Plot markers (prominent with outline)
    ax.scatter(x[valid_idx], y[valid_idx], s=marker_size,
               label=label, marker=marker, color=color, 
               edgecolor='k', alpha=0.9)

def plot_data_with_uncertainty(ax, x, y, yerr, label, color, marker, **kwargs):
    """Plot data with error bars and connecting line"""
    valid_idx = ~np.isnan(y)
    if not valid_idx.any():
        return
    
    # Extract styling parameters
    line_style = kwargs.get('line_style', '--')
    line_alpha = kwargs.get('line_alpha', 0.4)
    line_width = kwargs.get('line_width', 1.5)
    marker_size = kwargs.get('marker_size', 60)
    capsize = kwargs.get('capsize', 5)
    
    # Plot connecting line
    ax.plot(x[valid_idx], y[valid_idx], 
            color=color, linestyle=line_style, 
            alpha=line_alpha, linewidth=line_width)
    
    # Separate points with/without uncertainties
    has_unc = ~np.isnan(yerr) & valid_idx
    no_unc = np.isnan(yerr) & valid_idx
    
    # Plot points with error bars
    if has_unc.any():
        ax.errorbar(x[has_unc], y[has_unc], yerr=yerr[has_unc],
                    fmt=marker, color=color, capsize=capsize, 
                    ms=marker_size/8, elinewidth=1.5,
                    label=label if no_unc.any() else label,
                    alpha=0.9, markeredgecolor='k')
    
    # Plot points without uncertainties
    if no_unc.any():
        ax.scatter(x[no_unc], y[no_unc], s=marker_size,
                   marker=marker, color=color, 
                   label=label if not has_unc.any() else None,
                   edgecolor='k', alpha=0.9)
        
def plot_ratio_with_line(ax, x, y, ref_y, label, color, marker, **kwargs):
    """Plot ratio to reference without uncertainty propagation.
    Returns (ratio_min, ratio_max, x_min, x_max) for axis scaling.
    """
    # Validate data: non-zero reference with existing values
    valid_idx = (~np.isnan(y)) & (~np.isnan(ref_y)) & (ref_y != 0)
    if not valid_idx.any():
        return None

    ratio = (y[valid_idx] / ref_y[valid_idx]).astype(float)

    # Extract styling parameters
    line_style = kwargs.get('line_style', '--')
    line_alpha = kwargs.get('line_alpha', 0.4)
    line_width = kwargs.get('line_width', 1.5)
    marker_size = kwargs.get('marker_size', 50)

    # Plot connecting line
    ax.plot(x[valid_idx], ratio,
            color=color, linestyle=line_style,
            alpha=line_alpha, linewidth=line_width)

    # Plot markers
    ax.scatter(x[valid_idx], ratio,
               s=marker_size, marker=marker, color=color,
               edgecolor='k', alpha=0.9, label=label)

    return (float(np.nanmin(ratio)), float(np.nanmax(ratio)), 
            float(np.nanmin(x[valid_idx])), float(np.nanmax(x[valid_idx])))

# ----------------------------
# MAIN PLOTTING FUNCTIONS
# ----------------------------

def plot_macs_comparison(element, mass, **kwargs):
    """
    Create MACS comparison plot for specific element-mass pair
    
    Args:
        element: Element symbol (e.g., 'zr')
        mass: Mass number (e.g., '96')
        kwargs: Customization options:
            xlim - Tuple for x-axis limits (e.g., (0, 100))
            ylim - Tuple for y-axis limits
            title - Custom plot title
    """
    base_dir = 'page'  # Root directory for data and configs
    data_dir = os.path.join(base_dir, 'database')
    config_dir = os.path.join(base_dir, 'plot_config')
    config_dir = f"{element}{mass}"
    # Load plot configuration (if available)
    config_file = os.path.join(config_dir, f"{element}{mass}.json")
    try:
        with open(config_file, 'r') as f:
            plot_config = json.load(f)
    except FileNotFoundError:
        plot_config = None
        print(f"Warning: Using auto-generated config for {element}{mass}")

    # Load and process data
    data_file = os.path.join(data_dir, f"{element}{mass}.csv")
    df = load_and_process_data(data_file)
    T = df['kT (keV)']  # Temperature values
    
    # Create plot
    fig, ax = plt.subplots(figsize=(10, 6))
    
    # Auto-configure if no config provided
    if plot_config is None:
        plot_config = []
        colors = plt.cm.tab10.colors
        markers = ['o', 's', '^', 'd', 'v', '<', '>', 'p', '*', 'X']
        
        for i, col in enumerate(df.columns):
            if '_value' in col and '(mb)' in col:
                base_col = col.replace('_value', '')
                label = base_col.split(' (mb)')[0]
                unc_col = base_col + '_unc'
                with_unc = unc_col in df.columns and not df[unc_col].isna().all()
                
                plot_config.append({
                    'column': base_col,
                    'label': label,
                    'color': colors[i % len(colors)],
                    'marker': markers[i % len(markers)],
                    'with_unc': with_unc
                })
    
    # Plot each dataset according to configuration
    for config in plot_config:
        base_col = config['column']
        values = df.get(f'{base_col}_value', pd.Series(np.nan * len(df)))
        uncertainties = df.get(f'{base_col}_unc', pd.Series(np.nan * len(df)))
        
        # Extract style parameters
        style_params = {k: v for k, v in config.items() 
                       if k not in ['column', 'label', 'color', 'marker', 'with_unc']}
        
        if config.get('with_unc', True):
            plot_data_with_uncertainty(
                ax, T, values, uncertainties,
                config['label'], config['color'], config['marker'],
                **style_params
            )
        else:
            plot_data_with_line(
                ax, T, values,
                config['label'], config['color'], config['marker'],
                **style_params
            )
    
    # Configure plot appearance
    ax.set_xlabel('kT (keV)', fontsize=12)
    ax.set_ylabel('MACS (mb)', fontsize=12)
    element_name = element.capitalize()
    ax.set_title(f'{element_name}{mass} MACS Comparison', fontsize=14)
    
    # Build legend in configuration order
    legend_handles = []
    for config in plot_config:
        handle = Line2D([0], [0],
                        color=config['color'],
                        marker=config['marker'],
                        linestyle=config.get('line_style', '--'),
                        markersize=8,
                        linewidth=config.get('line_width', 1.5),
                        label=config['label'])
        legend_handles.append(handle)

    ax.legend(handles=legend_handles, fontsize=10)
    ax.grid(True, alpha=0.3)
    plt.tight_layout()
    
    # Add disclaimer about uncertainty types
    plt.figtext(0.95, 0.01, "Note: Only statistical uncertainties are shown", 
                ha="right", fontsize=9, style="italic")
    
    # Apply custom settings
    if 'xlim' in kwargs: ax.set_xlim(kwargs['xlim'])
    if 'ylim' in kwargs: ax.set_ylim(kwargs['ylim'])
    if 'title' in kwargs: ax.set_title(kwargs['title'], fontsize=14)
    
    return fig, ax

def plot_ratio(element, mass, **kwargs):
    """Create ratio plot relative to n_TOF reference data
    
    Args:
        element: Element symbol (e.g., 'zr')
        mass: Mass number (e.g., '96')
        kwargs: Customization options (xlim, ylim, title)
    """
    base_dir = 'page'
    data_dir = os.path.join(base_dir, 'database')
    config_dir = f"{element}{mass}"

    # Load configuration
    config_file = os.path.join(config_dir, f"{element}{mass}.json")
    try:
        with open(config_file, 'r') as f:
            plot_config = json.load(f)
    except FileNotFoundError:
        plot_config = None

    # Load and process data
    data_file = os.path.join(data_dir, f"{element}{mass}.csv")
    df = load_and_process_data(data_file)
    # print("here is df: ",df['kT (keV)'])
    df['kT (keV)'] = pd.to_numeric(df['kT (keV)'], errors='coerce')
    T = df['kT (keV)']

    fig, ax = plt.subplots(figsize=(10, 6))
    ax.axhline(1, color='gray', linestyle='--', alpha=0.7)  # Reference line

    # Identify n_TOF reference dataset
    reference_config = None
    reference_values = None

    # Search in configuration
    if plot_config:
        for config in plot_config:
            if 'n_tof' in config['label'].lower() or 'n_tof' in config['column'].lower():
                base_col = config['column']
                reference_values = df.get(f'{base_col}_value', pd.Series(np.nan * len(df)))
                reference_config = config
                break

    # Fallback: column name search
    if not reference_config:
        for col in df.columns:
            if 'n_tof' in col.lower() and '_value' in col:
                base_col = col.replace('_value', '')
                reference_values = df[col]
                reference_config = {'column': base_col, 'label': 'n_TOF (auto-detected)'}
                break

    # Auto-configure if no config
    if not plot_config:
        plot_config = []
        colors = plt.cm.tab10.colors
        markers = ['o', 's', '^', 'd', 'v', '<', '>', 'p', '*', 'X']

        for i, col in enumerate(df.columns):
            if '_value' in col and '(mb)' in col:
                base_col = col.replace('_value', '')
                label = base_col.split(' (mb)')[0]
                
                if 'n_tof' in base_col.lower():
                    reference_values = df[col]
                    reference_config = {'column': base_col, 'label': label}

                plot_config.append({
                    'column': base_col,
                    'label': label,
                    'color': colors[i % len(colors)],
                    'marker': markers[i % len(markers)]
                })

    # Plot ratios relative to reference
    legend_handles = []
    ratio_bounds = []  # For dynamic axis scaling
    x_bounds = []

    for config in plot_config:
        base_col = config['column']
        
        # Skip reference dataset
        if reference_config and base_col == reference_config['column']:
            continue

        values = df.get(f'{base_col}_value', pd.Series(np.nan * len(df)))
        style_params = {k: v for k, v in config.items()
                       if k not in ['column', 'label', 'color', 'marker', 'with_unc']}

        if reference_values is not None:
            result = plot_ratio_with_line(
                ax, T, values, reference_values,
                config['label'], config['color'], config['marker'],
                **style_params
            )

            if result:
                rmin, rmax, xmin, xmax = result
                ratio_bounds.append((rmin, rmax))
                x_bounds.append((xmin, xmax))

                # Create legend entry
                handle = Line2D([0], [0],
                                color=config['color'],
                                marker=config['marker'],
                                linestyle=config.get('line_style', '--'),
                                markersize=8,
                                linewidth=config.get('line_width', 1.5),
                                label=config['label'])
                legend_handles.append(handle)

    # Configure plot
    ax.set_xlabel('kT (keV)', fontsize=12)
    ax.set_ylabel('Ratio w.r.t n_TOF', fontsize=12)
    element_name = element.capitalize()
    ref_label = reference_config['label'] if reference_config else 'n_TOF'
    ax.set_title(f'{element_name}{mass} MACS Ratio to {ref_label}', fontsize=14)
    
    if legend_handles:
        ax.legend(handles=legend_handles, fontsize=10)
    ax.grid(True, alpha=0.3)

    # Dynamic axis scaling
    if 'ylim' not in kwargs and ratio_bounds:
        all_mins = [r[0] for r in ratio_bounds]
        all_maxs = [r[1] for r in ratio_bounds]
        ymin = min(all_mins)
        ymax = max(all_maxs)
        margin = max(0.08 * (ymax - ymin), 0.02)
        ax.set_ylim(ymin - margin, ymax + margin)

    if 'xlim' not in kwargs and not T.dropna().empty:
        tmin, tmax = T.min(), T.max()
        tmargin = max(0.02 * (tmax - tmin), 0.1)
        ax.set_xlim(tmin - tmargin, tmax + tmargin)

    plt.tight_layout()
    plt.figtext(0.95, 0.01, "Note: Ratios calculated without uncertainty propagation",
                ha="right", fontsize=9, style="italic")

    # Apply custom settings
    if 'xlim' in kwargs: ax.set_xlim(kwargs['xlim'])
    if 'ylim' in kwargs: ax.set_ylim(kwargs['ylim'])
    if 'title' in kwargs: ax.set_title(kwargs['title'], fontsize=14)

    return fig, ax

# ----------------------------
# EXECUTION HANDLER
# ----------------------------

if __name__ == "__main__":
    # Ensure output directories exist for saving the images
    output_dir_images = os.path.join('page', 'static', 'images')
    output_dir_images_ratio = os.path.join(output_dir_images, 'ratio')

    # Create the directories if they don't exist
    os.makedirs(output_dir_images, exist_ok=True)
    os.makedirs(output_dir_images_ratio, exist_ok=True)

    # Save ratio plot
    fig, ax = plot_ratio(element, mass, xlim=(0, 110))
    plt.savefig(f'{output_dir_images_ratio}/{element}{mass}_macs_ratio.png', dpi=300, bbox_inches='tight')

    # Save MACS comparison plot
    fig, ax = plot_macs_comparison(element, mass, xlim=(0, 110))
    plt.savefig(f'{output_dir_images}/{element}{mass}_macs.png', dpi=300, bbox_inches='tight')
