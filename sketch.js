var bullet1,bullet2,bullet3,bullet4;
var wall1,wall2,wall3,wall4;
var speed,weight,thickness;


function setup() {
  createCanvas(1400,600);

  speed=random(223,321);

  weight=random(30,52);

  thickness=random(22,83);

 
  bullet1 = createSprite(50, 100, 50, 50);
  bullet1.velocityX = speed;
  bullet2 = createSprite(50, 250, 50, 50);
  bullet2.velocityX = speed;
  bullet3 = createSprite(50, 400, 50, 50);
  bullet3.velocityX = speed;
  bullet4 = createSprite(50, 550, 50, 50);
  bullet4.velocityX = speed;

  wall1 = createSprite(1300,100,50,130);
  wall1.shapeColor="black"; 
  wall2 = createSprite(1300,250,50,130);
  wall2.shapeColor="black"; 
  wall3 = createSprite(1300,400,50,130);
  wall3.shapeColor="black"; 
  wall4 = createSprite(1300,550,50,130);
  wall4.shapeColor="black"; 

}

function draw() {
  background(255,255,255); 
  
  wall1.shapeColor=color(80,80,80); 
  wall2.shapeColor=color(80,80,80); 
  wall3.shapeColor=color(80,80,80); 
  wall4.shapeColor=color(80,80,80); 

if(hasCollided(bullet1,wall1))
{
 bullet1.velocityX=0;
 var damage = 0.5*weight*speed*speed/(thickness *thickness *thickness);

 if(damage>10)
 {
  wall1.shapeColor=color(255,0,0);
 }
 
 if(damage<10)
{
  wall1.shapeColor=color(0,255,0);
}
}

if(hasCollided(bullet2,wall2))
{
 bullet2.velocityX=0;
 var damage = 0.5*weight*speed*speed/(thickness *thickness *thickness);

 if(damage>10)
 {
  wall2.shapeColor=color(255,0,0);
 }
 
 if(damage<10)
{
  wall2.shapeColor=color(0,255,0);
}
}

if(hasCollided(bullet3,wall3))
{
 bullet3.velocityX=0;
 var damage = 0.5*weight*speed*speed/(thickness *thickness *thickness);

 if(damage>10)
 {
  wall3.shapeColor=color(255,0,0);
 }
 
 if(damage<10)
{
  wall3.shapeColor=color(0,255,0);
}
}

if(hasCollided(bullet4,wall4))
{
 bullet4.velocityX=0;
 var damage = 0.5*weight*speed*speed/(thickness *thickness *thickness);

 if(damage>10)
 {
  wall4.shapeColor=color(255,0,0);
 }
 
 if(damage<10)
{
  wall4.shapeColor=color(0,255,0);
}
}
drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}