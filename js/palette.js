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
  
  let swatchSize = 50;  // Size of each color swatch
  let selectedColorIndex = 0;
  
  function displayColorSwatches() {
    for (let i = 0; i < colorSwatches.length; i++) {
      let x = width / 2 + (i % 5) * (swatchSize + 10); // Positioning horizontally
      let y = height - 100 + Math.floor(i / 5) * (swatchSize + 10); // Positioning vertically
  
      fill(colorSwatches[i].r, colorSwatches[i].g, colorSwatches[i].b);
      rect(x, y, swatchSize, swatchSize);
  
      // Check if the user clicks on the swatch
      if (mouseIsPressed && dist(mouseX, mouseY, x + swatchSize / 2, y + swatchSize / 2) < swatchSize / 2) {
        selectedColorIndex = i;  // Update current color
        brush.r = colorSwatches[i].r;
        brush.g = colorSwatches[i].g;
        brush.b = colorSwatches[i].b;
      }
    }
  }
  
  function draw() {
    // Rest of the drawing code
    displayColorSwatches();  // Show the color swatches
  }
  