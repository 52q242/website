
let sketch5 = function(s) {
    s.setup = function() {
        s.createCanvas(s.windowWidth, 500);
        s.stroke(255);
        s.fill(255,255,255,100);
        rect(0,0,s.windowWidth, 500);

    };
    s.draw = function(){
        s.stroke(s.random(255), s.random(255), s.random(255));
        s.strokeWeight(5);
        s.line(s.pmouseX, s.pmouseY, s.mouseX, s.mouseY);

    };
    s.mousePressed = function(){
        s.fill(s.random(255), s.random(255), s.random(255));
        s.ellipse(s.mouseX, s.mouseY, 50, 50);
    };
};

let sp5 = new p5(sketch5);

   


    
    
