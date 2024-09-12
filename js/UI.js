let resetText = {
    x: 650,
    y: 40,
}
let finishText = {
    x: 800,
    y:40,
}

let toolbarItems = [
    { x: 50, y: 20, size: 80, label: "pen" },
    { x: 150, y: 20, size: 80, label: "fan" },
    { x: 250, y: 20, size: 80, label: "fill" },
    { x: 350, y: 20, size: 80, label: "line" },
];



let amazingX = 130;
let amazingY = 0;


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

    drawToolbar();

    pop();
}


function drawToolbar() {
    for (let item of toolbarItems) {
        fill(200);  // Default fill for squares
        stroke(0);
        rect(item.x, item.y, item.size, item.size);  // Draw square

        fill(0);
        textSize(16);
        textAlign(CENTER, CENTER);
        text(item.label, item.x + item.size / 2, item.y + item.size / 2);  // Draw label
    }
}