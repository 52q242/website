let howBig = 30; // Define initial size

let sketch3 = function(name) {
  name.setup = function() {
    name.createCanvas(400, 400);
    name.fill(92, 24, 219);
  };

  name.draw = function() {
    howBig += 0.5; // Increase size over time
    name.textSize(howBig);
    name.background(0, 238, 255);
    let myName = "Alex"; // Define your name
    name.text(myName, name.mouseX, name.mouseY); // Display name at mouse position
  };
};

let myP5 = new p5(sketch3);
 





