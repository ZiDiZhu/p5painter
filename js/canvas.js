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

let inDrawingArea = false;

function resetCanvas() {
clear();
showingInstruction = false;
background(bg);  // Reset background

defineDrawingArea();

// Draw the drawing area
push();
strokeWeight(6);
fill(60);
quad(
  drawingArea.x1, drawingArea.y1,
  drawingArea.x2, drawingArea.y2,
  drawingArea.x3, drawingArea.y3,
  drawingArea.x4, drawingArea.y4
);
pop();

timer = 7;
}

function checkIfInCanvas(){
  //checks if in draw area
  let posX = mouseX;
  let posY = mouseY;
  if(posX>drawingArea.x1&&posY>drawingArea.y1&&posX<drawingArea.x3&&posY<drawingArea.y3){
      inDrawingArea = true;
  }else{
      inDrawingArea =false;
  }
}

function defineDrawingArea(){
  drawingArea.x1 = 0;
  drawingArea.y1 = 75;
  drawingArea.x2 = 0;
  drawingArea.y2 = height -100;
  drawingArea.x3 = width;
  drawingArea.y3 = height -100;
  drawingArea.x4 = width;
  drawingArea.y4 = 75;
}
  