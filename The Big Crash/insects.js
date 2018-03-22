var polA;
var insects = [];
var nombreInsects = 8;

function Polygone(_n,_cx,_cy,_rx,_ry,_vari) {
  this.angle = 360.0 / _n;
  this.tabPoint = [];
  this.cx=_cx;
  this.cy=_cy;
  this.rx=_rx/2;
  this.ry=_ry/2;
  this.vari=_vari;

  for (var i = 0; i < _n; i++) {
        this.tabPoint.push(new PointV(this.vari));
  }

  //---------------------------------------
  //DISPLAY
  //---------------------------------------

  this.display = function() {
    beginShape();
    for (var i = 0; i < this.tabPoint.length; i++) {
      curveVertex(
        this.cx + (this.rx+this.tabPoint[i].get()) * cos(radians(this.angle * i)),
        this.cy + (this.ry+this.tabPoint[i].get()) * sin(radians(this.angle * i))
      );
    }
    fill(255,0,0,80);
    noStroke();
    endShape(CLOSE);

    var r = 12 ;

    //push();
    translate(55,0);
    beginShape();
    fill(255)
    stroke(0);
    strokeWeight(2)
    ellipse(-25,0,r,r);
    endShape(CLOSE);
    //pop();

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
