var bullet ;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1200, 200, thickness, 300);
  wall.shapecolor = color(80,80,80)
  bullet = createSprite (50,200,80,5)
  bullet.shapeColor = "white"

  speed = random (223,321);
  weight = random (30,52);
  thickness = random (22,83)

  bullet.velocityX = speed;

}

function draw() {
  background(0,0,0); 
  
  if ( 
    hascollided (bullet,wall)
    // //wall.x - bullet.x < (bullet.width+wall.width)/2
    )
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if (damage > 10)
    {
      wall.shapeColor = color (255,0,0)
    }
    if ( damage < 10) 
    {
      wall.shapeColor = color(0,255,0)
    }
  }

  drawSprites();
}

function hascollided (lbullet,lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge >= wallLeftEdge) {

    return true;
  }
    return false ;
}