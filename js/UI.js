
function displayUI(){

    //displaying reset, brush text
    fill(255,150,150);
    textSize(32);
    text(`reset`,resetText.x, resetText.y);
    text(`FINISH`,finishText.x,finishText.y);


    //current color/choose brush size
    push();
    fill(brush.r,brush.g,brush.b);
    ellipse(brush1.x,brush1.y,brush.size);
    pop();

    //color pickers
    fill(255,0,0);
    ellipse(red.x, red.y, red.size);

    fill(0,255,0);
    ellipse(green.x, green.y, green.size);

    fill(0,0,255);
    ellipse(blue.x, blue.y, blue.size);


}