
let sketch1 = function(tomato) {
 
tomato.setup = function() {
  tomato.createCanvas(400, 400);
  };
  tomato.draw =function() {
    tomato.background(255);
    tomato.noStroke();
    tomato.fill(224, 90, 90);
    tomato.ellipse(150, 200, 150, 150);
    tomato.ellipse(212, 200, 150, 150);
    tomato.fill(48, 130, 31);
    tomato.rect(176, 103, 12, 32); 
    tomato.fill(255);
    tomato.ellipse(tomato.mouseX, tomato.mouseY, 60, 60);
  };
};

let tp5 = new p5(sketch1);