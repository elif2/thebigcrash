var sacs = [];

function Bloc(_n,_cx,_cy,_rx,_ry,_vari) {
  this.angle = 360.0 / _n;
  this.tabPoint = [];
  this.cx=_cx;
  this.cy=_cy;
  this.rx=_rx/2;
  this.ry=_ry/2;
  this.vari=_vari;
  this.cx_p=this.cx;
  this.cy_p=this.cy;

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

    beginShape();
    fill(255)
    stroke(0);
    strokeWeight(2);
    endShape(CLOSE);

    this.cx -= (this.cx-this.cx_p)*0.05;
    this.cy -= (this.cy-this.cy_p)*0.05;
  }

  this.animate = function(nx,ny){
    this.cx_p=nx;
    this.cy_p=ny;
  }

};