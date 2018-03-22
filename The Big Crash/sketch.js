var scroll = 0;
var etat = 0;
// pour retailler la fenetre
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// setup
function setup() {

  createCanvas(windowWidth-20,windowHeight-20);

  var cx=width/2;
  var cy=height/2;

  var ang=PI*2/nombreInsects;
  for(i=0; i<nombreInsects; i++) {
    append(insects, new Polygone(15,cx+cos(ang*(i-1))*200,cy+sin(ang*(i-1))*200,50,35,10,ang*(i-1)-PI));
  };
	
	insects.pop();
}


function draw() {

  background(255);
  for(i=0; i<insects.length; i++) {
    insects[i].display();
  };


  if((scroll>=100)&&(scroll<180)){
    var cx=width/2;
    var cy=height/2;
    var ang=PI*2/nombreInsects;
    for(i=0; i<insects.length; i++) {
      insects[i].animate(cx+cos(ang*(i-1))*500,cy+sin(ang*(i-1))*500);
    };
	etat = 1;
  }


  if((scroll>=180)&&(scroll<260)){
    var cx=width/2;
    var cy=height/2;
    var ang=PI*2/nombreInsects;
    for(i=0; i<insects.length; i++) {
      insects[i].animate(cx+cos(ang*(i-1))*100,cy+sin(ang*(i-1))*100);
	  if(etat==3){insects[i].animateAng(ang*(i-1)-PI);}
    };
	etat = 2;
  }


  if(scroll>=260){
    var cx=width/2;
    var cy=height/2;
    var ang=PI*2/nombreInsects;
    for(i=0; i<insects.length; i++) {
      insects[i].animate(cx+i*40,cy);
      insects[i].animateAng(PI);
    };
	etat = 3;
  }

}

function mouseWheel(event) {
  print(event.delta);
  scroll -= event.delta;
}
