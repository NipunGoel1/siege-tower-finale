
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20,box21;
var hexagon;
var sling;
var score = 0;
var bgImg;
var DEF;
var bg;
var gameState = "play";

function preload(){
  DEF = loadImage("sprites/day.jpg");
  getBackgroundImg();
}
function setup() {
  createCanvas(1600,400);
  engine = Engine.create();
  world = engine.world;

  
  
  ground1 = new Ground(805,380,330,40);
  ground2 = new Ground(1105,280,180,40);
  box1 = new Box(695,330,50,50);
  box2 = new Box(750,330,50,50);
  box3 = new Box(805,330,50,50);
  box4 = new Box(860,330,50,50);
  box5 = new Box(915,330,50,50);
  box6 = new Box(722,275,50,50);
  box7 = new Box(777,275,50,50);
  box8 = new Box(832,275,50,50);
  box9 = new Box(887,275,50,50);
  box10 = new Box(750,220,50,50);
  box11 = new Box(805,220,50,50);
  box12 = new Box(860,220,50,50);
  box13 = new Box(777,170,50,50);
  box14 = new Box(832,170,50,50);
  box15 = new Box(805,125,50,50);
  box16 = new Box(1065,255,50,50);
  box17 = new Box(1105,255,50,50);
  box18 = new Box(1145,255,50,50);
  box19 = new Box(1080,205,50,50);
  box20 = new Box(1125,205,50,50);
  box21 = new Box(1100,155,50,50);
  hexagon = new Hexagon(300,200,100,100);
 sling = new SlingShot(hexagon.body,{x:300,y:150})
 
}

function draw() {
 if(bgImg){
   background(bgImg)
 }else{
   background(DEF)
 }
  fill(255)
  textSize(22);
  text("SCORE : "+ score,width/2,40);
  Engine.update(engine);

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
 
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  hexagon.display();
  sling.display();

 


}
function mouseDragged(){
 if(gameState === "play"){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
sling.fly();
gameState = "launched"
}


function keyPressed(){
  if(keyCode === 32){
    gameState = "play";
  Matter.Body.setPosition(hexagon.body,{x:300,y:200});
  Matter.Body.setVelocity(hexagon.body,{x:0,y:0})
  sling.attach(hexagon.body);
  
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour >= 06 && hour<= 18){
    bg = "sprites/day.jpg";
  }else{
    bg = "sprites/night.jpg";
  }
bgImg = loadImage(bg)

}