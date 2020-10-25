var dustbin, paperObject;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}

function keyPressed(){
 if (keyCode === UP_ARROW) {
	 Matter.Body.appleForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
 }
}

paperObject.set.radius(70);

groundObject.display();
dustbinObject.display();
paperObject.displau();