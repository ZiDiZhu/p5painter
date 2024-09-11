function paint(){
    //paint
    if(canPaint()){
        push();
        strokeWeight(brush.size);
        stroke(brush.r,brush.g,brush.b);
        line(pmouseX, pmouseY, mouseX, mouseY);
        pop();
    }
}

function canPaint(){
    return (mouseIsPressed &&
        state ===`game` &&
        dist(mouseX,mouseY,resetText.x,resetText.y)>60 &&
        inDrawingArea);
}