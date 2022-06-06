
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var radius = 40
var ground1, Right, Left
var engine, world

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options = {
	restitution: 0.3, 
	isStatic: false,
	friction: 0,
	density: 1.2
}
ball = Bodies.circle(260,100,radius/2,ball_options)
World.add(world, ball)
	
  

ground1 = new Ground(width/2,670,width,20)
Left = new Ground(1100,600,20,120)
Right = new Ground(1350,600,20,120)
Engine.run(engine);
}
function draw() {
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius)
ground1.display();
Left.display();
Right.display();
 
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}
