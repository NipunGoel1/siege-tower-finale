class Box {
  constructor(x,y,width,height){
    var options = { 
      isStatic:false,
      density:0.11,
      restitution:0.4,
      friction:10
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.r = random(0,255);
    this.ra = random(0,255);
    this.ran = random(0,255);
    this.visibility = 255;
    
    World.add(world,this.body);
  }
  score(){
    if((this.visibility<0) && (this.visibility>-105)){
      score=score+1;
    }
  }
  display(){
    
    var pos = this.body.position;
    if(this.body.speed<3){
     
    push();
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    rectMode(CENTER);
    
    tint(255,this.visibility)
    fill(this.r,this.ra,this.ran);
    rect(0,0,this.width,this.height);
    pop();
  }else {
    this.visibility = this.visibility-5;
    World.remove(world,this.body)}    
  
}

  }


