// Educational Chemistry Chatbot for Focus
(function () {
    'use strict';

    // Knowledge base for chemistry education
    const chemistryFacts = {
        proton: "Protons are positively charged subatomic particles found in the nucleus of an atom. The number of protons defines the element (atomic number).",
        neutron: "Neutrons are neutral subatomic particles found in the nucleus. They help stabilize the nucleus — without enough neutrons, the nucleus would fly apart due to proton repulsion.",
        electron: "Electrons are negatively charged particles that orbit the nucleus in shells. They determine an element's chemical behavior and bonding properties.",
        nucleus: "The nucleus is the dense center of an atom, made of protons and neutrons. It contains nearly all of the atom's mass.",
        atom: "An atom is the smallest unit of matter that retains the properties of an element. It consists of a nucleus (protons and neutrons) surrounded by electrons.",
        ion: "An ion is an atom that has gained or lost electrons. Cations are positive (lost electrons), and anions are negative (gained electrons).",
        isotope: "Isotopes are atoms of the same element with different numbers of neutrons. For example, Carbon-12 and Carbon-14 are both carbon but have different masses.",
        shell: "Electron shells are energy levels where electrons orbit the nucleus. The first shell holds up to 2 electrons, the second up to 8, and so on following the 2n² rule.",
        orbital: "Orbitals are regions in space where electrons are most likely to be found. They come in shapes designated s, p, d, and f.",
        valence: "Valence electrons are the electrons in the outermost shell of an atom. They determine how an element bonds with others and its chemical reactivity.",
        bond: "Chemical bonds form when atoms share or transfer electrons. The three main types are ionic (transfer), covalent (sharing), and metallic bonds.",
        "periodic table": "The periodic table organizes elements by atomic number, electron configuration, and chemical properties. Elements in the same column (group) have similar properties.",
        group: "Groups are the vertical columns in the periodic table. Elements in the same group share similar chemical properties because they have the same number of valence electrons.",
        period: "Periods are the horizontal rows in the periodic table. As you move across a period, the atomic number increases by one, and properties change predictably.",
        metal: "Metals are elements that are generally shiny, conduct heat and electricity, and are malleable. They tend to lose electrons to form positive ions.",
        nonmetal: "Nonmetals are elements that are generally poor conductors and tend to gain electrons. They include gases like oxygen and nitrogen, and solids like sulfur.",
        metalloid: "Metalloids (semimetals) have properties between metals and nonmetals. Examples include silicon and germanium, which are used in semiconductors.",
        "noble gas": "Noble gases (Group 18) are extremely unreactive because their outer electron shells are completely full. They include helium, neon, and argon.",
        halogen: "Halogens (Group 17) are highly reactive nonmetals. They include fluorine, chlorine, bromine, iodine, and astatine, and need just one electron to complete their outer shell.",
        "alkali metal": "Alkali metals (Group 1) are highly reactive metals with one valence electron. They include lithium, sodium, and potassium, and react vigorously with water.",
        "atomic number": "The atomic number is the number of protons in an atom's nucleus. It uniquely identifies each element and determines its position on the periodic table.",
        "mass number": "The mass number is the total number of protons and neutrons in an atom's nucleus. It determines the atom's mass.",
        "electron configuration": "Electron configuration describes how electrons are distributed among the shells and subshells of an atom, following the Aufbau principle, Hund's rule, and the Pauli exclusion principle.",
        electronegativity: "Electronegativity measures an atom's ability to attract shared electrons in a bond. Fluorine is the most electronegative element.",
        "atomic radius": "Atomic radius generally decreases across a period (more protons pull electrons closer) and increases down a group (more electron shells).",
        radioactive: "Radioactive elements have unstable nuclei that decay over time, emitting radiation. Elements with atomic number above 82 (lead) are all radioactive.",
        lanthanide: "Lanthanides are the 15 elements from lanthanum (57) to lutetium (71). They are also called rare earth elements and have similar chemical properties.",
        actinide: "Actinides are the 15 elements from actinium (89) to lawrencium (103). Many are radioactive and synthetic, including uranium and plutonium.",
        "transition metal": "Transition metals are elements in groups 3–12. They can form multiple oxidation states and often create colorful compounds. Examples include iron, copper, and gold."
    };

    // Element group categories
    const elementGroups = {
        "alkali metals": ["Li", "Na", "K", "Rb", "Cs", "Fr"],
        "alkaline earth metals": ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
        "noble gases": ["He", "Ne", "Ar", "Kr", "Xe", "Rn"],
        "halogens": ["F", "Cl", "Br", "I", "At"],
        "transition metals": ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg"],
        "lanthanides": ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Er", "Tm", "Yb", "Lu"],
        "actinides": ["Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"]
    };

    // Interesting facts about specific elements
    const elementFunFacts = {
        H: "Hydrogen is the lightest and most abundant element in the universe, making up about 75% of all normal matter by mass.",
        He: "Helium is the second lightest element. It was discovered on the Sun (via spectral lines) before it was found on Earth!",
        C: "Carbon is the basis of all known life. It can form more compounds than any other element due to its four valence electrons.",
        N: "Nitrogen makes up about 78% of Earth's atmosphere. It's essential for amino acids and DNA.",
        O: "Oxygen makes up about 21% of Earth's atmosphere and is essential for respiration. It's the third most abundant element in the universe.",
        Fe: "Iron is the most common element on Earth by mass. Earth's core is mostly iron, which creates our magnetic field.",
        Au: "Gold is one of the least reactive metals. All the gold ever mined would fit into a cube about 21 meters on each side.",
        Cu: "Copper was one of the first metals used by humans. The Statue of Liberty is coated with about 80 tons of copper.",
        Ag: "Silver has the highest electrical and thermal conductivity of any element. It's been used as currency for thousands of years.",
        U: "Uranium is used as fuel in nuclear reactors. A single uranium fuel pellet contains as much energy as 17,000 cubic feet of natural gas.",
        Hg: "Mercury is the only metal that is liquid at standard room temperature. Its chemical symbol Hg comes from 'hydrargyrum' (liquid silver).",
        Pt: "Platinum is rarer than gold and extremely resistant to corrosion. It's used in catalytic converters and cancer treatment drugs.",
        Na: "Sodium reacts explosively with water. Table salt (NaCl) is the most familiar sodium compound.",
        Si: "Silicon is the second most abundant element in Earth's crust. It's the basis of most computer chips and semiconductors.",
        Al: "Aluminum is the most abundant metal in Earth's crust. It was once more valuable than gold before the Hall-Héroult process made it cheap to produce.",
        Ti: "Titanium is as strong as steel but 45% lighter. It's used in aerospace, medical implants, and sports equipment.",
        W: "Tungsten has the highest melting point of all elements at 3,422°C. Its name comes from the Swedish 'tung sten' meaning 'heavy stone'.",
        Li: "Lithium is the lightest metal and is used in rechargeable batteries that power phones, laptops, and electric vehicles.",
        Ne: "Neon was discovered in 1898. Despite 'neon signs' coming in many colors, true neon gas only produces a reddish-orange glow.",
        Cl: "Chlorine is used to disinfect water and swimming pools. In its pure form, it's a toxic yellow-green gas."
    };

    // Greeting messages
    const greetings = [
        "Hello! I'm your chemistry learning assistant. Ask me about any element, atomic structure, or chemistry concept!",
        "Hi there! I can help you learn about elements, the periodic table, and atomic structure. What would you like to know?",
        "Welcome to the Focus chemistry chatbot! Try asking about an element like 'Tell me about Iron' or a concept like 'What is an electron?'"
    ];

    // Suggested questions
    const suggestions = [
        "What is an electron?",
        "Tell me about Gold",
        "What are noble gases?",
        "How does the periodic table work?",
        "What is an isotope?"
    ];

    function getElementInfo(symbol) {
        if (typeof elements === 'undefined' || typeof elementNames === 'undefined') return null;
        var el = elements[symbol];
        if (!el) return null;
        var name = elementNames[symbol] || symbol;
        var totalElectrons = el.electrons.reduce(function (a, b) { return a + b; }, 0);
        var info = name + " (" + symbol + ")\n" +
            "• Atomic Number: " + el.atomicNumber + "\n" +
            "• Protons: " + el.protons + "\n" +
            "• Neutrons: " + el.neutrons + "\n" +
            "• Electrons: " + totalElectrons + "\n" +
            "• Electron Configuration: [" + el.electrons.join(", ") + "]";

        if (elementFunFacts[symbol]) {
            info += "\n\n💡 Fun Fact: " + elementFunFacts[symbol];
        }

        info += "\n\nTip: Type \"" + symbol + "\" in the search bar and click Visualize to see its 3D atomic model!";
        return info;
    }

    function findElementByName(name) {
        if (typeof elementNames === 'undefined') return null;
        var lowerName = name.toLowerCase();
        var symbols = Object.keys(elementNames);
        for (var i = 0; i < symbols.length; i++) {
            if (elementNames[symbols[i]].toLowerCase() === lowerName) {
                return symbols[i];
            }
        }
        return null;
    }

    function findElementBySymbol(input) {
        if (typeof elements === 'undefined') return null;
        // Try exact match first
        if (elements[input]) return input;
        // Try capitalized (e.g., "fe" → "Fe")
        var capitalized = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        if (elements[capitalized]) return capitalized;
        return null;
    }

    function getGroupInfo(groupName) {
        var key = groupName.toLowerCase();
        var group = elementGroups[key];
        if (!group) return null;
        if (typeof elementNames === 'undefined') return null;
        var names = group.map(function (sym) { return elementNames[sym] + " (" + sym + ")"; });
        return "The " + groupName + " include: " + names.join(", ") + ".";
    }

    function processMessage(input) {
        var lowerInput = input.toLowerCase().trim();

        // Greetings
        if (/^(hi|hello|hey|howdy|greetings|yo)\b/.test(lowerInput)) {
            return "Hello! 👋 I'm here to help you learn chemistry. You can ask me about:\n• Any element (e.g., \"Tell me about Carbon\")\n• Chemistry concepts (e.g., \"What is an electron?\")\n• Element groups (e.g., \"What are noble gases?\")\n\nWhat would you like to explore?";
        }

        // Help
        if (/^(help|what can you do|commands|options)\b/.test(lowerInput)) {
            return "Here's what I can help with:\n\n🔬 Element info — \"Tell me about Iron\" or \"What is Fe?\"\n⚛️ Atomic concepts — \"What is a proton?\" or \"Explain electron shells\"\n📊 Periodic table — \"What are halogens?\" or \"What is a period?\"\n💡 Fun facts — \"Tell me a fact about Gold\"\n\nJust type your question naturally!";
        }

        // Thanks
        if (/^(thanks|thank you|thx|cheers)\b/.test(lowerInput)) {
            return "You're welcome! Keep exploring the fascinating world of chemistry! ⚗️";
        }

        // Check for element by name
        var nameMatch = lowerInput.match(/(?:tell me about|what is|info on|information about|describe|explain|show me|look up)\s+([a-z]+)/);
        if (nameMatch) {
            var query = nameMatch[1];
            // Check if it's a concept first
            if (chemistryFacts[query]) {
                return chemistryFacts[query];
            }
            // Check two-word concepts
            var twoWordMatch = lowerInput.match(/(?:tell me about|what is|what are|info on|describe|explain)\s+(?:a |an |the )?(.+?)(?:\?|$)/);
            if (twoWordMatch) {
                var conceptQuery = twoWordMatch[1].trim();
                if (chemistryFacts[conceptQuery]) {
                    return chemistryFacts[conceptQuery];
                }
                // Check element groups
                var groupInfo = getGroupInfo(conceptQuery);
                if (groupInfo) return groupInfo;
            }

            // Try as element name
            var symbol = findElementByName(query);
            if (symbol) {
                var info = getElementInfo(symbol);
                if (info) return info;
            }
            // Try as symbol
            symbol = findElementBySymbol(query);
            if (symbol) {
                var info = getElementInfo(symbol);
                if (info) return info;
            }
        }

        // Check for multi-word concept queries
        var conceptMatch = lowerInput.match(/(?:what (?:is|are)|tell me about|explain|describe)\s+(?:a |an |the )?(.+?)(?:\?|$)/);
        if (conceptMatch) {
            var conceptKey = conceptMatch[1].trim();
            if (chemistryFacts[conceptKey]) {
                return chemistryFacts[conceptKey];
            }
            var groupInfo = getGroupInfo(conceptKey);
            if (groupInfo) return groupInfo;

            // Try as element name
            var symbol = findElementByName(conceptKey);
            if (symbol) {
                var info = getElementInfo(symbol);
                if (info) return info;
            }
        }

        // Check for element by symbol directly (e.g. "Fe", "Au")
        var symbolMatch = findElementBySymbol(lowerInput);
        if (symbolMatch) {
            var info = getElementInfo(symbolMatch);
            if (info) return info;
        }

        // Check for element name directly
        var directNameMatch = findElementByName(lowerInput.replace(/\?$/, '').trim());
        if (directNameMatch) {
            var info = getElementInfo(directNameMatch);
            if (info) return info;
        }

        // Search through chemistry facts for keyword matches
        var factKeys = Object.keys(chemistryFacts);
        for (var i = 0; i < factKeys.length; i++) {
            if (lowerInput.indexOf(factKeys[i]) !== -1) {
                return chemistryFacts[factKeys[i]];
            }
        }

        // Search element groups
        var groupKeys = Object.keys(elementGroups);
        for (var i = 0; i < groupKeys.length; i++) {
            if (lowerInput.indexOf(groupKeys[i]) !== -1) {
                return getGroupInfo(groupKeys[i]);
            }
        }

        // Fun fact request
        if (/fun fact|interesting|trivia|random fact|cool fact/.test(lowerInput)) {
            var factSymbols = Object.keys(elementFunFacts);
            var randomSymbol = factSymbols[Math.floor(Math.random() * factSymbols.length)];
            var elName = (typeof elementNames !== 'undefined' && elementNames[randomSymbol]) ? elementNames[randomSymbol] : randomSymbol;
            return "💡 Fun Fact about " + elName + ":\n" + elementFunFacts[randomSymbol];
        }

        // Compare elements
        var compareMatch = lowerInput.match(/compare\s+(\w+)\s+(?:and|vs|with|to)\s+(\w+)/);
        if (compareMatch) {
            var sym1 = findElementByName(compareMatch[1]) || findElementBySymbol(compareMatch[1]);
            var sym2 = findElementByName(compareMatch[2]) || findElementBySymbol(compareMatch[2]);
            if (sym1 && sym2 && typeof elements !== 'undefined' && typeof elementNames !== 'undefined') {
                var el1 = elements[sym1];
                var el2 = elements[sym2];
                var name1 = elementNames[sym1] || sym1;
                var name2 = elementNames[sym2] || sym2;
                return "Comparing " + name1 + " vs " + name2 + ":\n\n" +
                    name1 + " (" + sym1 + "):\n" +
                    "• Atomic #: " + el1.atomicNumber + ", Protons: " + el1.protons + ", Neutrons: " + el1.neutrons + "\n\n" +
                    name2 + " (" + sym2 + "):\n" +
                    "• Atomic #: " + el2.atomicNumber + ", Protons: " + el2.protons + ", Neutrons: " + el2.neutrons;
            }
        }

        // How many elements
        if (/how many elements/.test(lowerInput)) {
            if (typeof elements !== 'undefined') {
                return "This visualizer currently includes " + Object.keys(elements).length + " elements, from Hydrogen (H) to Roentgenium (Rg). The periodic table has 118 confirmed elements in total.";
            }
        }

        // Fallback response
        return "I'm not sure about that, but I'd love to help with chemistry! Try:\n• Asking about an element: \"Tell me about Oxygen\"\n• A concept: \"What is an electron?\"\n• Element groups: \"What are noble gases?\"\n• Fun facts: \"Tell me a fun fact\"";
    }

    function escapeHtml(text) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(text));
        return div.innerHTML;
    }

    function formatMessage(text) {
        // Convert line breaks to <br> and preserve formatting
        return escapeHtml(text).replace(/\n/g, '<br>');
    }

    function createChatbotUI() {
        // Toggle button
        var toggleBtn = document.createElement('button');
        toggleBtn.id = 'chatbot-toggle';
        toggleBtn.setAttribute('aria-label', 'Open chemistry assistant');
        toggleBtn.innerHTML = '<span class="chatbot-icon">💬</span>';
        document.body.appendChild(toggleBtn);

        // Chat panel
        var panel = document.createElement('div');
        panel.id = 'chatbot-panel';
        panel.className = 'chatbot-hidden';
        panel.innerHTML =
            '<div class="chatbot-header">' +
                '<span class="chatbot-title">⚗️ Chemistry Assistant</span>' +
                '<button class="chatbot-close" aria-label="Close chat">&times;</button>' +
            '</div>' +
            '<div class="chatbot-messages" id="chatbot-messages"></div>' +
            '<div class="chatbot-suggestions" id="chatbot-suggestions"></div>' +
            '<div class="chatbot-input-area">' +
                '<input type="text" id="chatbot-input" placeholder="Ask about elements or chemistry..." autocomplete="off">' +
                '<button id="chatbot-send" aria-label="Send message">➤</button>' +
            '</div>';
        document.body.appendChild(panel);

        // References
        var messagesContainer = document.getElementById('chatbot-messages');
        var inputField = document.getElementById('chatbot-input');
        var sendBtn = document.getElementById('chatbot-send');
        var closeBtn = panel.querySelector('.chatbot-close');
        var suggestionsContainer = document.getElementById('chatbot-suggestions');

        function addMessage(text, sender) {
            var msg = document.createElement('div');
            msg.className = 'chatbot-message chatbot-' + sender;
            msg.innerHTML = '<div class="chatbot-bubble">' + formatMessage(text) + '</div>';
            messagesContainer.appendChild(msg);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function showSuggestions() {
            suggestionsContainer.innerHTML = '';
            suggestions.forEach(function (q) {
                var chip = document.createElement('button');
                chip.className = 'chatbot-chip';
                chip.textContent = q;
                chip.addEventListener('click', function () {
                    handleUserInput(q);
                });
                suggestionsContainer.appendChild(chip);
            });
        }

        function hideSuggestions() {
            suggestionsContainer.innerHTML = '';
        }

        function handleUserInput(text) {
            if (!text.trim()) return;
            addMessage(text, 'user');
            hideSuggestions();
            inputField.value = '';

            // Small delay to feel natural
            setTimeout(function () {
                var response = processMessage(text);
                addMessage(response, 'bot');
            }, 300);
        }

        // Event listeners
        toggleBtn.addEventListener('click', function () {
            var isHidden = panel.classList.contains('chatbot-hidden');
            if (isHidden) {
                panel.classList.remove('chatbot-hidden');
                toggleBtn.classList.add('chatbot-active');
                inputField.focus();
                // Show greeting on first open
                if (messagesContainer.children.length === 0) {
                    var greeting = greetings[Math.floor(Math.random() * greetings.length)];
                    addMessage(greeting, 'bot');
                    showSuggestions();
                }
            } else {
                panel.classList.add('chatbot-hidden');
                toggleBtn.classList.remove('chatbot-active');
            }
        });

        closeBtn.addEventListener('click', function () {
            panel.classList.add('chatbot-hidden');
            toggleBtn.classList.remove('chatbot-active');
        });

        sendBtn.addEventListener('click', function () {
            handleUserInput(inputField.value);
        });

        inputField.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                handleUserInput(inputField.value);
            }
        });
    }

    // Initialize chatbot when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createChatbotUI);
    } else {
        createChatbotUI();
    }
})();
