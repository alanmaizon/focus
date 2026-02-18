# GitHub Copilot Instructions for Focus

## Project Overview

Focus is a web-based application that visualizes chemical elements in 3D, providing an interactive way to learn and explore atomic structures. The project is primarily a static site built with modern web technologies, deployed to GitHub Pages.

## Technology Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **3D Graphics**: Three.js (with OrbitControls and GLTFLoader)
- **Backend** (optional/development): Flask (Python) for local development server
- **Deployment**: GitHub Pages (static site deployment via GitHub Actions)

## Project Structure

```
focus/
├── index.html              # Main HTML page (static)
├── static/
│   ├── css/
│   │   └── styles.css      # Application styles
│   ├── js/
│   │   ├── script.js       # Main 3D visualization & UI logic
│   │   ├── three.min.js    # Three.js library
│   │   ├── OrbitControls.js
│   │   └── GLTFLoader.js
│   └── img/                # Image assets
├── elements.py             # Python dictionary of element data (for Flask backend)
├── app.py                  # Flask application (optional, for development)
├── requirements.txt        # Python dependencies (Flask, gunicorn)
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages deployment workflow
```

## Code Style and Conventions

### JavaScript

- Use modern ES6+ syntax (const/let, arrow functions, template literals)
- Follow camelCase naming convention for variables and functions
- Use descriptive variable names (e.g., `atomicNumber`, `protons`, `neutrons`)
- Keep the code clean and well-commented for educational purposes
- Maintain consistency with Three.js patterns and conventions

### Python

- Follow PEP 8 style guidelines
- Use clear, descriptive names for variables and functions
- The Flask backend is primarily for development; production uses static files

### CSS

- Use modern CSS features (flexbox, grid)
- Maintain the dark theme aesthetic (background: #111827)
- Ensure responsive design for all screen sizes
- Keep styles organized and well-commented

## Key Features to Maintain

1. **3D Atomic Visualization**: Accurate representation of protons, neutrons, and electrons
2. **Electron Shell Animation**: Orbital rings with tilted paths for visual interest
3. **Element Data Accuracy**: Maintain scientific accuracy in atomic numbers, particle counts, and electron configurations
4. **Interactive Controls**: Mouse-based rotation, zoom, and pan via OrbitControls
5. **Keyboard Support**: Enter key to trigger visualization
6. **Responsive Design**: Works on all screen sizes
7. **Zero Backend Requirement**: Production site runs entirely in the browser

## Element Data Structure

Elements are stored in two places:
1. `elements.py` - Python dictionary for Flask backend
2. `static/js/script.js` - JavaScript object for frontend

Each element follows this structure:
```javascript
{
  atomicNumber: number,
  protons: number,
  neutrons: number,
  electrons: [array of electron counts per shell]
}
```

**Important**: When adding or modifying elements, update BOTH locations to maintain consistency.

## Development Workflow

### Local Development

```bash
# Option 1: Python HTTP server
python3 -m http.server 8000

# Option 2: Flask app (if using backend features)
python app.py

# Option 3: Node.js serve
npx serve .
```

### Testing

- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Verify 3D rendering performance
- Check responsive behavior on different screen sizes
- Validate element data accuracy against periodic table references

### Deployment

- Automatic deployment to GitHub Pages via GitHub Actions
- Every push to `main` branch triggers deployment
- No build step required - static files are served directly

## Best Practices

1. **Performance**: Keep 3D scene optimized (minimize particle counts for large atoms)
2. **Accessibility**: Maintain keyboard support and clear visual feedback
3. **Scientific Accuracy**: Verify atomic data against reliable sources
4. **Browser Compatibility**: Test across major browsers
5. **Code Comments**: Add comments for complex 3D calculations and algorithms
6. **Static-First**: Remember the site is primarily static; minimize backend dependencies

## Common Tasks

### Adding a New Element

1. Add element data to `elements.py`
2. Add element data to `static/js/script.js`
3. Add element name to `elementNames` object in `script.js`
4. Test the visualization
5. Verify electron configuration is correct

### Modifying 3D Visualization

1. Locate relevant code in `static/js/script.js`
2. Test changes in browser developer tools
3. Ensure performance remains acceptable
4. Verify visual accuracy

### Styling Changes

1. Edit `static/css/styles.css`
2. Maintain dark theme consistency
3. Test responsive behavior
4. Ensure readability and accessibility

## Dependencies

- **Three.js**: Keep local copy in `static/js/` for offline functionality
- **Flask**: Only for local development, not required for production
- Avoid adding new dependencies unless absolutely necessary to maintain simplicity

## Security Considerations

- Static site has minimal security concerns
- No user data collection or storage
- No server-side processing in production
- Keep dependencies updated (especially Flask if used in development)
