# Membuat struktur proyek React dasar untuk halaman website
# Akan dibuat file HTML dan JSX untuk masing-masing halaman
# Ini adalah simulasi output struktur proyek agar user bisa memahami hasilnya

import os

# Struktur direktori utama proyek React
project_structure = {
    "public": ["index.html"],
    "src": {
        "components": ["Navbar.jsx", "Footer.jsx"],
        "pages": [
            "Home.jsx",
            "Informasi.jsx",
            "Diagnosis.jsx",
            "HasilDiagnosis.jsx",
            "Kontak.jsx"
        ],
        "App.jsx": "",
        "index.js": ""
    },
    "package.json": ""
}

# Fungsi untuk membuat struktur folder dan file (simulasi)
def create_project_structure(base_path="/mnt/data/diagnosis-game"):
    os.makedirs(base_path, exist_ok=True)
    for folder, contents in project_structure.items():
        folder_path = os.path.join(base_path, folder)
        if isinstance(contents, list):
            os.makedirs(folder_path, exist_ok=True)
            for file in contents:
                with open(os.path.join(folder_path, file), "w") as f:
                    f.write(f"// {file}")
        elif isinstance(contents, dict):
            os.makedirs(folder_path, exist_ok=True)
            for subfile in contents:
                if isinstance(contents[subfile], list):
                    subfolder_path = os.path.join(folder_path, subfile)
                    os.makedirs(subfolder_path, exist_ok=True)
                    for f_name in contents[subfile]:
                        with open(os.path.join(subfolder_path, f_name), "w") as f:
                            f.write(f"// {f_name}")
                else:
                    with open(os.path.join(folder_path, subfile), "w") as f:
                        f.write(f"// {subfile}")

create_project_structure()
