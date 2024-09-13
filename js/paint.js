let fanCenterX;
let fanCenterY;
let centerdefined;
let linePointX;
let linePointY;
let linePointDefined = false;
let toDrawLine = false;

let tool = 'fill'; //fan, fill, etc

function paint(mode){
    //paint
    push();
    stroke(brush.r,brush.g,brush.b);
    fill(brush.r,brush.g,brush.b);
    if(mode==='pen'){
        if(canPaint()){
            strokeWeight(brush.size);

            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    }else if(mode==='fan'){
        if(canPaint()&&centerdefined===true){
            strokeWeight(2);
            line(pmouseX, pmouseY,mouseX,mouseY);
            line(fanCenterX, fanCenterY, mouseX, mouseY);
        }
    }
    else if(mode==='fill'){
        if(canPaint()&&centerdefined===true){
            strokeWeight(2);
            triangle(pmouseX, pmouseY,fanCenterX, fanCenterY, mouseX,mouseY);
        }
    }
    else if(mode==='line'){
        if(canPaint()&&linePointDefined===true&&toDrawLine===true){
            strokeWeight(brush.size);
            line(linePointX, linePointY,mouseX,mouseY);
            linePointDefined = false;
            toDrawLine=false;
        }
    }
    pop();
}


function canPaint(){
    return (mouseIsPressed &&
        state ===`game` &&
        dist(mouseX,mouseY,resetText.x,resetText.y)>60 &&
        inDrawingArea);
}



