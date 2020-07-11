const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(240,750,480,30);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();

    for(var a=0;a<=width;a=a+80){
      divisions.push(new Division(a,height-divisionHeight/2,10,160));
      
    }
    
    for(var b=40;b<=width;b=b+50){
      plinkos.push(new Plinko(b,75,5));
    }

    for(var c=15;c<=width;c=c+50){
      plinkos.push(new Plinko(c,175,5));
    }

     if(frameCount%30===0){
       particles.push(new Particle(240,-40,5));  
     }   

     for(var d=0;d<divisions.length;d=d+80){
     divisions[d].display();
     }
     
     for(var e=0;e<plinkos.length;e++){
     plinkos[e].display();
     }

     for(var e=0;e<particles.length;e++){
      particles[e].display();
      }

}

