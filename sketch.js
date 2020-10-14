const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;

var divisions=[];
var plinkos=[];
var particles=[];

var divisionHeight=300;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for(var k=0;k<=width;k+80){
  divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight))  
  }  
  
  
  ground=new Ground(0,790,480,20);
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();
  for(var i=0;i<divisions.length;i++){
   divisions[i].display(); 
  }  
}