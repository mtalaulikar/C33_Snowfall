const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var snow = [];
function preload() {
  bgImage = loadImage("snow1.jpg");
  girlImage = loadImage("girl.png");
}

function setup() {
  createCanvas(800, 500);
  engine = Engine.create();
  world = engine.world;
  
  girl = Bodies.rectangle(400,450,10,40);
  World.add(world,girl);
}

function draw() {
  background(bgImage);
  Engine.update(engine);
  image(girlImage, 400, 350, 60, 120);
  if(frameCount % 6 === 0){
    snow.push(new Snow(random(10,800),random(5,200),random(10,30)));
  }
  for (var j = 0; j < snow.length; j++) {
   
    snow[j].display();
  }
   
}

