var scroll = 0;
var etat = 0;
var cx_rec;		//variables mémoires coordonnées receveur (obligatoirement globales)
var cy_rec;

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

	

}


function draw() {

	background(255);
	var cx=width/2;
	var cy=height/2;
	var ang=PI*2/nombreInsects;
	
	for(i=0; i<insects.length; i++) {
		insects[i].display();
	};	
	for(j=0; j<sacs.length; j++) {
		sacs[j].display();
	};


//Don
	
	
	if(scroll<200){
		if(etat==2){
			insects[nombreInsects-1].animate(insects[nombreInsects-1].cx-50,insects[nombreInsects-1].cy+50);
			insects[0].animate(insects[0].cx-50,insects[0].cy+50);
			insects[nombreInsects-1].animateAng(insects[nombreInsects-1].ang+PI/3.6);
			insects[0].animateAng(insects[0].ang-PI/3.4);
		}			
		insects[nombreInsects-1].animate(cx+cos(ang*(nombreInsects-2))*200,scroll);
		etat = 1;
	}

	if((scroll>=280)&&(scroll<350)&&(etat!=2)){
		if(etat==3){insects[0].animate(insects[0].cx+70,insects[0].cy+15);}
		else{
			insects[nombreInsects-1].animate(insects[nombreInsects-1].cx+50,insects[nombreInsects-1].cy-50);
			insects[0].animate(insects[0].cx+50,insects[0].cy-50);
			insects[nombreInsects-1].animateAng(insects[nombreInsects-1].ang-PI/3.6);
			insects[0].animateAng(insects[0].ang+PI/3.4);
		}
		etat = 2;
	}
	
	if((scroll>=400)&&(scroll<500)&&(etat!=3)){
		if(etat==4){
			sacs.pop();
			insects[0].rx += 2;
			insects[0].ry += 5;
			insects[0].cr += 2;
		}
		else{
			insects[0].animate(insects[0].cx-70,insects[0].cy-15);
		}
		etat = 3;
	}	
	//Apparition sac
	if((scroll>=550)&&(scroll<650)&&(etat!=4)){
		if(etat==5){
			insects[0].animate(insects[0].cx-70,insects[0].cy-15);
		}
		else{
			append(sacs, new Bloc(15,insects[0].cx-10,insects[0].cy-2,10,10,6));
			insects[0].rx -= 2;
			insects[0].ry -= 5;
			insects[0].cr -= 2;
		}
		etat = 4;
	}
	//Fin Apparition sac
	
	if((scroll>=700)&&(scroll<800)&&(etat!=5)){
		if(etat==6){
			insects[nombreInsects-1].animate(cx_rec,cy_rec);
		}
		else{
			insects[0].animate(insects[0].cx+70,insects[0].cy+15);
		}
		etat = 5;
	}
	
	if((scroll>=850)&&(scroll<950)&&(etat!=6)){
		if(etat==7){
			insects[nombreInsects-1].rx -= 5;
			insects[nombreInsects-1].ry -= 5;
			insects[nombreInsects-1].vari -= 2;
			insects[nombreInsects-1].cr -= 2;
			append(sacs, new Bloc(15,insects[nombreInsects-1].cx,insects[nombreInsects-1].cy,10,10,6));
		}
		else{
			cx_rec = insects[nombreInsects-1].cx;
			cy_rec = insects[nombreInsects-1].cy;
			insects[nombreInsects-1].animate(sacs[0].cx,sacs[0].cy);
		}
		etat = 6;
	}
		
	if((scroll>=1000)&&(scroll<1100)&&(etat!=7)){
		if(etat==8){
			insects[nombreInsects-1].animate(insects[nombreInsects-1].cx+70,insects[nombreInsects-1].cy+15);
		}
		else{
			insects[nombreInsects-1].rx += 5;
			insects[nombreInsects-1].ry += 5;
			insects[nombreInsects-1].vari += 2;
			insects[nombreInsects-1].cr += 2;
			sacs.pop();
		}
		etat = 7;
	}

	if((scroll>=1120)&&(scroll<1220)&&(etat!=8)){
		insects[nombreInsects-1].animate(insects[nombreInsects-1].cx-70,insects[nombreInsects-1].cy-15);
		etat = 8;
	}
		
//Fin Don
	
/*	if((scroll>=1000)&&(scroll<1800)){
		for(i=0; i<insects.length; i++) {
			insects[i].animate(cx+cos(ang*(i-1))*500,cy+sin(ang*(i-1))*500);
		};
		etat = 1;
	}


  if((scroll>=1800)&&(scroll<2600)){
    for(i=0; i<insects.length; i++) {
      insects[i].animate(cx+cos(ang*(i-1))*100,cy+sin(ang*(i-1))*100);
	  if(etat==3){insects[i].animateAng(ang*(i-1)-PI);}
    };
	etat = 2;
  }


  if(scroll>=2600){
    for(i=0; i<insects.length; i++) {
      insects[i].animate(cx+i*40,cy);
      insects[i].animateAng(PI);
    };
	etat = 3;
  }
*/
}

function mouseWheel(event) {
	scroll -= event.delta;
	print(scroll);
}