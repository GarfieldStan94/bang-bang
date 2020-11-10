var bullet,wall;
var speed, weight; 

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(330,52);

  thickness=random(22,83  )
  

  bullet=createSprite(50, 200, 50, 3);
  bullet.shapeColor=color(255);
  bullet.velocityX=speed;

  wall=createSprite(1400,200,60,300);
  wall.shapeColor=color(230,230,230);
}

function draw() {
  background(0); 

var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

if (damage>10) {
  wall.shapeColor=color (255,0,0);


}
if (damage<10) {
  wall.shapeColor=color (0, 255,0);


}
  
    




  drawSprites();
}

function hasCollided(bullet1,wall1){

  var bulletRightEdge= bullet1.x+ bullet1.width;
  var wallLeftEdge=wall1.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }

  
}