let howBig = 30; 

let sketch3 = function(name) {
  name.setup = function() {
    name.createCanvas(400, 400);
    name.fill(92, 24, 219);
  };

  name.draw = function() {
    howBig += 0.5; 
    name.textSize(howBig);
    name.background(0, 238, 255);
    let myName = "Alex"; 
    // check if the mouse is pressed and inside the canvas
    if (name.mouseIsPressed && name.mouseX >= 0 && name.mouseX <= name.width && name.mouseY >= 0 && name.mouseY <= name.height) {
      // update the name's position to the mouse position
      name.text(myName, name.mouseX, name.mouseY); 
    } else {
      // keep the name's position in the center of the canvas
      name.text(myName, name.width / 2, name.height / 2);
    }
  };
};

let myP5 = new p5(sketch3);
 





