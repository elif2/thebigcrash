var polA;
var insects = [];
var nombreInsects = 8;

function Polygone(_n,_cx,_cy,_rx,_ry,_vari,_ang) {
  this.angle = 360.0 / _n;
  this.tabPoint = [];
  this.cx=_cx;
  this.cy=_cy;
  this.rx=_rx/2;
  this.ry=_ry/2;
  this.vari=_vari;
  this.ang=_ang;
  this.cx_p=this.cx;
  this.cy_p=this.cy;
  this.ang_p=this.ang;

  for (var i = 0; i < _n; i++) {
        this.tabPoint.push(new PointV(this.vari));
  }

  //---------------------------------------
  //DISPLAY
  //---------------------------------------

  this.display = function() {
    push();
    translate(this.cx,this.cy);
    rotate(this.ang);
    beginShape();
    for (var i = 0; i < this.tabPoint.length; i++) {
      curveVertex(
        (this.rx+this.tabPoint[i].get()) * cos(radians(this.angle * i)),
        (this.ry+this.tabPoint[i].get()) * sin(radians(this.angle * i))
      );
    }
    fill(255,0,0,80);
    noStroke();
    endShape(CLOSE);

    var r = 12 ;

    //push();
    //translate(55,0);
    beginShape();
    fill(255)
    stroke(0);
    strokeWeight(2);
    ellipse(25,0,r,r);
    endShape(CLOSE);
    pop();

    this.cx -= (this.cx-this.cx_p)*0.05;
    this.cy -= (this.cy-this.cy_p)*0.05;
    this.ang -= (this.ang-this.ang_p)*0.05;
  }

  this.animate = function(nx,ny){
    this.cx_p=nx;
    this.cy_p=ny;
  }

  this.animateAng = function(na){
    this.ang_p=na;
  }

};





function PointV(v){
    this.amp=v;
    this.time=random(1);
    this.deca = random(1);
    this.vit=random(0.01);
    this.get = function(){
        this.time+=this.vit;
        return noise(this.deca+this.time)*this.amp;
    }
}
