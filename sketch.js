const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var ball, ground, world, engine;
function setup (){
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
  var g = {
    isStatic:true 

  }
  ground=Bodies.rectangle(200,390,400,20,g);
   World.add (world,ground)
   var r = {
   restitution: 1.2
   }
   ball=Bodies.circle(100,100,20,r)
  World.add (world, ball)
}
 
function draw (){
    background (0);
    Engine.update(engine);
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,20)
    ellipseMode (RADIUS)
    ellipse (ball.position.x,ball.position.y,20,20)

  }










