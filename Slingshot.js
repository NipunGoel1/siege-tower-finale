class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 1
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

 

    display(){
     if(this.sling.bodyA!= null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;    
               
            stroke(48,22,8);
            strokeWeight(7);
            line(pointA.x , pointA.y, pointB.x , pointB.y);  
               
            
     }
    }
    
    fly(){
     this.sling.bodyA = null;
     
    }
    attach(body){
        this.sling.bodyA = body;
       
    }
}