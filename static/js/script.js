// Create the scene, camera, and renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111827);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
renderer.setPixelRatio(window.devicePixelRatio);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Element names mapping
const elementNames = {
    H: "Hydrogen", He: "Helium", Li: "Lithium", Be: "Beryllium", B: "Boron",
    C: "Carbon", N: "Nitrogen", O: "Oxygen", F: "Fluorine", Ne: "Neon",
    Na: "Sodium", Mg: "Magnesium", Al: "Aluminum", Si: "Silicon", P: "Phosphorus",
    S: "Sulfur", Cl: "Chlorine", Ar: "Argon", K: "Potassium", Ca: "Calcium",
    Sc: "Scandium", Ti: "Titanium", V: "Vanadium", Cr: "Chromium", Mn: "Manganese",
    Fe: "Iron", Co: "Cobalt", Ni: "Nickel", Cu: "Copper", Zn: "Zinc",
    Ga: "Gallium", Ge: "Germanium", As: "Arsenic", Se: "Selenium", Br: "Bromine",
    Kr: "Krypton", Rb: "Rubidium", Sr: "Strontium", Y: "Yttrium", Zr: "Zirconium",
    Nb: "Niobium", Mo: "Molybdenum", Tc: "Technetium", Ru: "Ruthenium", Rh: "Rhodium",
    Pd: "Palladium", Ag: "Silver", Cd: "Cadmium", In: "Indium", Sn: "Tin",
    Sb: "Antimony", Te: "Tellurium", I: "Iodine", Xe: "Xenon", Cs: "Cesium",
    Ba: "Barium", La: "Lanthanum", Ce: "Cerium", Pr: "Praseodymium", Nd: "Neodymium",
    Pm: "Promethium", Sm: "Samarium", Eu: "Europium", Gd: "Gadolinium", Tb: "Terbium",
    Dy: "Dysprosium", Ho: "Holmium", Er: "Erbium", Tm: "Thulium", Yb: "Ytterbium", Lu: "Lutetium",
    Hf: "Hafnium", Ta: "Tantalum", W: "Tungsten", Re: "Rhenium", Os: "Osmium",
    Ir: "Iridium", Pt: "Platinum", Au: "Gold", Hg: "Mercury", Tl: "Thallium",
    Pb: "Lead", Bi: "Bismuth", Po: "Polonium", At: "Astatine", Rn: "Radon",
    Fr: "Francium", Ra: "Radium", Ac: "Actinium", Th: "Thorium", Pa: "Protactinium",
    U: "Uranium", Np: "Neptunium", Pu: "Plutonium", Am: "Americium", Cm: "Curium",
    Bk: "Berkelium", Cf: "Californium", Es: "Einsteinium", Fm: "Fermium",
    Md: "Mendelevium", No: "Nobelium", Lr: "Lawrencium", Rf: "Rutherfordium",
    Db: "Dubnium", Sg: "Seaborgium", Bh: "Bohrium", Hs: "Hassium",
    Mt: "Meitnerium", Ds: "Darmstadtium", Rg: "Roentgenium"
};

// Element data (atomic number, protons, neutrons, electron configuration)
const elements = {
            H: { atomicNumber: 1, protons: 1, neutrons: 0, electrons: [1] },
            He: { atomicNumber: 2, protons: 2, neutrons: 2, electrons: [2] },
            Li: { atomicNumber: 3, protons: 3, neutrons: 4, electrons: [2, 1] },
            Be: { atomicNumber: 4, protons: 4, neutrons: 5, electrons: [2, 2] },
            B: { atomicNumber: 5, protons: 5, neutrons: 6, electrons: [2, 3] },
            C: { atomicNumber: 6, protons: 6, neutrons: 6, electrons: [2, 4] },
            N: { atomicNumber: 7, protons: 7, neutrons: 7, electrons: [2, 5] },
            O: { atomicNumber: 8, protons: 8, neutrons: 8, electrons: [2, 6] },
            F: { atomicNumber: 9, protons: 9, neutrons: 10, electrons: [2, 7] },
            Ne: { atomicNumber: 10, protons: 10, neutrons: 10, electrons: [2, 8] },
            Na: { atomicNumber: 11, protons: 11, neutrons: 12, electrons: [2, 8, 1] },
            Mg: { atomicNumber: 12, protons: 12, neutrons: 12, electrons: [2, 8, 2] },
            Al: { atomicNumber: 13, protons: 13, neutrons: 14, electrons: [2, 8, 3] },
            Si: { atomicNumber: 14, protons: 14, neutrons: 14, electrons: [2, 8, 4] },
            P: { atomicNumber: 15, protons: 15, neutrons: 16, electrons: [2, 8, 5] },
            S: { atomicNumber: 16, protons: 16, neutrons: 16, electrons: [2, 8, 6] },
            Cl: { atomicNumber: 17, protons: 17, neutrons: 18, electrons: [2, 8, 7] },
            Ar: { atomicNumber: 18, protons: 18, neutrons: 22, electrons: [2, 8, 8] },
            K: { atomicNumber: 19, protons: 19, neutrons: 20, electrons: [2, 8, 8, 1] },
            Ca: { atomicNumber: 20, protons: 20, neutrons: 20, electrons: [2, 8, 8, 2] },
            Sc: { atomicNumber: 21, protons: 21, neutrons: 24, electrons: [2, 8, 9, 2] },
            Ti: { atomicNumber: 22, protons: 22, neutrons: 26, electrons: [2, 8, 10, 2] },
            V: { atomicNumber: 23, protons: 23, neutrons: 28, electrons: [2, 8, 11, 2] },
            Cr: { atomicNumber: 24, protons: 24, neutrons: 28, electrons: [2, 8, 13, 1] },
            Mn: { atomicNumber: 25, protons: 25, neutrons: 30, electrons: [2, 8, 13, 2] },
            Fe: { atomicNumber: 26, protons: 26, neutrons: 30, electrons: [2, 8, 14, 2] },
            Co: { atomicNumber: 27, protons: 27, neutrons: 32, electrons: [2, 8, 15, 2] },
            Ni: { atomicNumber: 28, protons: 28, neutrons: 30, electrons: [2, 8, 16, 2] },
            Cu: { atomicNumber: 29, protons: 29, neutrons: 34, electrons: [2, 8, 18, 1] },
            Zn: { atomicNumber: 30, protons: 30, neutrons: 34, electrons: [2, 8, 18, 2] },
            Ga: { atomicNumber: 31, protons: 31, neutrons: 34, electrons: [2, 8, 18, 3] },
            Ge: { atomicNumber: 32, protons: 32, neutrons: 40, electrons: [2, 8, 18, 4] },
            As: { atomicNumber: 33, protons: 33, neutrons: 39, electrons: [2, 8, 18, 5] },
            Se: { atomicNumber: 34, protons: 34, neutrons: 45, electrons: [2, 8, 18, 6] },
            Br: { atomicNumber: 35, protons: 35, neutrons: 45, electrons: [2, 8, 18, 7] },
            Kr: { atomicNumber: 36, protons: 36, neutrons: 52, electrons: [2, 8, 18, 8] },
            Rb: { atomicNumber: 37, protons: 37, neutrons: 50, electrons: [2, 8, 18, 8, 1] },
            Sr: { atomicNumber: 38, protons: 38, neutrons: 50, electrons: [2, 8, 18, 8, 2] },
            Y: { atomicNumber: 39, protons: 39, neutrons: 50, electrons: [2, 8, 18, 9, 2] },
            Zr: { atomicNumber: 40, protons: 40, neutrons: 51, electrons: [2, 8, 18, 10, 2] },
            Nb: { atomicNumber: 41, protons: 41, neutrons: 50, electrons: [2, 8, 18, 12, 1] },
            Mo: { atomicNumber: 42, protons: 42, neutrons: 54, electrons: [2, 8, 18, 13, 1] },
            Tc: { atomicNumber: 43, protons: 43, neutrons: 55, electrons: [2, 8, 18, 14, 2] }, // Technetium is a synthetic element
            Ru: { atomicNumber: 44, protons: 44, neutrons: 56, electrons: [2, 8, 18, 15, 1] },
            Rh: { atomicNumber: 45, protons: 45, neutrons: 56, electrons: [2, 8, 18, 16, 1] },
            Pd: { atomicNumber: 46, protons: 46, neutrons: 50, electrons: [2, 8, 18, 18] },
            Ag: { atomicNumber: 47, protons: 47, neutrons: 60, electrons: [2, 8, 18, 18, 1] },
            Cd: { atomicNumber: 48, protons: 48, neutrons: 64, electrons: [2, 8, 18, 18, 2] },
            In: { atomicNumber: 49, protons: 49, neutrons: 65, electrons: [2, 8, 18, 18, 3] },
            Sn: { atomicNumber: 50, protons: 50, neutrons: 69, electrons: [2, 8, 18, 18, 4] },
            Sb: { atomicNumber: 51, protons: 51, neutrons: 72, electrons: [2, 8, 18, 18, 5] },
            Te: { atomicNumber: 52, protons: 52, neutrons: 74, electrons: [2, 8, 18, 18, 6] },
            I: { atomicNumber: 53, protons: 53, neutrons: 74, electrons: [2, 8, 18, 18, 7] },
            Xe: { atomicNumber: 54, protons: 54, neutrons: 77, electrons: [2, 8, 18, 18, 8] },
            Cs: { atomicNumber: 55, protons: 55, neutrons: 78, electrons: [2, 8, 18, 18, 8, 1] },
            Ba: { atomicNumber: 56, protons: 56, neutrons: 81, electrons: [2, 8, 18, 18, 8, 2] },
            La: { atomicNumber: 57, protons: 57, neutrons: 71, electrons: [2, 8, 18, 19, 2] }, // Lanthanide Series begins
            Ce: { atomicNumber: 58, protons: 58, neutrons: 70, electrons: [2, 8, 18, 19, 3] },
            Pr: { atomicNumber: 59, protons: 59, neutrons: 81, electrons: [2, 8, 18, 21, 2] },
            Nd: { atomicNumber: 60, protons: 60, neutrons: 82, electrons: [2, 8, 18, 22, 2] },
            Pm: { atomicNumber: 61, protons: 61, neutrons: 82, electrons: [2, 8, 18, 23, 2] }, // Promethium is a synthetic element
            Sm: { atomicNumber: 62, protons: 62, neutrons: 90, electrons: [2, 8, 18, 24, 2] },
            Eu: { atomicNumber: 63, protons: 63, neutrons: 94, electrons: [2, 8, 18, 25, 2] },
            Gd: { atomicNumber: 64, protons: 64, neutrons: 96, electrons: [2, 8, 18, 25, 3] },
            Tb: { atomicNumber: 65, protons: 65, neutrons: 100, electrons: [2, 8, 18, 27, 3] },
            Dy: { atomicNumber: 66, protons: 66, neutrons: 102, electrons: [2, 8, 18, 28, 3] },
            Er: { atomicNumber: 68, protons: 68, neutrons: 104, electrons: [2, 8, 18, 30, 4] },
            Tm: { atomicNumber: 69, protons: 69, neutrons: 107, electrons: [2, 8, 18, 31, 2] },
            Yb: { atomicNumber: 70, protons: 70, neutrons: 103, electrons: [2, 8, 18, 32, 2] },
            Lu: { atomicNumber: 71, protons: 71, neutrons: 107, electrons: [2, 8, 18, 32, 3] }, // Lanthanide Series ends
            Hf: { atomicNumber: 72, protons: 72, neutrons: 106, electrons: [2, 8, 18, 32, 4] },
            Ta: { atomicNumber: 73, protons: 73, neutrons: 108, electrons: [2, 8, 18, 32, 5] },
            W: { atomicNumber: 74, protons: 74, neutrons: 110, electrons: [2, 8, 18, 32, 6] },
            Re: { atomicNumber: 75, protons: 75, neutrons: 124, electrons: [2, 8, 18, 32, 7] },
            Os: { atomicNumber: 76, protons: 76, neutrons: 126, electrons: [2, 8, 18, 32, 8] },
            Ir: { atomicNumber: 77, protons: 77, neutrons: 119, electrons: [2, 8, 18, 32, 15] },
            Pt: { atomicNumber: 78, protons: 78, neutrons: 117, electrons: [2, 8, 18, 32, 17] },
            Au: { atomicNumber: 79, protons: 79, neutrons: 118, electrons: [2, 8, 18, 32, 18, 1] },
            Hg: { atomicNumber: 80, protons: 80, neutrons: 121, electrons: [2, 8, 18, 32, 18, 2] },
            Tl: { atomicNumber: 81, protons: 81, neutrons: 123, electrons: [2, 8, 18, 32, 18, 3] },
            Pb: { atomicNumber: 82, protons: 82, neutrons: 126, electrons: [2, 8, 18, 32, 18, 4] },
            Bi: { atomicNumber: 83, protons: 83, neutrons: 126, electrons: [2, 8, 18, 32, 18, 5] },
            Po: { atomicNumber: 84, protons: 84, neutrons: 124, electrons: [2, 8, 18, 32, 18, 6] }, // Polonium is a radioactive element
            At: { atomicNumber: 85, protons: 85, neutrons: 124, electrons: [2, 8, 18, 32, 18, 7] }, // Astatine is a radioactive element
            Rn: { atomicNumber: 86, protons: 86, neutrons: 136, electrons: [2, 8, 18, 32, 18, 8] }, // Radon is a radioactive element
            Fr: { atomicNumber: 87, protons: 87, neutrons: 136, electrons: [2, 8, 18, 32, 18, 8, 1] }, // Francium is a radioactive element
            Ra: { atomicNumber: 88, protons: 88, neutrons: 138, electrons: [2, 8, 18, 32, 18, 8] },
            Ac: { atomicNumber: 89, protons: 89, neutrons: 138, electrons: [2, 8, 18, 32, 18, 9] }, // Actinium is a radioactive element
            Th: { atomicNumber: 90, protons: 90, neutrons: 142, electrons: [2, 8, 18, 32, 18, 10] },
            Pa: { atomicNumber: 91, protons: 91, neutrons: 140, electrons: [2, 8, 18, 32, 21, 9, 2] },
            U: { atomicNumber: 92, protons: 92, neutrons: 146, electrons: [2, 8, 18, 32, 21, 9, 2] },
            Np: { atomicNumber: 93, protons: 93, neutrons: 144, electrons: [2, 8, 18, 32, 21, 8] }, // Actinide Series begins
            Pu: { atomicNumber: 94, protons: 94, neutrons: 144, electrons: [2, 8, 18, 32, 21, 9] },
            Am: { atomicNumber: 95, protons: 95, neutrons: 146, electrons: [2, 8, 18, 32, 21, 10] },
            Cm: { atomicNumber: 96, protons: 96, neutrons: 144, electrons: [2, 8, 18, 32, 21, 11] },
            Bk: { atomicNumber: 97, protons: 97, neutrons: 147, electrons: [2, 8, 18, 32, 21, 12] },
            Cf: { atomicNumber: 98, protons: 98, neutrons: 151, electrons: [2, 8, 18, 32, 22, 8] },
            Es: { atomicNumber: 99, protons: 99, neutrons: 153, electrons: [2, 8, 18, 32, 23, 8] }, // Synthetic element
            Fm: { atomicNumber: 100, protons: 100, neutrons: 157, electrons: [2, 8, 18, 32, 25, 8] }, // Synthetic element
            Md: { atomicNumber: 101, protons: 101, neutrons: 157, electrons: [2, 8, 18, 32, 25, 9] }, // Synthetic element
            No: { atomicNumber: 102, protons: 102, neutrons: 157, electrons: [2, 8, 18, 32, 25, 10] }, // Synthetic element
            Lr: { atomicNumber: 103, protons: 103, neutrons: 157, electrons: [2, 8, 18, 32, 25, 11] }, // Synthetic element
            Rf: { atomicNumber: 104, protons: 104, neutrons: 157, electrons: [2, 8, 18, 32, 25, 12] }, // Synthetic element
            Db: { atomicNumber: 105, protons: 105, neutrons: 157, electrons: [2, 8, 18, 32, 25, 13] }, // Synthetic element
            Sg: { atomicNumber: 106, protons: 106, neutrons: 159, electrons: [2, 8, 18, 32, 25, 14] }, // Synthetic element
            Bh: { atomicNumber: 107, protons: 107, neutrons: 161, electrons: [2, 8, 18, 32, 25, 15] }, // Synthetic element
            Hs: { atomicNumber: 108, protons: 108, neutrons: 163, electrons: [2, 8, 18, 32, 26, 16] }, // Synthetic element
            Mt: { atomicNumber: 109, protons: 109, neutrons: 165, electrons: [2, 8, 18, 32, 27, 17] }, // Synthetic element
            Ds: { atomicNumber: 110, protons: 110, neutrons: 166, electrons: [2, 8, 18, 32, 28, 18] }, // Synthetic element
            Rg: { atomicNumber: 111, protons: 111, neutrons: 171, electrons: [2, 8, 18, 32, 28, 19] }, // Synthetic element
        };

function createNucleus(protons, neutrons) {
    const nucleus = new THREE.Group();
    const protonMaterial = new THREE.MeshPhongMaterial({ color: 0xf43f5e, transparent: true, opacity: 0.85, shininess: 80 });
    const neutronMaterial = new THREE.MeshPhongMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.85, shininess: 80 });
    const sphereGeometry = new THREE.SphereGeometry(0.2, 24, 24);

    // Use a more structured packing for the nucleus
    const total = protons + neutrons;
    const nucleonScale = total > 50 ? 0.8 : 1.0;
    const spreadFactor = Math.cbrt(total) * 0.35;

    for (let i = 0; i < protons; i++) {
        const proton = new THREE.Mesh(sphereGeometry, protonMaterial);
        proton.position.set(
            (Math.random() - 0.5) * spreadFactor * 2,
            (Math.random() - 0.5) * spreadFactor * 2,
            (Math.random() - 0.5) * spreadFactor * 2
        );
        proton.scale.setScalar(nucleonScale);
        nucleus.add(proton);
    }

    for (let i = 0; i < neutrons; i++) {
        const neutron = new THREE.Mesh(sphereGeometry, neutronMaterial);
        neutron.position.set(
            (Math.random() - 0.5) * spreadFactor * 2,
            (Math.random() - 0.5) * spreadFactor * 2,
            (Math.random() - 0.5) * spreadFactor * 2
        );
        neutron.scale.setScalar(nucleonScale);
        nucleus.add(neutron);
    }

    return nucleus;
}

function createElectrons(electronConfiguration) {
    const electrons = [];
    const electronMaterial = new THREE.MeshPhongMaterial({ color: 0xa78bfa, transparent: true, opacity: 1, emissive: 0x6366f1, emissiveIntensity: 0.3 });
    const electronGeometry = new THREE.SphereGeometry(0.12, 16, 16);

    const orbitalRadii = [2, 4, 6, 8, 10, 12, 14];
    for (let j = 0; j < electronConfiguration.length; j++) {
        // Create orbital ring visualization
        const ringGeometry = new THREE.RingGeometry(orbitalRadii[j] - 0.02, orbitalRadii[j] + 0.02, 64);
        const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.12, side: THREE.DoubleSide });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2 + (j * 0.3);
        scene.add(ring);

        for (let i = 0; i < electronConfiguration[j]; i++) {
            const electron = new THREE.Mesh(electronGeometry, electronMaterial);
            scene.add(electron);
            electrons.push({
                mesh: electron,
                orbitalRadius: orbitalRadii[j],
                orbitalIndex: i,
                totalElectrons: electronConfiguration[j],
                direction: j % 2 === 0 ? 1 : -1,
                tilt: j * 0.3
            });
        }
    }
    return electrons;
}

function animateElectrons(electrons) {
    function animate() {
        requestAnimationFrame(animate);
        const time = Date.now() * 0.001;
        electrons.forEach((electron) => {
            const angle = (electron.orbitalIndex / electron.totalElectrons) * Math.PI * 2;
            const radius = electron.orbitalRadius;
            const direction = electron.direction;
            const speedFactor = 10 / radius;
            const tilt = electron.tilt || 0;
            electron.mesh.position.x = Math.cos(angle + direction * time * speedFactor) * radius;
            electron.mesh.position.y = Math.sin(angle + direction * time * speedFactor) * radius * Math.cos(tilt);
            electron.mesh.position.z = Math.sin(angle + direction * time * speedFactor) * radius * Math.sin(tilt)
                                     + Math.sin(angle + direction * time * speedFactor * 0.5) * radius * 0.3;
        });
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
}

function generateModel() {
    const elementSymbol = document.getElementById('elementInput').value.trim();
    const element = elements[elementSymbol];

    if (!element) {
        alert('Element not found! Please enter a valid symbol (e.g., H, Fe, Au).');
        return;
    }

    // Update info panel
    const infoPanel = document.getElementById('info-panel');
    infoPanel.classList.remove('hidden');
    document.getElementById('info-symbol').textContent = elementSymbol;
    document.getElementById('info-name').textContent = elementNames[elementSymbol] || elementSymbol;
    document.getElementById('info-number').textContent = 'Atomic Number ' + element.atomicNumber;
    document.getElementById('info-protons').textContent = element.protons;
    document.getElementById('info-neutrons').textContent = element.neutrons;
    document.getElementById('info-electrons').textContent = element.electrons.reduce(function(a, b) { return a + b; }, 0);
    document.getElementById('info-config').textContent = element.electrons.join(' · ');

    // Show the modal
    const modal = document.getElementById('modelModal');
    modal.style.display = "block";

    // Clear previous model
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }

    // Add lighting for Phong materials
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1.2, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0x6366f1, 0.6, 100);
    pointLight2.position.set(-10, -5, -10);
    scene.add(pointLight2);

    // Create and add nucleus
    const nucleus = createNucleus(element.protons, element.neutrons);
    scene.add(nucleus);

    // Create and animate electrons
    const electrons = createElectrons(element.electrons);
    animateElectrons(electrons);

    // Adjust camera based on element size
    const maxShell = element.electrons.length;
    camera.position.z = Math.max(20, maxShell * 4);

    // Ensure renderer is attached to the modal content
    const dModel = document.getElementById('d-model');
    dModel.innerHTML = ''; // Clear previous renderer
    dModel.appendChild(renderer.domElement);
}

// Close modal when the user clicks on <span> (x)
document.querySelector('.close').onclick = function() {
    document.getElementById('modelModal').style.display = "none";
}

// Close modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    const modal = document.getElementById('modelModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Allow Enter key to trigger visualization
document.getElementById('elementInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        generateModel();
    }
});

// Populate datalist with all available elements
(function populateDatalist() {
    const datalist = document.getElementById('symbols');
    Object.keys(elements).forEach(function(sym) {
        const option = document.createElement('option');
        option.value = sym;
        option.textContent = elementNames[sym] || sym;
        datalist.appendChild(option);
    });
})();