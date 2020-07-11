class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic:true
        }
        this.plinko=Bodies.circle(x,y,radius,options);
        this.x=x;
        this.y=y;
        this.radius=radius;
        World.add(world,this.plinko);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        stroke("blue");
        strokeWeight(5);
        ellipse(this.plinko.position.x,this.plinko.position.y,this.radius*2);
        pop();
    }
}