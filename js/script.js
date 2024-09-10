/**************************************************
Project1: Pain simulaTOR

this is not a literal pain simulator,
but a painting simulator where you have to mix color in RBG mode and fill in the colors to your painting!!
**************************************************/

"use strict"

//check if current contains any red/blue/green
let isR = false;
let isG = false;
let isB = false;

let titleimg;
let coverimg;


let inDrawingArea;

let showingInstruction = false;

let state = `game`;//game ,end ,
let mixingMode = `additive`; // substractive?? potentially
let instructiontext =`Instruction:\n paint with mouse\n click on circles on left to mix color\n key 1,2,3 to change brush size`;

let timer = 7;

let bg = 0;

let resetText = {
  x: 250,
  y: 40,
}

let helpText = {
  x:360,
  y:40
}

let finishText = {
  x:100,
  y:100
}

let mixingGuideText = {
  x:0,
  y:0,
  string:`Additive color mixing: \n adding red to green yields yellow; \n adding green to blue yields cyan; \n adding blue to red yields magenta; \n adding all three primary colors together yields white. \n tl,dr: try it a few times, you'll get it`
}

let amazingX = 130;
let amazingY = 0;

function preload(){
  //load background images here
  //load text

  coverimg = loadImage("assets/images/painting.JPG");
  titleimg = loadImage("assets/images/bob.jpg");
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
    paint();
  }

  //checks if in draw area
  let posX = mouseX;
  let posY = mouseY;
  if(posX>drawingArea.x1&&posY>drawingArea.y1&&posX<drawingArea.x3&&posY<drawingArea.y3){
    inDrawingArea = true;
  }else{
    inDrawingArea =false;
  }
  //console.log(`${inDrawingArea}`);


  if(state === `end`){
    displayEnding();
  }

}

function paint(){
  //paint
  if(mouseIsPressed && state ===`game` && dist(mouseX,mouseY,resetText.x,resetText.y)>60 && inDrawingArea){

    push();
    strokeWeight(brush.size);
    stroke(brush.r,brush.g,brush.b);
    line(pmouseX, pmouseY, mouseX, mouseY);
    pop();
  }
}


function displayIntro(){
  background(0);

  imageMode(CENTER);
  image(titleimg,width/2,height/4,300,400);

  fill(255,150,150);
  textSize(24);
  textAlign(CENTER);
  text(`CLICK anywhere to start`, width/2 , height*4/5);
  text(`a slightly infuriating painting sim \n NOT for mobile \n fullscreen is recommended`,width/2, height/2+80);
}

function displayUI(){

  //displaying reset, brush text
    fill(255,150,150);
    textSize(32);
    text(`reset`,resetText.x, resetText.y);
    text(`help`,helpText.x,helpText.y);
    text(`FINISH`,finishText.x,finishText.y);

    text(`Color Guide`,mixingGuideText.x,mixingGuideText.y);

    push();
    textSize(22);
    text(`↓ draw here ↓`,width*2/5,70);
    pop();

    //current color/choose brush size
    push();
    fill(brush.r,brush.g,brush.b);
    ellipse(brush1.x,brush1.y,10);
    pop();

  //color pickers
  fill(255,0,0);
  ellipse(red.x, red.y, red.size);

  fill(0,255,0);
  ellipse(green.x, green.y, green.size);

  fill(0,0,255);
  ellipse(blue.x, blue.y, blue.size);

  if(showingInstruction){
    push();
    textSize(22);
    textAlign(LEFT);
    fill(255,255,200);
    text(instructiontext,helpText.x-150,helpText.y+100);
    pop();
  }

  text(`color Mixer (RBG toggle):`, width/3, red.y);

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
    image(coverimg,width/2+random(-3,3),height/2-150,300,220);
    text(`thanks for testing`,width/2,height/2);
  }
  pop();
}

function mousePressed(){

  colorMixer();

  let dReset = dist(mouseX,mouseY,resetText.x,resetText.y);
  if(dReset < 60){
    resetCanvas();
    state = `game`;
  }

  let dHelp = dist(mouseX,mouseY,helpText.x,helpText.y);
  if(dHelp < 60){
    if(!showingInstruction){
      showingInstruction = true;
    }else if (showingInstruction){
      showingInstruction = false;
    }
  }

  let dFinish = dist(mouseX,mouseY,finishText.x,finishText.y);
  if(dFinish < 60){
    state = `end`;
  }

  if(dist(mouseX,mouseY,mixingGuideText.x,mixingGuideText.y)<60){
    push();
    textSize(22);
    textAlign(LEFT);
    text(mixingGuideText.string, mixingGuideText.x - 200, mixingGuideText.y +100);
    pop();
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

function colorMixer(){

  //check if mouse is in range of each color
  let dRed = dist(mouseX,mouseY,red.x,red.y);
  let dGreen = dist(mouseX,mouseY,green.x,green.y);
  let dBlue = dist(mouseX,mouseY,blue.x,blue.y);

  //Red on/off
  if(dRed < 50 && isR === false){
    brush.r = 255;
    isR = true;
  } else if(dRed < 50 && isR === true){
    brush.r = 20;
    isR = false;
  }

  //Green on/off
  if(dGreen < 50 && isG === false){
    brush.g = 255;
    isG = true;
  } else if(dGreen < 50 && isG === true){
    brush.g = 20;
    isG = false;
  }

  //Blue on/off
  if(dBlue < 50 && isB === false){
    brush.b = 255;
    isB = true;
  } else if(dBlue < 50 && isB === true){
    brush.b = 20;
    isB = false;
  }

}
