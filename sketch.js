
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ball,ball2,ball3,ball4;
var hold,hold2,hold3,hold4;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height/2-200,600,40);
	ball = new Ball(350,600,75);
//	console.log(ball.body)
	ball2 = new Ball(500,600,75,);
	
	ball3 = new Ball(650,600,75);
	ball4 = new Ball(800,600,75);

	hold = new slingShot(ball.body,{x:350,y:height/2-200});
	hold2 = new slingShot(ball2.body,{x:500,y:height/2-200});
	hold3 = new slingShot(ball3.body,{x:650,y:height/2-200});
	hold4 = new slingShot(ball4.body,{x:800,y:height/2-200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  hold.display();
  hold2.display();
  hold3.display();
  hold4.display();
 
  
  drawSprites();
 
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x: -2, y:0});
	}
	console.log(Matter.Body.applyForce)
}



