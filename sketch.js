var fixedRect, movingRect;
var rect1, rect2, rect3, rect4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 700, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug= true;
  fixedRect.velocityY= -4;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  rect1= createSprite(100,100,50,50);
  rect1.shapeColor="green";

  rect2= createSprite(200,100,50,50);
  rect2.shapeColor="green";

  rect3= createSprite(300,100,50,50);
  rect3.shapeColor="green";

  rect4= createSprite(400,100,50,50);
  rect4.shapeColor="green";
  rect4.velocityY= 4;
}

function draw() {
  background("black");  
  
  movingRect.x= mouseX;
  movingRect.y=mouseY;

  if(isTouching(movingRect, rect2)){
    rect2.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    rect2.shapeColor="green";
    movingRect.shapeColor="green";
  }
 
  bounceOff(fixedRect, rect4); 

  drawSprites();
}


