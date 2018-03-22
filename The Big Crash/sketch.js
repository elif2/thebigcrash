var scroll = 0;
var inde;
// pour retailler la fenetre
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// setup
function setup() {

  createCanvas(windowWidth,windowHeight);

  var cx=width/2;
  var cy=height/2;

  var ang=PI*2/nombreInsects;
  for(i=0; i<nombreInsects; i++) {
    append(insects, new Polygone(15,cx+cos(ang*(i-1))*100,cy+sin(ang*(i-1))*100,50,35,10,ang*i-PI/4));
  };

  insects.pop();

  inde = new Polygone(15,0,0,50,35,15,0);
}


function draw() {

  background(255);
  inde.display();
  for(i=0; i<insects.length; i++) {
    insects[i].display();
  };


  if(frameCount==100){
    var cx=width/2;
    var cy=height/2;
    var ang=PI*2/nombreInsects;
    for(i=0; i<insects.length; i++) {
      insects[i].animate(cx+cos(ang*(i-1))*500,cy+sin(ang*(i-1))*500);
    };
  }


  if(frameCount==150){
    var cx=width/2;
    var cy=height/2;
    var ang=PI*2/nombreInsects;
    for(i=0; i<insects.length; i++) {
      insects[i].animate(cx+cos(ang*(i-1))*100,cy+sin(ang*(i-1))*100);
    };
  }


  if(frameCount==200){
    var cx=width/2;
    var cy=height/2;
    var ang=PI*2/nombreInsects;
    for(i=0; i<insects.length; i++) {
      insects[i].animate(cx+i*40,cy);
      insects[i].animateAng(PI);
    };
  }


  //translate(scroll,0)
  /*fill(255)
  noStroke();
  rect(0,(0-(scroll*10)),1600,800)*/

}

function mouseWheel(event) {
  print(event.delta);
  scroll += event.delta;
}
