class Division{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        push();
        stroke("red");
        strokeWeight(5);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();    
    }
}

