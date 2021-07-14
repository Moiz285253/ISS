

var iss,astro,astrod,edges;

var gameStates = 0;

function preload() {
issI = loadImage("iss.png");
sleepI = loadAnimation("sleep.png");
exersizeA = loadAnimation("gym1.png","gym2.png");
moveA = loadAnimation("move2.png","move1.png");
eatA = loadAnimation("eat1.png","eat2.png");
bathA = loadAnimation("bath1.png","bath2.png");
brushA = loadAnimation("brush.png");

}

function setup() {
  createCanvas(600,400);

  iss = createSprite(300,200,20,20);
  iss.addImage(issI);
  iss.scale = 0.12;

  astro = createSprite(300,300,50,50);
  astro.addAnimation("sleeping",sleepI);
  astro.scale = 0.07;
  astro.debug = true;
  astro.setCollider("RECTANGLE",0,0,1000,2000)

}


function draw() {
  background(0);

  edges = createEdgeSprites();
  astro.bounceOff(edges);

  if (gameStates=== 0 ) {
    drawSprites();
    textSize(20)
    fill("PINK")
    text("UP_ARROW = brushing",50,50);

    fill("LIGHTGREEN")
    text("DOWN_ARROW = gymming",50,100);

    fill("WHITE")
    text("RIGHT_ARROW = bathing",50,150);

    fill("RED")
    text("LEFT_ARROW = eating",50,200);

    fill("YELLOW")
    text("M = moving",50,250);

    fill("BLACK")
    text("Press SPACE to countinue",50,300);

    if(keyDown("SPACE")) {
      gameStates = 1;
    }
  }


  if(gameStates === 1) {

    if(keyDown("DOWN_ARROW")) {
      astro.changeAnimation("exersize");
      astro.addAnimation("exersize",exersizeA)
    }
  
    if(keyDown("UP_ARROW")) {
      astro.changeAnimation("brushing");
      astro.addAnimation("brushing",brushA);
  
      astro.velocityX = 0.7;
      astro.velocityY = 0.79;
    }
  
    if(keyDown("Right_ARROW")) {
      astro.changeAnimation("bathing");
      astro.addAnimation("bathing",bathA);
  
      astro.velocityX = -0.7;
      astro.velocityY = -0.79;
    }
  
    if(keyDown("LEFT_ARROW")) {
      astro.changeAnimation("eating");
      astro.addAnimation("eating",eatA);
  
      astro.velocityX = 0.7;
      astro.velocityY = -0.79;
    }
  
    if(keyDown("M")) {
      astro.changeAnimation("moving");
      astro.addAnimation("moving",moveA);
  
      astro.velocityX = -0.7;
      astro.velocityY = 0.79;
    }
  
    drawSprites();
  }
}