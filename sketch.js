
function preload(){
seaImg=loadImage("sea.png");
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

//code to reset the background 
 
function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,20);
  sea.addImage(seaImg);
  sea.scale=0.3;
  sea.velocityX=-2;

  ship=createSprite(200,200,40,20);
  ship.addAnimation("ship",shipImg)
  ship.scale=0.4;
}


function draw() {
  background("blue");
 drawSprites();
if(sea.x<100){
  sea.x=200;
}
console.log(sea.x);
}