var movrect,fixrect;

function setup() {
  createCanvas(800,400);
  movrect=createSprite(300,200,50,80);
  fixrect=createSprite(300,400,90,40);

  movrect.shapeColor="blue";
  fixrect.shapeColor="blue";

  movrect.velocityY=+4;
  fixrect.velocityY=-4;
}

function draw() {
  background(255,255,255);  

  //movrect.x=mouseX;
  //movrect.y=mouseY;

  if(movrect.x-fixrect.x<movrect.width/2+fixrect.width/2&&
    fixrect.x-movrect.x<movrect.width/2+fixrect.width/2){
      movrect.velocityX=movrect.velocityX*(-1);
      fixrect.velocityX=fixrect.velocityX*(-1);
    }
    if(movrect.y-fixrect.y<movrect.height/2+fixrect.height/2&&
    fixrect.y-movrect.y<movrect.height/2+fixrect.height/2){
      movrect.velocityY=movrect.velocityY*(-1);
      fixrect.velocityY=fixrect.velocityY*(-1);
      
  }
  drawSprites();
}