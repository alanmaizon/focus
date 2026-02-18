# Focus

**Focus** is a web-based application that visualizes chemical elements in 3D, providing an interactive way to learn and explore atomic structures. Built as a static site with modern web technologies including Three.js for 3D rendering.

🔗 **Live Demo**: [https://alanmaizon.github.io/focus/](https://alanmaizon.github.io/focus/)

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Interactive 3D atomic visualization** — see protons, neutrons, and electrons in motion
- **110+ elements** from the periodic table with accurate atomic data
- **Electron shell animation** with orbital rings and tilted paths
- **Element info panel** showing atomic number, protons, neutrons, electrons, and electron configuration
- **Modern dark theme** with responsive design for all screen sizes
- **Keyboard support** — press Enter to visualize after typing a symbol
- **Zero backend required** — runs entirely in the browser as a static site

## Screenshots

![Periodic Table View](https://github.com/user-attachments/assets/9ff6edfd-30e2-450f-ae6b-e1879784d67b)

![3D Atomic Model View](https://github.com/user-attachments/assets/9d00a272-af2b-47ac-808a-78454b24e6ce)

## Usage

1. Enter the symbol of an element in the input field (e.g., `Fe`, `Au`, `U`).
2. Click **Visualize** or press **Enter**.
3. View the 3D atomic model in the interactive modal.
4. Use mouse controls to rotate, zoom, and pan the 3D model.
5. Read element details in the info card below the periodic table.

## Installation

### Local Development

1. Clone the repository:

    ```bash
    git clone https://github.com/alanmaizon/focus.git
    cd focus
    ```

2. Serve the static files with any HTTP server:

    ```bash
    # Using Python
    python3 -m http.server 8000

    # Or using Node.js
    npx serve .
    ```

3. Open your browser and go to `http://localhost:8000`.

## Project Structure

```plaintext
focus/
├── index.html                # Main HTML page (static)
├── static/
│   ├── css/
│   │   └── styles.css        # Application styles
│   ├── js/
│   │   └── script.js         # 3D visualization & UI logic
│   └── img/
│       ├── periodic_table.png
│       └── n.jpg
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment workflow
└── README.md
```

## Deployment

This project is deployed automatically to **GitHub Pages** via GitHub Actions.

- Every push to the `main` branch triggers deployment.
- The workflow uploads the repository as a static site artifact and deploys it.
- No build step is required — the site is served directly as static files.

To set up GitHub Pages on your fork:
1. Go to **Settings → Pages** in your repository.
2. Under **Source**, select **GitHub Actions**.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add your feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License.
