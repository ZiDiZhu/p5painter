let resetText = {
    x: 650,
    y: 40,
}
let finishText = {
    x: 800,
    y:40,
}
let brush1 = {
    x:80,
    y:440,
    size:10,
}
let toolbarItems = [
    { x: 0, y: 0, size:50, label: "pen" },
    { x: 100, y: 0, size: 50, label: "fan" },
    { x: 200, y: 0, size: 50, label: "fill" },
    { x: 300, y: 0, size: 50, label: "line" },
];

let amazingX = 130;
let amazingY = 0;
let highlightedTool = '';


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
        if(highlightedTool===item.label){
            fill(155,0,155);
        }else if(tool===item.label){
            fill(155,255,155);
        }
        else{
            fill(255);
        }
        rect(item.x, item.y, item.size, item.size);  // Draw square
        textSize(16);
        textAlign(CENTER, CENTER);
        text(item.label, item.x + item.size / 2, item.y + item.size / 2);  // Draw label
    }
}

function checkToolSelection(){
    for (let item of toolbarItems) {
        let dX = mouseX - item.x;
        let dY = mouseY - item.y;
        if (dX > 0 && dX < item.size && dY > 0 && dY < item.size) {
            highlightedTool = item.label;  // Change mode to the clicked item label
            return true;
        }else{
            highlightedTool = '';
        }
    }
}
