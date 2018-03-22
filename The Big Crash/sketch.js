var scroll = 0;
var inde;
// pour retailler la fenetre
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// setup
function setup() {

  createCanvas(windowWidth,windowHeight);

  for(i=0; i<nombreInsects; i++) {
    append(insects, new Polygone(15,0,0,50,35,10));
  };

  insects.pop();

  inde = new Polygone(15,0,0,50,35,15);
}


function draw() {

  background(255);

  push();

      var rot = -4;
      var trans = 200;

            push();

            translate(width/2,-100);
            rotate(2*((PI*2) / nombreInsects));
            translate((scroll*5),0);

            inde.display();

            pop();

      translate(width/2,height/2);

      rotate(3*((PI*2) / nombreInsects));


      for(i=0; i<insects.length; i++) {
        push();
        rotate(((PI*2) / nombreInsects)*i);
        translate(-trans,0);
        insects[i].display();
        pop();
      };



      //translate(scroll,0)

  pop();

  /*fill(255)
  noStroke();
  rect(0,(0-(scroll*10)),1600,800)*/

}

function mouseWheel(event) {
  print(event.delta);
  scroll += event.delta;
}
