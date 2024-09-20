let brush = {
    r:20,
    b:20,
    g:20,
    x:80,
    y:440,
    size:5
  };
let currentColor = {r:0, g:0, b:0};

function changeBrushColor(color) {
    brush.r = color.r;
    brush.g = color.g;
    brush.b = color.b;
}

function randomizeBrushHue(){
    let color = {
        r:currentColor.r + random(-10,10),
        g:currentColor.g + random(-10,10),
        b:currentColor.b + random(-10,10)
    };
    changeBrushColor(color);
}