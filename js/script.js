
"use strict"


let titleimg;


let showingInstruction = false;

let state = `game`;//game ,end
let timer = 7;

let bg = 0;

let resetText = {
  x: 250,
  y: 40,
}


let finishText = {
  x:100,
  y:100
}


let amazingX = 130;
let amazingY = 0;

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
    paint();
  }

  checkIfInCanvas();


  if(state === `end`){
    displayEnding();
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

  let dReset = dist(mouseX,mouseY,resetText.x,resetText.y);
  if(dReset < 60){
    resetCanvas();
    state = `game`;
  }
  let dFinish = dist(mouseX,mouseY,finishText.x,finishText.y);
  if(dFinish < 60){
    state = `end`;
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

