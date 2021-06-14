class Slingshot{
    constructor(objectA, objectB){
        var options = {
            bodyA:objectA,
            pointB:objectB,
            stiffness: 0.03,
            length:10
        }
         this.pointB =objectB
         this.slingShot = Constraint.create(options)
         World.add(world,this.slingShot);
    }
    fly(){
        this.slingShot.bodyA = null
    }
    attach(body) {
        this.slingShot.bodyA = body;
    }

    display(){
        if (this.slingShot.bodyA){
        var pointA = this.slingShot.bodyA.position
        var pointB = this.pointB
        push();
        strokeWeight(6)
        stroke("neon")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
        }
    }
}