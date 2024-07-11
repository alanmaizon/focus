#Lattes 3D Model Generator

Developing the next features:

Image Map and Clickable Areas:

The <map> tag defines an image map where the <area> tags specify clickable regions.
The onclick attribute for each <area> calls the generateModel function with the respective element symbol.

3D Model Generation:

The generateModel function takes an element symbol, looks up the element's data, and creates the nucleus and electrons accordingly.
Electrons are animated to orbit the nucleus with varying speeds based on their orbital radii.

Styling and Layout:

The periodic table is displayed on the left, and the 3D model on the right.
When an element is clicked, the 3D model for that element is displayed and animated.
