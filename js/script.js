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
  text (`AMAZING`,amazingX,amazingY);
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


  if (tool==='fan'||tool==='fill'){
    if(inDrawingArea&&centerdefined===false){

      fanCenterX = mouseX;
      fanCenterY = mouseY;
      centerdefined = true;
    }
  }

  if(tool==='line'){
    if(inDrawingArea&&linePointDefined===false){
      push();
      strokeWeight(brush.size);
      line(mouseX,mouseY,mouseX,mouseY);
      pop();
      linePointX = mouseX;
      linePointY = mouseY;
      linePointDefined = true;
    }
  }

  if(highlightedTool!==''
      &&highlightedTool!=='save'
      &&highlightedTool!=='reset'
      &&highlightedTool!=='finish'){
    tool = highlightedTool;
  }

}

function keyPressed(){
  if(keyCode === 49){
    brush.size = 5;
  }else if(keyCode === 50){
    brush.size = 15;
  }else if(keyCode === 51){
    brush.size = 40;
  }


}

function mouseReleased(){
  if(tool==='fill'||tool==='fan')centerdefined = false;
  if(tool==='line'&&linePointDefined===true) toDrawLine = true;
  if(highlightedTool==='save'){
    saveCanvas();
  }else if(highlightedTool==='reset'){
    resetCanvas();
  }else if(highlightedTool==='finish'){
    state = 'end';
  }
}

function touchStarted() {
  // Handle touch input similarly to mousePressed
  mousePressed();  // Call the same function for consistency
}

function windowResized(){
  //resetCanvas();
}