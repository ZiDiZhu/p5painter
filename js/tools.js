let pickerReady = false; //prevent picker from instantly pick color when selected

function saveimage(){
    let date = new Date();
    let formattedDate = date.getFullYear() + '_' +
        ('0' + (date.getMonth() + 1)).slice(-2) + '_' +
        ('0' + date.getDate()).slice(-2);
    saveCanvas(formattedDate, 'jpg');
}

function pickColor(){
    let pickedColor = get(mouseX, mouseY);
    brush.r = pickedColor[0]; // Red
    brush.g = pickedColor[1]; // Green
    brush.b = pickedColor[2]; // Blue
    if(previousTool!=='')tool=previousTool;
}