// Define a quad that represents the drawable area, dynamically adjusted by window size
let drawingArea = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    x3: 0,
    y3: 0,
    x4: 0,
    y4: 0
  };
  
  function resetCanvas() {
    clear();
    showingInstruction = false;
    background(bg);  // Reset background
  
    // Define the drawing area based on the current window size
    drawingArea.x1 = 150;
    drawingArea.y1 = 80;
    drawingArea.x2 = 150;
    drawingArea.y2 = height * 4 / 5;
    drawingArea.x3 = width * 3 / 4;
    drawingArea.y3 = height * 4 / 5;
    drawingArea.x4 = width * 3 / 4;
    drawingArea.y4 = 80;
  
    // Update position of the help text and mixing guide
    helpText.x = width * 7 / 8;
    mixingGuideText.x = width * 7 / 8;
    mixingGuideText.y = height / 2;
  
    // Draw the drawing area
    push();
    strokeWeight(6);
    stroke(100);
    fill(60);
    quad(
      drawingArea.x1, drawingArea.y1, 
      drawingArea.x2, drawingArea.y2, 
      drawingArea.x3, drawingArea.y3, 
      drawingArea.x4, drawingArea.y4
    );
    pop();
  
  
    // Reset amazing text position and timer
    amazingX = 130;
    amazingY = 0;
    timer = 7;
  }
  