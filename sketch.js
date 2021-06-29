var astronaut, spaceCadet, bathAnim, brushAnim, drinkAnim, eatAnim, gymAnim1, gymAnim2, moveAnim, sleepAnim;
var ISS, ISSimg;
var edges;

var speed,angle = 0;

function preload(){
  bathAnim = loadAnimation("bath1.png", "bath2.png");
  brushAnim = loadAnimation("brush.png");
  drinkAnim = loadAnimation("drink1.png", "drink2.png");
  eatAnim = loadAnimation("eat1.png", "eat2.png");
  gymAnim1 = loadAnimation("gym1.png", "gym2.png");
  gymAnim2 = loadAnimation("gym11.png", "gym12.png");
  moveAnim = loadAnimation("move.png", "move1.png");
  sleepAnim = loadAnimation("sleep.png");

  ISSimg = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);

  ISS = createSprite(400, 200, 50, 50);
  ISS.addImage(ISSimg);
  ISS.scale = 0.162;

  spaceCadet = createSprite(400, 200, 50, 50);
  spaceCadet.scale = 0.1;
  spaceCadet.addAnimation("sleep", sleepAnim);  
  spaceCadet.addAnimation("bath", bathAnim);
  spaceCadet.addAnimation("brush", brushAnim);
  spaceCadet.addAnimation("drink", drinkAnim);
  spaceCadet.addAnimation("eat", eatAnim);
  spaceCadet.addAnimation("gym1", gymAnim1);
  spaceCadet.addAnimation("gym2", gymAnim2);
  spaceCadet.addAnimation("move", moveAnim);

  edges = createEdgeSprites();
}

function draw() {
  background(0);
  spaceCadet.bounceOff(edges);

  if(keyDown("s")){
    spaceCadet.changeAnimation("sleep");
  }
  if(keyDown("6")){
    spaceCadet.changeAnimation("bath");
  }
  if(keyDown("1")){
    spaceCadet.changeAnimation("brush");
  }
  if(keyDown("2")){
    spaceCadet.changeAnimation("drink");
  }
  if(keyDown("3")){
    spaceCadet.changeAnimation("eat");
  }
  if(keyDown("4")){
    spaceCadet.changeAnimation("gym1");
  }
  if(keyDown("5")){
    spaceCadet.changeAnimation("gym2");
  }
  if(keyDown("7")){
    spaceCadet.changeAnimation("move");
  }

  drawSprites();
}