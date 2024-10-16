let pickerReady = false; //prevent picker from instantly pick color when selected

function saveimage(){
    let date = new Date();
    let formattedDate = date.getFullYear() + '_' +
        ('0' + (date.getMonth() + 1)).slice(-2) + '_' +
        ('0' + date.getDate()).slice(-2);
    saveCanvas(formattedDate, 'jpg');
}

function pickColor(){
    let point = get(mouseX, mouseY);
    let pickedColor = {
        r:point[0],
        g:point[1],
        b:point[2]
    }
    setBaseColor(pickedColor);
    if(previousTool!=='')tool=previousTool;
}