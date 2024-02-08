let faceSize = 170;
let mouthSize = 1/2 * faceSize;
let eyeSize = 2/15 * faceSize; 

let x = 196;
let y = 256;

let facescaling = 4;

let color1;
let color2;
let color3;

function setup() {
  createCanvas(400, 400);
  color1 = random(1, 255);
  color2 = random(1, 255);
  color3 = random(1, 255);
}

function draw() {
  // initial background color
  background(color1, color2, color3);
  
  // color changes (checks for faceSize = 170 instead of changing every tick)
  if (faceSize === 170) {
    color1 = random(1, 255);
    color2 = random(1, 255);
    color3 = random(1, 255);
  }
  
  // face
  noStroke();
  fill(255, 255, 0);
  ellipse(x, y, faceSize, faceSize);

  // eyes
  fill(46, 46, 41);
  ellipse(x - 1/6 * faceSize, y - 1/6 * faceSize, eyeSize, eyeSize);
  ellipse(x + 1/3 * faceSize, y - 1/5 * faceSize, eyeSize, eyeSize);

  // mouth
  fill(252, 65, 65);
  ellipse(x + 1/6 * faceSize, y + 2/15 * faceSize, mouthSize, mouthSize);

  // scale the face up and down over time
  faceSize += facescaling;
  if (faceSize < 170) {
    facescaling += 4;
  }
  if (faceSize > 250) {
    facescaling -= 4;
  }

  // plays sound
  if (faceSize === 170 || faceSize === 250) {
    // Include your sound playing logic here
    // For example:
    // playSound(getSound("retro/hit1"));
  }

  // abstract discoball
  fill(237, 237, 237);
  ellipse(201, 64, 80, 80);
  rect(196, 32, 11, -49);

  // some music notes
  let note1X = 76;
  let note1Y = 48;

  fill(0);
  ellipse(note1X, note1Y, 15, 15);
  rect(note1X - 6, note1Y, 4, 33);
  rect(note1X - 6, note1Y + 25, 11, 9);

  // Note 2
  let note2X = 358;
  let note2Y = 325;

  ellipse(note2X, note2Y, 15, 15);
  rect(note2X + 2, note2Y - 37, 4, 33);
  rect(note2X - 5, note2Y - 37, 11, 9);
}