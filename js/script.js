"use strict"

let showingInstruction = false;

let state = `game`;//game ,end
let timer = 7;

let bg = 0;


function preload(){

}

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
    checkToolSelection();
    checkBlendModeSelection();
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

  switch (highlightedTool) {
    case 'save':
      saveCanvas();
      break;
    case 'reset':
      resetCanvas();
      break;
    case 'finish':
      state = 'end';
      break;
    default:
      if (highlightedTool !== '') {
        tool = highlightedTool;
      }
      break;
  }

  if(highlightedBlendMode!=='')blendmode = highlightedBlendMode;

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
    case 'finish':
      state = 'end';
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
  mousePressed();  // Call the same function for consistency
}

function windowResized(){
  //resetCanvas();
}