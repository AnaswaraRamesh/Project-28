class Launcher {
    constructor(bodyA,pointB){
        var options= {
            bodyA: bodyA,
            pointB: pointB,
            length: 20,
            stiffness: 0.01
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    
    attach(bodyA){
        this.sling.bodyA= bodyA
    }
    fly(){
        this.sling.bodyA = null;
    } 
    display(){
        if(this.sling.bodyA){
            push();
            strokeWeight(0)
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
            pop();

    }

}
}