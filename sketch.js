
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new bobClass(300,350,50);
	bob2 = new bobClass(350,350,50);
	bob3 = new bobClass(400,350,50);
	bob4 = new bobClass(450,350,50);
    bob5 = new bobClass(500,350,50);
	
	roof = new roofClass(400,100,300,20);

	rope1 = new ropeClass(bob1.body,roof.body,-100,0);
	rope2 = new ropeClass(bob2.body,roof.body,-50,0);
	rope3 = new ropeClass(bob3.body,roof.body,0,0);
	rope4 = new ropeClass(bob4.body,roof.body,50,0);
	rope5 = new ropeClass(bob5.body,roof.body,100,0);

    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){
		Body.applyForce(bob1.body,bob1.body.position,{x:500,y:-500})
	}
  }






