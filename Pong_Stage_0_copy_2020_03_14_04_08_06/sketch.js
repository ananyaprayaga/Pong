var xpos=200;
var ypos=180;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(00,120,255);
  fill('black');
  rect(380,mouseY,10,70);
  rect(11,150,10,70);
  xpos=xpos+1;
  ypos=ypos+1;
  circle(xpos,ypos,10);
}