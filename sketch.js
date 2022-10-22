const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;


function preload(){
  background = loadImage("background.png");
  rabbit_Img = loadImage("Rabbit-01.png");
  fruit_img = loadImage("Good_carrot.png");
}
function setup() 
{

  createCanvas(500,700);

  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  button  = createImg('cut_button.png');
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop)

  fruit_con = new Link(rope,fruit);
  rabbit = createSprite(250,590,100,10);
  rabbit.addImage(rabbit_Img);
  rabbit.scale = 0.3


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER)
}

function draw() 
{
  //background(51);
  image(background,250,350,500,700);

  

  rope.show();
  image(fruit_img,fruit.position.x,fruit.position.y,150,120);
  Engine.update(engine);
  ground.show();
  drawSprites()
 
   
}
function drop(){
rope.break()
fruit_con.detach()
fruit_con = null;


}

























