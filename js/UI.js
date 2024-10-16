let brushPreview = {
    x:0,
    y:0,
    size:10,
}

let toolbarItems = [
    { x: 0, y: 0, size:50, label: "pen",image:null, icon:"assets/images/pen_x32.png"},
    { x: 50, y: 0, size: 50, label: "fan" ,image:null, icon:"assets/images/fan_x32.png"},
    { x: 100, y: 0, size: 50, label: "fill",image:null, icon:"assets/images/fill_x32.png"},
    { x: 150, y: 0, size: 50, label: "line",image:null, icon:"assets/images/line_x32.png"},
    { x: 200, y: 0, size: 50, label: "picker", icon: "assets/images/colorpicker_x32.png" },
    { x: 250, y: 0, size: 50, label: "save",image:null, icon:"assets/images/save_x32.png"},
    { x: 300, y: 0, size: 50, label: "reset",image:null, icon:"assets/images/reset_x32.png" }
];

let blendModeItems = [
    { x: 0, y: 50, size:50, label: "blend"},
    { x: 50, y: 50, size: 50, label: "add"},
    { x: 100, y: 50, size: 50, label: "mult" },
    { x: 150, y: 50, size: 50, label: "diff"},
    { x: 200, y: 50, size: 50, label: "screen" },
];

let colorModeItems = [
    { x: 0, y: 0, size:70, label: "flat"},
    { x: 70, y: 0, size:70, label: "dynamic"},
    { x: 140, y: 0, size:70, label: "morph"},
]

let amazingY = 0;
let highlightedTool = '';
let highlightedBlendMode = '';
let highlightedColorMode = '';

let defaultUIValue = 200;
let hightlightUIValue = 155;
let selectedUIValue = 255;

function preload(){
    toolbarItems.forEach(item=>{
        if(item.icon!=null){
            item.image = loadImage(item.icon);
        }
    })
}


function displayUI(){

    brushPreview.x = width - 50;
    brushPreview.y = height - 50;

    //current color/choose brush size
    push();
    fill(brush.r,brush.g,brush.b);
    ellipse(brushPreview.x,brushPreview.y,brush.size);
    drawToolbar();
    drawBlendModeItems();
    drawColorModeItems();
    //displayTitle();
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
        textAlign(CENTER, CENTER);
        if(item.image!=null) image(item.image,item.x + item.size / 4, item.y + item.size / 4);
        textSize(16);

        text(item.label, item.x + item.size / 2, item.y + item.size/4);  // Draw label
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

function drawColorModeItems(){
    for (let item of colorModeItems) {
        fill(200);
        stroke(0);
        textAlign(CENTER, CENTER);
        if(highlightedColorMode ===item.label){
            fill(hightlightUIValue);
        }else if (colormode===item.label){
            fill(selectedUIValue);
        }else {
            fill(defaultUIValue);
        }
        let y = height - item.size/2;
        item.y = y;
        rect(item.x, item.y, item.size, item.size/2);
        text(item.label, item.x+item.size/2, item.y+item.size/4);
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

function checkColorModeSelection(){
    for (let item of colorModeItems){
        let dX = mouseX - item.x;
        let dY = mouseY - item.y;
        if (dX > 0 && dX < item.size && dY > 0 && dY < item.size) {
            highlightedColorMode = item.label;
            return true;
        }else{
            highlightedColorMode = '';
        }
    }
}

function displayTitle(){
    push();
    textAlign(RIGHT);
    textSize(25);
    text("p5.paint",width-5,height - 80);
    textSize(12);
    text("developed by",width-35,height - 55);
    stroke(155,100,155);
    text("Zi Di",width-5,height - 55);
    pop();
}
