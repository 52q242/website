
let sketch5 = function(s) {
    s.setup = function() {
        s.createCanvas(windowWidth, 500);
    };
    s.draw = function(){
        s.stroke(random(255), random(255), random(255));
        s.strokeWeight(5);
        s.line(s.pmouseX, s.pmouseY, s.mouseX, s.mouseY);

    };
    s.mousePressed = function(){
        s.fill(random(255), random(255), random(255));
        s.ellipse(s.mouseX, s.mouseY, 50, 50);
    };
};

let sp5 = new p5;

   


    
    
