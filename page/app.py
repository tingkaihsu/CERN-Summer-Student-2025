import csv
import os
import json
import shutil
import re  # Added for regex processing in reference parsing
from flask import Flask, render_template, jsonify, url_for
from flask_frozen import Freezer
import sys
import io

app = Flask(__name__)
app.config['SERVER_NAME'] = 'localhost'  # Add this
app.config['PREFERRED_URL_SCHEME'] = 'http'  # Add this
app.config['APPLICATION_ROOT'] = '/'  # Add this

# Optional command-line inputs: element mass (e.g., "au 197")
element = None
mass = None
isotope = None
if len(sys.argv) >= 3:
    element = sys.argv[1].lower()  # e.g., 'au'
    mass = sys.argv[2]             # e.g., '197'
    isotope = f"{element}{mass}"   # e.g., 'au197'

# Configuration for Flask-Freezer static site generator
app.config['FREEZER_DESTINATION'] = 'build'  # Output directory for generated site
app.config['FREEZER_STATIC_IGNORE'] = ['*']  # Skip all static files during freezing
app.config['FREEZER_REMOVE_EXTRA_FILES'] = True  # Clean build directory before generation
app.config['FREEZER_IGNORE_MIMETYPE_WARNINGS'] = True  # Suppress MIME type warnings
app.config['FREEZER_DEFAULT_MIMETYPE'] = 'text/html'  # Default content type
app.config['FREEZER_IGNORE_404_NOT_FOUND'] = True  # Ignore 404 errors during build

freezer = Freezer(app)

# Global data stores
ITEMS = []  # List of isotope items from items.csv
DATA_FILES = {}  # Dictionary mapping item IDs to their CSV data content

# ----------------------------
# Helpers for selective build
# ----------------------------

def _slugify_title(s: str) -> str:
    if not s:
        return ''
    s = s.strip().lower()
    s = re.sub(r'[^a0-9]+', '_', s)
    s = re.sub(r'_+', '_', s).strip('_')
    return s

def find_item_by_element_mass(items, element_in, mass_in):
    """Find an item by element+mass using several heuristics."""
    if not element_in or not mass_in:
        return None
    target = f"{element_in}{mass_in}".lower()
    for it in items:
        title = (it.get('title') or '').lower()
        # slug(title) exact match
        if _slugify_title(title) == target:
            return it
        # check explicit element/mass fields if present
        if it.get('element') and it.get('mass'):
            try:
                if it.get('element').lower() == element_in.lower() and str(it.get('mass')) == str(mass_in):
                    return it
            except Exception:
                pass
        # fallback: title contains element and mass
        if title.startswith(element_in.lower()) and mass_in in title:
            return it
    return None

def build_detail_context_for_item(item):
    """Build the data-only context used by the detail() route for a single item.
    This function DOES NOT call url_for() so it can run outside an app context.
    It returns existence flags and which filename to use for ratio.
    """
    metadata = {}
    details = []
    headers = []

    item_id = item['id']
    if item_id in DATA_FILES:
        raw = DATA_FILES[item_id]
        data_lines = []
        for line in raw.splitlines():
            line = line.strip()
            if not line:
                continue
            if line.startswith('#'):
                parts = line.lstrip('#').split(':', 1)
                if len(parts) == 2:
                    key = parts[0].strip()
                    val = parts[1].strip()
                    if key.upper() == 'REF':
                        urls = re.findall(r'https?://\S+', val)
                        if not urls:
                            doi_match = re.search(r'10\.\d{4,9}/\S+', val)
                            if doi_match:
                                doi = doi_match.group(0)
                                urls = [f'https://doi.org/{doi}'] if doi.startswith('10.') else [doi]
                            else:
                                urls = [val]
                        ref_links = metadata.get('REF', [])
                        for u in urls:
                            if u.startswith('http'):
                                link_html = f'<a href="{u}" target="_blank" rel="noopener">{u}</a>'
                            else:
                                link_html = u
                            ref_links.append(link_html)
                        metadata['REF'] = ref_links
                    else:
                        metadata[key] = val
                continue
            data_lines.append(line)

        if data_lines:
            reader = csv.reader(io.StringIO("\n".join(data_lines)))
            for idx, row in enumerate(reader):
                row = [c.strip() for c in row]
                if idx == 0:
                    headers = row
                else:
                    details.append(row)

    # n_TOF check (only existence checks, no URL generation)
    ntof_filename = f"{item['title'].lower()}.txt"
    root_dir = os.path.dirname(__file__)
    freezer_dest = app.config.get('FREEZER_DESTINATION', '').strip()

    ntof_candidates = []
    if freezer_dest:
        ntof_candidates.append(os.path.join(root_dir, freezer_dest, 'detail', 'n_TOF_data', ntof_filename))
        ntof_candidates.append(os.path.join(freezer_dest, 'detail', 'n_TOF_data', ntof_filename))
    ntof_candidates.append(os.path.join(root_dir, 'build', 'detail', 'n_TOF_data', ntof_filename))
    ntof_candidates.append(os.path.join(root_dir, 'detail', 'n_TOF_data', ntof_filename))
    ntof_candidates.append(os.path.join(root_dir, 'n_TOF_data', ntof_filename))

    ntof_path = None
    for p in ntof_candidates:
        if os.path.exists(p):
            ntof_path = p
            break
    ntof_available = bool(ntof_path)
    
    # Image checks (only existence checks, no url_for())
    title_slug = item['title'].lower()
    macs_filename = f"{title_slug}_macs.png"
    ratio_candidate = f"{title_slug}_macs_ratio.png"

    img_candidates = []
    if freezer_dest:
        img_candidates.append(os.path.join(root_dir, freezer_dest, 'static', 'images', macs_filename))
        img_candidates.append(os.path.join(root_dir, freezer_dest, 'static', 'images', 'ratio', ratio_candidate))
        img_candidates.append(os.path.join(freezer_dest, 'static', 'images', macs_filename))
        img_candidates.append(os.path.join(freezer_dest, 'static', 'images', 'ratio', ratio_candidate))

    img_candidates.append(os.path.join(root_dir, 'static', 'images', macs_filename))
    img_candidates.append(os.path.join(root_dir, 'static', 'images', 'ratio', ratio_candidate))
    img_candidates.append(os.path.join(root_dir, 'page', 'static', 'images', macs_filename))
    img_candidates.append(os.path.join(root_dir, 'page', 'static', 'images', 'ratio', ratio_candidate))

    macs_exists = any(os.path.exists(p) for p in img_candidates if p.endswith(macs_filename))
    ratio_in_ratio_subfolder = any(
        (p.endswith(os.path.join('ratio', ratio_candidate)))
        or ('/ratio/' in p.replace('\\','/'))  # handle different path styles
        for p in img_candidates if os.path.exists(p)
    )
    ratio_in_images_root = any(
        (p.endswith(ratio_candidate))
        for p in img_candidates if os.path.exists(p)
    )
    ratio_exists = ratio_in_ratio_subfolder or ratio_in_images_root

    # choose which ratio filename to advertise (prefer candidate1)
    chosen_ratio_filename = None
    if any(os.path.exists(p) for p in img_candidates if p.endswith(ratio_candidate)):
        chosen_ratio_filename = ratio_candidate
    else:
        pass

    return dict(
        item=item,
        metadata=metadata,
        table_headers=headers,
        item_details=details,
        ntof_available=ntof_available,
        ntof_filename=ntof_filename,
        # ntof_path=ntof_path,
        image_exists=macs_exists,
        image_filename=macs_filename,
        macs_in_images_root=any(os.path.exists(p) for p in img_candidates if p.endswith(macs_filename)),
        ratio_exists=ratio_exists,
        ratio_in_ratio_subfolder=ratio_in_ratio_subfolder,
        ratio_in_images_root=ratio_in_images_root,
        ratio_filename=chosen_ratio_filename
    )


def render_detail_html_to_build(item, build_root=None):
    """Render detail.html for given item and write it to build/detail/<id>.html.

    This version avoids calling url_for() outside of a request by building
    static file URLs as relative paths (e.g. "static/images/..."), which is
    appropriate for frozen/static sites.
    """
    build_root = build_root or app.config.get('FREEZER_DESTINATION') or os.path.join(os.path.dirname(__file__), 'build')
    out_dir = os.path.join(build_root, 'detail')
    os.makedirs(out_dir, exist_ok=True)

    # Build filesystem-only context (no url_for calls in this helper)
    ctx = build_detail_context_for_item(item)

    # Create app context for render_template (render_template still needs app context)
    with app.app_context():
        # Instead of url_for('static', ...), construct static paths directly.
        macs_url = None
        ratio_url = None

        if ctx.get('image_exists') and ctx.get('image_filename'):
            # relative path used in static site: "static/images/<file>"
            macs_url = f"../static/images/{ctx['image_filename']}"

        # choose ratio URL: prefer "static/images/ratio/<file>" if ratio file was found in ratio subfolder
        chosen_ratio = ctx.get('ratio_filename')
        if ctx.get('ratio_exists') and chosen_ratio:
            if ctx.get('ratio_in_ratio_subfolder'):
                ratio_url = f"../static/images/ratio/{chosen_ratio}"
            elif ctx.get('ratio_in_images_root'):
                ratio_url = f"../static/images/{chosen_ratio}"

        css_url = "../static/css/detail.css"
        html = render_template(
            'detail.html',
            css_url=css_url,
            item=ctx['item'],
            metadata=ctx['metadata'],
            table_headers=ctx['table_headers'],
            item_details=ctx['item_details'],
            ntof_available=ctx['ntof_available'],
            ntof_filename=ctx['ntof_filename'],
            image_exists=ctx['image_exists'],
            image_filename=ctx['image_filename'],
            macs_url=macs_url,
            ratio_exists=ctx['ratio_exists'],
            ratio_filename=ctx.get('ratio_filename'),
            ratio_url=ratio_url,
            search_url="../search.html"  # Added to provide static search URL
        )

    out_path = os.path.join(out_dir, f"{item['id']}.html")
    with open(out_path, 'w', encoding='utf-8') as fh:
        fh.write(html)
    print(f"Wrote detail page for id={item['id']} -> {out_path}")
    return out_path


# ----------------------------
# Existing functions (unchanged)
# ----------------------------

def load_data():
    """Loads all application data:
    1. Reads items.csv to populate ITEMS list
    2. Preloads all detail CSV files into DATA_FILES dictionary
    """
    # Clear previous state
    global ITEMS, DATA_FILES
    ITEMS = []
    DATA_FILES = {}

    # Load main items database
    csv_path = os.path.join(os.path.dirname(__file__), 'items.csv')
    if os.path.exists(csv_path):
        with open(csv_path, 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file, skipinitialspace=True)
            for row in reader:
                try:
                    # Clean row data and convert ID to integer
                    cleaned_row = {k.strip(): v.strip() for k, v in row.items()}
                    cleaned_row['id'] = int(cleaned_row['id'])
                    ITEMS.append(cleaned_row)
                except (ValueError, KeyError) as e:
                    print(f'Skipping invalid row: {e}')
    
    # Pre-load all detail CSVs from database directory
    db_path = os.path.join(os.path.dirname(__file__), 'database')
    for item in ITEMS:
        filename = f"{item['title'].lower()}.csv"
        filepath = os.path.join(db_path, filename)
        if os.path.exists(filepath):
            with open(filepath, 'r', encoding='utf-8') as f:
                # Store file content keyed by item ID
                DATA_FILES[item['id']] = f.read()

def copy_static_files(isotope=None):
    """Recursively copies static files to build directory while preserving structure.
    If isotope is provided, only copies files related to that isotope (always overwrites).
    """
    src_static_dir = os.path.join(os.path.dirname(__file__), 'static')
    build_static_dir = os.path.join(app.config['FREEZER_DESTINATION'], 'static')
    
    # Ensure destination exists
    os.makedirs(build_static_dir, exist_ok=True)

    # If we are targeting a specific isotope, define the expected files
    isotope_files = []
    if isotope:
        isotope_files = [
            f"{isotope}_macs.png",
            f"{isotope}_macs_ratio.png",       # ✅ corrected naming convention
        ]
    
    # Recursive copy preserving directory structure
    for root, dirs, files in os.walk(src_static_dir):
        # Calculate relative path within static directory
        rel_path = os.path.relpath(root, src_static_dir)
        dest_dir = os.path.join(build_static_dir, rel_path)
        
        # Create mirrored directory in build
        os.makedirs(dest_dir, exist_ok=True)
        
        for filename in files:
            # If isotope mode is on, skip unrelated files
            if isotope and not any(filename.endswith(f) for f in isotope_files):
                continue

            src_path = os.path.join(root, filename)
            dst_path = os.path.join(dest_dir, filename)

            if isotope:
                # Force overwrite for isotope-specific files
                shutil.copy2(src_path, dst_path)
                print(f"Copied (forced update for {isotope}): {os.path.join(rel_path, filename)}")
            else:
                # Default mode: copy only if newer/missing
                if not os.path.exists(dst_path) or (os.path.getmtime(src_path) > os.path.getmtime(dst_path)):
                    shutil.copy2(src_path, dst_path)
                    print(f"Copied static file: {os.path.join(rel_path, filename)}")
                else:
                    print(f"Skipped (already up-to-date): {os.path.join(rel_path, filename)}")

def copy_n_tof_data(isotope=None):
    """Copy n_TOF_data into build/detail/n_TOF_data
    
    - If isotope is provided: copy only that isotope file (forced update)
    - If isotope is None: copy all files, only updating if source is newer
    """
    src_dir = os.path.join(os.path.dirname(__file__), 'n_TOF_data')
    build_dir = os.path.join(app.config['FREEZER_DESTINATION'], 'detail', 'n_TOF_data')
    
    if not os.path.isdir(src_dir):
        print(f"Source n_TOF_data directory not found: {src_dir}")
        return
    
    # Ensure destination directory exists
    os.makedirs(build_dir, exist_ok=True)
    
    if isotope:
        # Single-isotope mode
        isotope = re.sub(r'[^a-z0-9]', '', isotope.lower())
        if not isotope:
            print("Invalid isotope name after sanitization.")
            return
            
        src_file = os.path.join(src_dir, f"{isotope}.txt")
        dst_file = os.path.join(build_dir, f"{isotope}.txt")
        
        if os.path.exists(src_file):
            shutil.copy2(src_file, dst_file)
            print(f"Copied n_TOF file for {isotope}")
        else:
            print(f"Missing source n_TOF file: {src_file}")
    else:
        # # Full directory sync
        # for item in os.listdir(src_dir):
        #     src_path = os.path.join(src_dir, item)
        #     dst_path = os.path.join(build_dir, item)
            
        #     if os.path.isfile(src_path) and src_path.endswith('.txt'):
        #         # Only copy if file doesn't exist or source is newer
        #         if not os.path.exists(dst_path) or os.path.getmtime(src_path) > os.path.getmtime(dst_path):
        #             shutil.copy2(src_path, dst_path)
        #             print(f"Copied: {item}")
        pass

def render_all_items_html_to_build(build_root=None):
    """Render all_items.html into build/all-items.html (static output).
    Uses app.app_context() so render_template/url_for work without an active request.
    """
    build_root = build_root or app.config.get('FREEZER_DESTINATION') or os.path.join(os.path.dirname(__file__), 'build')
    os.makedirs(build_root, exist_ok=True)

    # When building a static file, it's usually best to use relative links in templates.
    # If your template expects a route name instead of a relative path, pass in search_url etc.
    with app.app_context():
        html = render_template(
            'all_items.html',
            items_json=json.dumps(ITEMS),
            # provide a simple relative path for search/index if the template uses it
            search_url="../search.html",
            index_url="../index.html"
        )

    out_path = os.path.join(build_root, 'all-items.html')
    with open(out_path, 'w', encoding='utf-8') as fh:
        fh.write(html)
    print(f"Wrote all-items page -> {out_path}")
    return out_path

def render_items_json_to_build(build_root=None):
    """Write items.json into the build folder."""
    build_root = build_root or app.config.get('FREEZER_DESTINATION') or os.path.join(os.path.dirname(__file__), 'build')
    os.makedirs(build_root, exist_ok=True)

    out_path = os.path.join(build_root, 'items.json')
    with open(out_path, 'w', encoding='utf-8') as fh:
        json.dump(ITEMS, fh, ensure_ascii=False, indent=2)

    print(f"Wrote items.json -> {out_path}")
    return out_path


# ----------------------------
# FLASK ROUTES
# ----------------------------

@app.route('/')
def index():
    """Main landing page"""
    return render_template('index.html')

@app.route('/search.html')
def search():
    """Search page with all items data"""
    return render_template('search.html', items_json=json.dumps(ITEMS))

@app.route('/all-items.html')
def all_items():
    """Page displaying all available items"""
    return render_template('all_items.html', items_json=json.dumps(ITEMS))

@app.route('/detail/<int:item_id>.html')
def detail(item_id):
    """Detail page for a specific isotope item"""
    # Find item by ID
    item = next((i for i in ITEMS if i['id'] == item_id), None)
    if not item:
        return "Item not found", 404

    # Initialize data containers
    metadata = {}  # Extracted from CSV comments
    details = []    # Table data rows
    headers = []    # Table column headers
    # print(DATA_FILES)
    if item_id in DATA_FILES:
        # Process each line of the CSV data
        for line in DATA_FILES[item_id].split('\n'):
            line = line.strip()
            if not line:
                continue
                
            # Process metadata lines (comments)
            if line.startswith('#'):
                parts = line.lstrip('#').split(':', 1)
                if len(parts) == 2:
                    key = parts[0].strip()
                    val = parts[1].strip()

                    # Special handling for reference links
                    if key.upper() == 'REF':
                        # Extract URLs and DOIs
                        urls = re.findall(r'https?://\S+', val)
                        if not urls:
                            # Try to find DOI if no URL present
                            doi_match = re.search(r'10\.\d{4,9}/\S+', val)
                            if doi_match:
                                doi = doi_match.group(0)
                                urls = [f'https://doi.org/{doi}'] if doi.startswith('10.') else [doi]
                            else:
                                urls = [val]

                        # Generate HTML links
                        ref_links = metadata.get('REF', [])
                        for u in urls:
                            if u.startswith('http'):
                                link_html = f'<a href="{u}" target="_blank" rel="noopener">{u}</a>'
                            else:
                                link_html = u
                            ref_links.append(link_html)
                        metadata['REF'] = ref_links
                    else:
                        # Store other metadata normally
                        metadata[key] = val
            else:
                # Process data rows
                cells = [c.strip() for c in line.split(',')]
                if not headers:
                    # First non-comment line = headers
                    headers = cells
                else:
                    # Subsequent lines = data rows
                    details.append(cells)

    # Determine plot image paths
    macs_filename = f"{item['title'].lower()}_macs.png"
    ratio_filename = f"{item['title'].lower()}_macs_ratio.png"

    # Candidate paths to check in different environments
    freezer_dest = app.config.get('FREEZER_DESTINATION', '')
    candidates = []

    # Build environment paths
    if freezer_dest:
        candidates.append(os.path.join(freezer_dest, 'static', 'images', macs_filename))
        candidates.append(os.path.join(freezer_dest, 'static', 'images', 'ratio', ratio_filename))

    # Development environment paths
    root_dir = os.path.dirname(__file__)
    candidates.append(os.path.join(root_dir, 'static', 'images', macs_filename))
    candidates.append(os.path.join(root_dir, 'static', 'images', 'ratio', ratio_filename))
    candidates.append(os.path.join(root_dir, 'page', 'static', 'images', macs_filename))
    candidates.append(os.path.join(root_dir, 'page', 'static', 'images', 'ratio', ratio_filename))

    # Check plot file existence
    macs_exists = any(os.path.exists(p) for p in candidates if p.endswith(macs_filename))
    ratio_exists = any(os.path.exists(p) for p in candidates if p.endswith(os.path.join('ratio', ratio_filename)) or p.endswith(ratio_filename) and 'ratio' in p)

    # Generate URLs for templates
    macs_url = None
    ratio_url = None

    # Prefer ratio subfolder URL if available
    if ratio_exists:
        ratio_url = url_for('static', filename=f'images/ratio/{ratio_filename}')
    else:
        # Fallback to base images directory
        if any(os.path.exists(p) for p in candidates if p.endswith(ratio_filename)):
            ratio_url = url_for('static', filename=f'images/{ratio_filename}')

    # MACS plot URL
    if macs_exists:
        macs_url = url_for('static', filename=f'images/{macs_filename}')
    else:
        if any(os.path.exists(p) for p in candidates if p.endswith(macs_filename)):
            macs_url = url_for('static', filename=f'images/{macs_filename}')

    return render_template(
        'detail.html',
        item=item,
        metadata=metadata,
        table_headers=headers,
        item_details=details,
        image_exists=macs_exists,
        image_filename=macs_filename,
        macs_url=macs_url,
        ratio_exists=ratio_exists,
        ratio_filename=ratio_filename,
        ratio_url=ratio_url,
        search_url=url_for('search')  # Added for dynamic route
    )

@app.route('/items.json')
def items_json():
    """JSON endpoint for all items data"""
    return jsonify(ITEMS)

# ----------------------------
# FREEZER URL GENERATORS
# ----------------------------

@freezer.register_generator
def detail():
    """Generate URLs for all detail pages"""
    for item in ITEMS:
        yield {'item_id': item['id']}

@freezer.register_generator
def search():
    """URL generator for search page - only if file doesn't exist"""
    build_dir = os.path.join(app.root_path, 'build')
    search_path = os.path.join(build_dir, 'search.html')
    
    # Only generate if file doesn't exist
    if not os.path.exists(search_path):
        yield {}
    else:
        print(f"search.html already exists, skipping generation")

@freezer.register_generator
def index():
    """URL generator for index page - only if file doesn't exist"""
    build_dir = os.path.join(app.root_path, 'build')
    index_path = os.path.join(build_dir, 'index.html')
    
    # Only generate if file doesn't exist
    if not os.path.exists(index_path):
        yield {}
    else:
        print(f"index.html already exists, skipping generation")

@freezer.register_generator
def all_items():
    """URL generator for all-items page"""
    yield {}

# ----------------------------
# BUILD PROCESS
# ----------------------------

if __name__ == '__main__':
    # Initialize data
    load_data()
    
    # If element+mass were provided, perform selective update and exit early
    if isotope:
        found_item = find_item_by_element_mass(ITEMS, element, mass)
        if not found_item:
            print(f"Error: no item found for {element}{mass} in items.csv")
            sys.exit(2)

        # Ensure build directory exists
        build_dir = os.path.join(app.root_path, app.config.get('FREEZER_DESTINATION', 'build'))
        os.makedirs(build_dir, exist_ok=True)

        # Copy only the required static files and n_TOF file for this isotope.
        try:
            copy_static_files(isotope=isotope)
        except Exception as e:
            print(f"copy_static_files(isotope) failed: {e}")

        try:
            copy_n_tof_data(isotope=isotope)
        except Exception as e:
            print(f"copy_n_tof_data(isotope) failed: {e}")

        # Render only the single detail page (overwrite in build/detail/<id>.html)
        try:
            out_file = render_detail_html_to_build(found_item, build_root=app.config.get('FREEZER_DESTINATION', build_dir))
        except Exception as e:
            print(f"Failed to render detail page for id={found_item['id']}: {e}")
            raise

        # ALSO update the all-items list (static) so it reflects the changed item
        try:
            render_all_items_html_to_build(build_root=app.config.get('FREEZER_DESTINATION', build_dir))
        except Exception as e:
            print(f"Failed to render all-items.html: {e}")
        print("Selective detail page update completed.")

        # ALSO update the items.json file (static)
        try:
            render_items_json_to_build(build_root=app.config.get('FREEZER_DESTINATION', build_dir))
        except Exception as e:
            print(f"Failed to render items.json: {e}")


        sys.exit(0)
    
    # Prepare build directory
    build_dir = os.path.join(app.root_path, 'build')
    os.makedirs(build_dir, exist_ok=True)
    
    # Generate static site
    print("Starting freeze process...")
    freezer.freeze()
    print("Freeze process completed successfully!")
    
    # Additional file copies
    copy_static_files(isotope)
    copy_n_tof_data(isotope)
    print("isotope is ", isotope)
    # Prepare static directory in build
    static_css_dst = os.path.join(build_dir, 'static/css')
    os.makedirs(static_css_dst, exist_ok=True)
    
    # Copy static files
    static_css_src = os.path.join(app.root_path, 'static/css')

    if os.path.exists(static_css_src):
        for item in os.listdir(static_css_src):
            src_path = os.path.join(static_css_src, item)
            dst_path = os.path.join(static_css_dst, item)

            if not os.path.exists(dst_path):
                if os.path.isdir(src_path):
                    shutil.copytree(src_path, dst_path)
                else:
                    shutil.copy2(src_path, dst_path)
        print(f"Copied static files from {static_css_src} to {static_css_dst}")
    else:
        print(f"Warning: Static source directory not found: {static_css_src}")
    # Verify plot images
    print("\nVerifying MACS plot images:")
    static_dst = os.path.join(build_dir, 'static')
    images_dir = os.path.join(static_dst, 'images')
    missing_images = []
    
    for item in ITEMS:
        image_name = f"{item['title'].lower()}_macs.png"
        image_path = os.path.join(images_dir, image_name)
        
        if os.path.exists(image_path):
            print(f"✓ Found image for {item['title']}: {image_name}")
        else:
            print(f"✗ Missing image for {item['title']}: {image_name}")
            missing_images.append(image_name)
    
    # Report missing images
    if missing_images:
        print(f"\nWarning: {len(missing_images)} images missing!")
        print("Please ensure these files exist in static/images:")
        for img in missing_images:
            print(f" - {img}")
    else:
        print("\nAll MACS plot images verified!")
    
    print("Static site built successfully!")