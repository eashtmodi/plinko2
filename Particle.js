class Particle{
    constructor(x,y,radius){
        var options={
            density:1.0,
            restitution:0.8
        }
        this.particle=Bodies.circle(x,y,radius,options);
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.particle);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(this.particle.position.x,this.particle.position.y,this.radius*2);
        pop();  
    }
    
}