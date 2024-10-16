let pickerReady = false; //prevent picker from instantly pick color when selected

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