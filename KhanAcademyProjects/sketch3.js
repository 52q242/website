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
  
    if (name.mouseX >= 0 && name.mouseX <= name.width && name.mouseY >= 0 && name.mouseY <= name.height) {

      name.text(myName, name.mouseX, name.mouseY); 
    } else {

      name.text(myName, name.mouseX, name.mouseY);
    }
  };
};





