const Engine  = Matter.Engine;
const World = Matter. World;
const Bodies = Matter.Bodies;

var engine,world,ball,ground
var ball2,ball3,ball4
var rect2

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  ball = Bodies.circle(400, 200, 15);
  World.add(world,ball);

  var option = {
    isStatic: true
  }  
  ground = Bodies.rectangle(400, 380, 800, 20, option);
  World.add(world,ground);

  ball2 = Bodies.circle(300, 200, 15);
  World.add(world,ball2);

  ball3 = Bodies.circle(200, 200, 15);
  World.add(world,ball3);

  ball4 = Bodies.circle(100, 200, 15);
  World.add(world,ball4);

  rect2 = Bodies.rectangle(500, 200, 30, 40);
  World.add(world,rect2);

}

function draw() {
  background("blue");  
  Engine.update(engine);
  fill ("green");


  ellipse(ball.position.x, ball.position.y, 30, 30);
  fill ("red");
  ellipse(ball2.position.x, ball2.position.y, 30, 30);
  fill ("pink");
  ellipse(ball3.position.x, ball3.position.y, 30, 30);
  fill ("orange");
  ellipse(ball4.position.x, ball4.position.y, 30, 30);
  rectMode(CENTER);
  fill ("black");
  rect(ground.position.x, ground.position.y, 800, 20);
  fill ("purple");
  rect(rect2.position.x, rect2.position.y, 30, 40);



}