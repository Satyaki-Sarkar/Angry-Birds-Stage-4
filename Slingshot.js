class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,250,70,38,150);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            strokeWeight(10);
            if(pointA.x<=250){
                line(pointA.x+25, pointA.y, pointB.x+40, pointB.y+18);
                bird.display();
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y+15);
                image(this.sling3,pointA.x-25,pointA.y-5,10,30);
            } else {
                line(pointA.x-25, pointA.y, pointB.x+40, pointB.y+18);
                bird.display();
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y+15);
                image(this.sling3,pointA.x+25,pointA.y-5,10,30);
            }
        }
        image(this.sling2,225,60,38,100);
    }
    
}