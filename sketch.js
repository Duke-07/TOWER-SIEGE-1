const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world; 
var gameState="onsling";
function preload(){

}
function setup() {
  createCanvas(900,500);
  engine = Engine.create();
  world = engine.world;


  Poly=new Pol(100,250,40);

  ground1 = new Ground(310,376,220,10);
  ground2 = new Ground(600,276,160,10);
  basement=new Ground(400,height,1000,20);

  slingShot=new Slingshot(Poly.body,{x:100,y:250});

  
  block1=new Box(220,350,30,40);
  block2=new Box(250,350,30,40);
  block3=new Box(280,350,30,40);
  block4=new Box(310,350,30,40);
  block5=new Box(340,350,30,40);
  block6=new Box(370,350,30,40);
  block7=new Box(400,350,30,40);

  
  block17=new Box(540,250,30,40);
  block18=new Box(570,250,30,40);
  block19=new Box(600,250,30,40);
  block20=new Box(630,250,30,40);
  block21=new Box(660,250,30,40);

  
  block8=new Box(250,310,30,40);
  block9=new Box(280,310,30,40);
  block10=new Box(310,310,30,40);
  block11=new Box(340,310,30,40);
  block12=new Box(370,310,30,40);

  
  block22=new Box(570,210,30,40);
  block23=new Box(600,210,30,40);
  block24=new Box(630,210,30,40);

   
   block13=new Box(280,270,30,40);
   block14=new Box(310,270,30,40);
   block15=new Box(340,270,30,40);

  
   block25=new Box(600,170,30,40);

   
   block16=new Box(310,230,30,40);
if(gameState==="onlsing"){
      textSize(20);
      text("Drag the Hexagonal Stone and Release it , to launch it towards the blocks",100,100);
  }
  else if(gameState==="onfly"){
     textSize(20);
   text("Press space bar to reset",100,200);
  }
  
 
 Engine.run(engine);
}

function draw() {
   Engine.update(engine);
   background(rgb(55,43,43));
    textSize(20);
    fill("white");
    text("Drag the Hexagonal Stone and Release it , to launch it towards the blocks",100,100);
    textSize(20);
    text("Press \"Space\" bar to reset",600,450);
 
  ground1.display(); 
  ground2.display(); 
  basement.display();

  

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();


  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();


  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();


  block22.display();
  block23.display();
  block24.display();


  block13.display();
  block14.display();
  block15.display();

   block25.display();

    
   block16.display();
   slingShot.display();
   Poly.display();
   
  drawSprites();
}

function mouseDragged(){
  
      Matter.Body.setPosition(Poly.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
 
  slingShot.fly();
 
}
function keyPressed(){
  if(keyCode===32){
   
   Matter.Body.setPosition(Poly.body,{x:100,y:250});
    slingShot.attach(Poly.body);
  }
}