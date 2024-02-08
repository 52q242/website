

let howBig = 30;

function setup() {
  createCanvas(400, 400);
  fill(92, 24, 219);
}

function draw() {
  howBig += 0.5;
  textSize(howBig);
  background(0, 238, 255);
  let myName = "Alex";
  let message = myName + "!!!";
  text(message, mouseX, mouseY);
}