let fanCenterX;
let fanCenterY;
let centerdefined;
let linePointX;
let linePointY;
let linePointDefined = false;
let toDrawLine = false;
let tool = 'fill'; //fan, fill, etc
let blendmode='blend';
let colormode = 'flat';

function paint(mode) {
    // Prepare for painting
    push();
    stroke(brush.r, brush.g, brush.b);
    if(colormode==='dynamic')randomizeBrushHue();
    fill(brush.r, brush.g, brush.b);

    checkblendMode(blendmode);

    if (!canPaint()) {
        pop();
        return; // Exit if we can't paint
    }

    switch (mode) {
        case 'pen':
            strokeWeight(brush.size);
            line(pmouseX, pmouseY, mouseX, mouseY);
            break;

        case 'fan':
            if (centerdefined) {
                strokeWeight(2);
                line(pmouseX, pmouseY, mouseX, mouseY);
                line(fanCenterX, fanCenterY, mouseX, mouseY);
            }
            break;

        case 'fill':
            if (centerdefined) {
                strokeWeight(2);
                triangle(pmouseX, pmouseY, fanCenterX, fanCenterY, mouseX, mouseY);
            }
            break;

        case 'line':
            if (linePointDefined && toDrawLine) {
                strokeWeight(brush.size);
                line(linePointX, linePointY, mouseX, mouseY);
                linePointDefined = false;  // Reset linePoint
                toDrawLine = false;        // Reset line draw flag
            }
            break;

        default:
            break;
    }

    pop();
}

function checkblendMode(blendmode) {
    // Set blend mode based on the current blendmode
    switch (blendmode) {
        case 'blend':
            blendMode(BLEND);
            break;
        case 'add':
            blendMode(ADD);
            break;
        case 'mult':
            blendMode(MULTIPLY);
            break;
        case 'diff':
            blendMode(EXCLUSION);
            break;
        case 'screen':
            blendMode(SCREEN);
            break;
        default:
            blendMode(BLEND); // Default to blend if no valid mode is specified
            break;
    }
}

function canPaint(){
    return (mouseIsPressed && state ===`game` &&inDrawingArea);
}
