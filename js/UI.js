
let brushPreview = {
    x:0,
    y:0,
    size:10,
}
let toolbarItems = [
    { x: 0, y: 0, size:50, label: "pen" },
    { x: 50, y: 0, size: 50, label: "fan" },
    { x: 100, y: 0, size: 50, label: "fill" },
    { x: 150, y: 0, size: 50, label: "line" },
    { x: 250, y: 0, size: 50, label: "save" },
    { x: 300, y: 0, size: 50, label: "reset" },
    { x: 350, y: 0, size: 50, label: "finish" },
];

let blendModeItems = [
    { x: 0, y: 50, size:50, label: "blend" },
    { x: 50, y: 50, size: 50, label: "add" },
    { x: 100, y: 50, size: 50, label: "mult" },
    { x: 150, y: 50, size: 50, label: "diff" },
    { x: 200, y: 50, size: 50, label: "screen" },
];

let amazingY = 0;
let highlightedTool = '';
let highlightedBlendMode = '';

let defaultUIValue = 200;
let hightlightUIValue = 155;
let selectedUIValue = 255;

function displayUI(){

    brushPreview.x = width - 50;
    brushPreview.y = height - 50;

    //current color/choose brush size
    push();
    fill(brush.r,brush.g,brush.b);
    ellipse(brushPreview.x,brushPreview.y,brush.size);
    drawToolbar();
    drawBlendModeItems();
    pop();
}

function drawToolbar() {
    for (let item of toolbarItems) {
        stroke(0);
        if(highlightedTool===item.label){
            fill(hightlightUIValue);
        }else if(tool===item.label){
            fill(selectedUIValue);
        }else{
            fill(defaultUIValue);
        }
        rect(item.x, item.y, item.size, item.size);  // Draw square
        textSize(16);
        textAlign(CENTER, CENTER);
        text(item.label, item.x + item.size / 2, item.y + item.size / 2);  // Draw label
    }
}

function drawBlendModeItems(){
    for (let item of blendModeItems) {
        fill(200);  // Default fill for squares
        stroke(0);
        if(highlightedBlendMode===item.label){
            fill(hightlightUIValue);
        }else if (blendmode===item.label){
            fill(selectedUIValue);
        }else{
            fill(defaultUIValue);
        }
        rect(item.x, item.y, item.size, item.size/2);
        text(item.label, item.x + item.size / 2, item.y + item.size / 4);
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

function checkBlendModeSelection(){
    for (let item of blendModeItems) {
        let dX = mouseX - item.x;
        let dY = mouseY - item.y;
        if (dX > 0 && dX < item.size && dY > 0 && dY < item.size) {
            highlightedBlendMode = item.label;
            return true;
        }else{
            highlightedBlendMode = '';
        }
    }
}
