let colorSwatches = [
    { r: 255, g: 0, b: 0 },    // Red
    { r: 0, g: 255, b: 0 },    // Green
    { r: 0, g: 0, b: 255 },    // Blue
    { r: 255, g: 255, b: 0 },  // Yellow
    { r: 0, g: 255, b: 255 },  // Cyan
    { r: 255, g: 0, b: 255 },  // Magenta
    { r: 128, g: 0, b: 128 },  // Purple
    { r: 255, g: 165, b: 0 },  // Orange
    { r: 255, g: 192, b: 203 },// Pink
    { r: 0, g: 0, b: 0 }       // Black
  ];
  
let swatchSize = 30;  // Size of each color swatch
let selectedColorIndex = 0;
let shadeSwatches = [];

// Function to display color swatches
function displayColorSwatches() {
    for (let i = 0; i < colorSwatches.length; i++) {
        let x = (i % 5) * swatchSize; // Positioning horizontally
        let y = height - 100 + Math.floor(i / 5) * swatchSize; // Positioning vertically

        fill(colorSwatches[i].r, colorSwatches[i].g, colorSwatches[i].b);
        rect(x, y, swatchSize, swatchSize);

        // Check if the user clicks on the swatch
        if (mouseIsPressed && dist(mouseX, mouseY, x + swatchSize / 2, y + swatchSize / 2) < swatchSize / 2) {
            selectedColorIndex = i;  // Update current color
            setBaseColor(colorSwatches[i]);
            currentColor.r = colorSwatches[i].r;
            currentColor.g = colorSwatches[i].g;
            currentColor.b = colorSwatches[i].b;

            // Generate shades for the selected color
            shadeSwatches = generateShades(colorSwatches[i]);
        }
    }
}

function displayShadePalette() {
    for (let i = 0; i < shadeSwatches.length; i++) {
        let x = 160 + (i % 5) * swatchSize; // Positioning shades horizontally
        let y = height - 100 + Math.floor(i / 5) * swatchSize; // Positioning vertically

        fill(shadeSwatches[i].r, shadeSwatches[i].g, shadeSwatches[i].b);
        rect(x, y, swatchSize, swatchSize);

        // Check if the user clicks on the shade
        if (mouseIsPressed && dist(mouseX, mouseY, x + swatchSize / 2, y + swatchSize / 2) < swatchSize / 2) {
            setBaseColor(shadeSwatches[i]);
            currentColor.r = shadeSwatches[i].r;
            currentColor.g = shadeSwatches[i].g;
            currentColor.b = shadeSwatches[i].b;
        }
    }
    console.log()
}


function generateShades(baseColor, numShades = 10, variationFactor = 3.5) {
    // Ensure numShades is at least 2 to have both lighter and darker shades
    numShades = Math.max(numShades, 2);

    let shades = [];
    let stepSize = 255 / (numShades - 1); // Calculate the step size for variations

    // Adjust the step size by the variation factor
    let adjustedStepSize = stepSize * variationFactor;

    for (let i = 0; i < numShades; i++) {
        // Calculate the factor for this shade
        let factor = (i - (numShades - 1) / 2) / ((numShades - 1) / 2);

        // Adjust RGB values with variation factor
        let newColor = {
            r: clamp(baseColor.r + factor * adjustedStepSize),
            g: clamp(baseColor.g + factor * adjustedStepSize),
            b: clamp(baseColor.b + factor * adjustedStepSize)
        };

        shades.push(newColor);
    }

    return shades;
}

// Helper function to clamp RGB values between 0 and 255
function clamp(value) {
    return Math.max(0, Math.min(255, value));
}







  