
let sketch4 = function(apple) {
 
    apple.setup = function() {
        apple.createCanvas(400, 400);
      };
      apple.draw =function() {
        apple.background(255);
        apple.noStroke();
        apple.fill(224, 90, 90);
        apple.ellipse(150, 200, 150, 150);
        apple.ellipse(212, 200, 150, 150);
        apple.fill(48, 130, 31);
        apple.rect(176, 103, 12, 32); 
        apple.fill(255);
        apple.ellipse(apple.mouseX, apple.mouseY, 60, 60);
      };
    };
    
    let ap5 = new p5(sketch4)