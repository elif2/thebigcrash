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

  /*if((scroll>=0)&&(scroll<20)){
    insects[1].animate(ang,ang);
  }*/


  if((scroll>=5)&&(scroll<20)&&(etat!=1)){

    insects[6].animate((insects[6].cx)-30,(insects[6].cy)+40)
    insects[5].animate((insects[5].cx)+10,(insects[5].cy)-40)
    insects[5].animateAng(-(PI/12))

	   etat = 1;
  }


  if((scroll>=20)&&(scroll<40)){

    insects[6].animateAng(-(PI/3))
    insects[5].animateAng(PI/3)

  	etat = 2;
  }


  if((scroll>=40)&&(etat!=3)){

    insects[6].animate((insects[6].cx)-25,(insects[6].cy)+60)
    //insects[5].animate((insects[5].cx)+10,(insects[5].cy)-40)

	   etat = 3;
  }

}

function mouseWheel(event) {
  scroll -= event.delta;
  print(scroll);
}
