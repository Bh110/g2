var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options,packageBody_options,boxside1,boxside2,boxside3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(460, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(400,690, width,10);
	groundSprite.shapeColor=color(255)

boxside1=createSprite(350,640,20,100,{ isStatic:true});
boxside2=createSprite(550,640,20,100,{ isStatic:true});
boxside3=createSprite(460,675, 200,20,{ isStatic:true});
boxside1.shapeColor="red";
boxside2.shapeColor="red";
boxside3.shapeColor="red";
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(460, 200 , 5 , { restitution:0.4,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(460, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode=== DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
		 
		}
}



