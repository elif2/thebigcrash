var scroll = 0;
var etat = 0;

//variables mémoires coordonnées receveur (obligatoirement globales)
var cx_rec;
var cy_rec;

var vids;

var value = 0;


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
		append(insects, new Polygone(15,cx+cos(ang*(i-1))*200,cy+sin(ang*(i-1))*200,50,35,12,ang*(i-1)-PI,25));
	};

	insects.pop();

	append(insects, new Polygone(15,cx+cos(ang*(nombreInsects-2))*200,-40,25,20,7,ang*(nombreInsects-2)-PI,15));

  vids = createVideo(['thebigcrash2_1.mp4'],callVids);
  vids.hide();
  //vids.play();
}

var insectDisplay=false;

function callVids(){
  vids.play();
}

function draw() {

  background(255);

  var cx=width/2;
  var cy=height/2;
  var ang=PI*2/nombreInsects;


  //VIDEO/////////////

  if(vids!=null)image(vids,-255,-100,width+500,height+200);
  //if(vids!=null)image(vids,0,0,width,height);

  fill(0);

  //if(vids!=null)text(vids.time()+" /  "+vids.duration(),200,20);

  if(vids!=null)if(vids.time()==vids.duration())insectDisplay=true;



  if(insectDisplay){

    for(i=0; i<insects.length; i++) {
      insects[i].display();
    };

    for(j=0; j<sacs.length; j++) {
      sacs[j].display();
    };
    //i = nombreInsects;
    console.log("finnish!");

    vids = null;
  }

  //////////////////




	if((scroll!=0)&&(scroll<200)){
		if(etat==2){

      //DON
			/*insects[nombreInsects-1].animate(insects[nombreInsects-1].cx-50,insects[nombreInsects-1].cy+50);
			insects[0].animate(insects[0].cx-50,insects[0].cy+50);
			insects[nombreInsects-1].animateAng(insects[nombreInsects-1].ang+PI/3.6);
			insects[0].animateAng(insects[0].ang-PI/3.4);*/
		}
    //DON

		insects[nombreInsects-1].animate(cx+cos(ang*(nombreInsects-2))*200,scroll);

		etat = 1;
	}

	if((scroll>=280)&&(scroll<350)&&(etat!=2)){
		if(etat==3){
      //DON
      insects[0].animate(insects[0].cx+70,insects[0].cy+15);
    }else{
      //DON
			insects[nombreInsects-1].animate(insects[nombreInsects-1].cx+50,insects[nombreInsects-1].cy-50);
			insects[0].animate(insects[0].cx+50,insects[0].cy-50);
			insects[nombreInsects-1].animateAng(insects[nombreInsects-1].ang-PI/3.6);
			insects[0].animateAng(insects[0].ang+PI/3.4);
      //MUTUEL
      insects[6].animate(insects[6].cx-30,insects[6].cy+40)
      insects[5].animate(insects[5].cx+10,insects[5].cy-40)
      insects[5].animateAng(-(PI/12))
      //TROC
      insects[4].animate(insects[4].cx-50,insects[4].cy+50);
      insects[4].animateAng(insects[4].ang+PI/2);
      insects[3].animate(insects[3].cx-50,insects[3].cy+50);
      insects[3].animateAng(insects[3].ang+-PI/3.4);
		}
		etat = 2;
	}

	if((scroll>=400)&&(scroll<500)&&(etat!=3)){
		if(etat==4){
      //DON
			sacs.pop();
			insects[0].rx += 2;
			insects[0].ry += 5;
			insects[0].cr += 2;
		}else{
      //DON
			insects[0].animate(insects[0].cx-70,insects[0].cy-15);
      //MUTUEL
      insects[6].animateAng(-(PI/3))
      insects[5].animateAng(PI/3)
      //TROC
      insects[4].animate(insects[4].cx+75,insects[4].cy+20);
		}
		etat = 3;
	}

	//Apparition sac
	if((scroll>=550)&&(scroll<650)&&(etat!=4)){
		if(etat==5){
      //DON
			insects[0].animate(insects[0].cx-70,insects[0].cy-15);
		}else{
      //DON
			append(sacs, new Bloc(15,insects[0].cx-10,insects[0].cy-2,10,10,6));
      //append(sacs, new Bloc(15,0,0,10,10,6));
      //sacs[0].anime(insects[0].cx-10,insects[0].cy-2)
			insects[0].rx -= 2;
			insects[0].ry -= 5;
			insects[0].cr -= 2;
      //MUTUEL
      insects[6].animate((insects[6].cx)-25,(insects[6].cy)+60);
      //TROC
      insects[3].rx -= 2;
			insects[3].ry -= 5;
			insects[3].cr -= 2;

      insects[4].rx -= 2;
			insects[4].ry -= 5;
			insects[4].cr -= 2;
      append(sacs, new Bloc(15,insects[3].cx-10,insects[3].cy-2,10,10,6));
      append(sacs, new Bloc(15,insects[4].cx+10,insects[4].cy-2,10,10,6));

		}
		etat = 4;
	}
	//Fin Apparition sac

	if((scroll>=700)&&(scroll<800)&&(etat!=5)){
		if(etat==6){
      //DON
			insects[nombreInsects-1].animate(cx_rec,cy_rec);
		}else{
      //DON
			insects[0].animate(insects[0].cx+70,insects[0].cy+15);
      //MUTUEL
      insects[6].angle = 0;
      insects[5].angle = 0;
      append(sacs, new Bloc(30,insects[6].cx-50,insects[6].cy+12,100,70,20,0));
      sacs[1].animateAng(-PI/12)
      //TROC
      sacs[1].animate(insects[3].cx-28,insects[3].cy-25);
      sacs[2].animate(insects[4].cx+35,insects[4].cy+10);
      //insects[6].display();
      //append(sacs, new Bloc(30,-364,154,100,70,20));
		}
		etat = 5;
	}

	if((scroll>=850)&&(scroll<950)&&(etat!=6)){
		if(etat==7){
			insects[nombreInsects-1].rx -= 5;
			insects[nombreInsects-1].ry -= 5;
			insects[nombreInsects-1].vari -= 2;
			insects[nombreInsects-1].cr -= 2;
			append(sacs, new Bloc(15,insects[nombreInsects-1].cx,insects[nombreInsects-1].cy,10,10,6,0));
		}
		else{
      //DON
			cx_rec = insects[nombreInsects-1].cx;
			cy_rec = insects[nombreInsects-1].cy;
			insects[nombreInsects-1].animate(sacs[0].cx,sacs[0].cy);
      //TROC
      sacs[1].animate(insects[3].cx,insects[3].cy);
      sacs[2].animate(insects[4].cx,insects[4].cy);
		}
		etat = 6;
	}

	if((scroll>=1000)&&(scroll<1100)&&(etat!=7)){
		if(etat==8){
			insects[nombreInsects-1].animate(insects[nombreInsects-1].cx+70,insects[nombreInsects-1].cy+15);
		}
		else{
      //DON
			insects[nombreInsects-1].rx += 5;
			insects[nombreInsects-1].ry += 5;
			insects[nombreInsects-1].vari += 2;
			insects[nombreInsects-1].cr += 2;
			sacs[0].angle = 0
      //TROC
      insects[3].rx += 2;
      insects[3].ry += 5;
      insects[3].cr += 2;

      insects[4].rx += 2;
      insects[4].ry += 5;
      insects[4].cr += 2;
      sacs[1].angle = 0;
      sacs[2].angle = 0;
		}
		etat = 7;
	}

	if((scroll>=1120)&&(scroll<1220)&&(etat!=8)){
		insects[nombreInsects-1].animate(insects[nombreInsects-1].cx-70,insects[nombreInsects-1].cy-15);
		etat = 8;
	}
}

function mouseWheel(event) {
	scroll -= event.delta;
	print(scroll);
}
