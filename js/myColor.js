let myColor = {
    x:80,
    y:440,
    size:5
  };

let baseColor = {r:0,g:0,b:0}; //the "root" color without variations
let currentColor = {r:0, g:0, b:0}; //color with effects applied

function setBaseColor(color) {
    baseColor.r = color.r;
    baseColor.g = color.g;
    baseColor.b = color.b;
    currentColor.r = color.r;
    currentColor.g = color.g;
    currentColor.b = color.b;
}

function dynamicColor(){
    let color = {
        r:baseColor.r + random(-10,10),
        g:baseColor.r + random(-10,10),
        b:baseColor.r + random(-10,10)
    };
    currentColor.r = baseColor.r + random(-10,10);
    currentColor.g = baseColor.g + random(-10,10);
    currentColor.b = baseColor.b + random(-10,10);
}

// color random variation always apply to the newest color
function morphColor(){
    currentColor.r += random(-10,10);
    currentColor.g += random(-10,10);
    currentColor.b += random(-10,10);
}