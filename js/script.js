"use strict"

let showingInstruction = false;

let state = `game`;//game ,end
let timer = 7;

let bg = 0;


function setup() {

  createCanvas(windowWidth,windowHeight);
  background(bg);
  resetCanvas();
}


function draw() {
  if (state === `intro`){
    displayIntro();
    if(mouseIsPressed){
      state = `game`;
    }
  }
  if (state === `game`){
    displayUI();
    displayColorSwatches();
    displayShadePalette();
    checkToolSelection();
    checkBlendModeSelection();
    checkColorModeSelection();
    paint(tool);
  }
  checkIfInCanvas();
  if(state === `end`){
    displayEnding();
  }
}


function displayIntro(){

}


function displayEnding(){

  amazingY++;

  push();
  fill(random(0,255),random(0,255),random(0,255));
  text (`AMAZING`,width/2,0);
  if (frameCount % 60 == 0 && timer > 0) {
  timer --;
  text (`BEAUTIFUL`,random(0,width),random(0,height));
  text (`GOOD ART`,random(0,width),random(0,height));
}
  if(timer ===0){
    clear();
    background(0);
    imageMode(CENTER);
    text(`thanks for testing`,width/2,height/2);
  }
  pop();
}

function mousePressed(){

  if (highlightedTool !== ''&&highlightedTool!=='save'&&highlightedTool!=='reset') {
    tool = highlightedTool;
  }

  if(highlightedBlendMode!=='')blendmode = highlightedBlendMode;
  if(highlightedColorMode!=='')colormode = highlightedColorMode;

  switch (tool) {
    case 'fan':
    case 'fill':
      if (inDrawingArea && centerdefined === false) {
        fanCenterX = mouseX;
        fanCenterY = mouseY;
        centerdefined = true;
      }
      break;
    case 'line':
      if (inDrawingArea && linePointDefined === false) {
        push();
        strokeWeight(brush.size);
        line(mouseX, mouseY, mouseX, mouseY); // Placeholder point
        pop();
        linePointX = mouseX;
        linePointY = mouseY;
        linePointDefined = true;
      }
      break;
  }

}

function keyPressed(){

  switch (keyCode){
    case 49: //1
      brush.size = 5;
      break;
    case 50: //2
      brush.size = 15;
      break;
    case 51: //3
      brush.size = 30;
      break;
    default:
      break;
  }
}

function mouseReleased(){
  switch (highlightedTool) {
    case 'save':
      saveCanvas();
      break;
    case 'reset':
      resetCanvas();
      break;
  }

  if (tool === 'fill' || tool === 'fan') {
    centerdefined = false;
  }

  if (tool === 'line' && linePointDefined === true) {
    toDrawLine = true;
  }

}

function touchStarted() {
  // Handle touch input similarly to mousePressed
  if(highlightedBlendMode!=='')blendmode = highlightedBlendMode;
  if(highlightedColorMode!=='')colormode = highlightedColorMode;
  if (highlightedTool !== ''&&highlightedTool!=='save'&&highlightedTool!=='reset') {
    tool = highlightedTool;
  }

  let touch ={x:0,y:0};
  for (let point of touches){
    touch.x = point.x;
    touch.y = point.y;
  }

  switch(tool) {
    case 'fan':
    case 'fill':
      if(inDrawingArea ) {
        fanCenterX = touch.x;
        fanCenterY = touch.y;
        centerdefined = true;
      }
      break;
    case 'line':
      if(inDrawingArea && linePointDefined ===false){
        push();
        strokeWeight(brush.size);
        line(touch.x,touch.y,touch.x,touch.y); //placeholder point
        pop();
        linePointX = touch.x;
        linePointY = touch.y;
        linePointDefined = true;
      }
      break;
  }
}

function windowResized(){
  //resetCanvas();
}
