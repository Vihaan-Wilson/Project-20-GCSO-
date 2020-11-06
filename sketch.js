  var car,wall;
  var speed,weight;
  var deformation;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50,50);
  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(0);  

  car.velocityX = speed;


  if ((wall.width/2 + car.width/2) > (wall.x-car.x))
  {

    car.velocityX = 0;

  // Calculating Deformation :-  ((0.5 * weight * speed * speed)/22500)
  deformation = ((0.5 * weight * speed * speed)/22500)

if (deformation<100)
{
  car.shapeColor = 'green';
}

if ((100<deformation) && (deformation<180))
{
  car.shapeColor = 'yellow';
}

if (deformation>100)
{
  car.shapeColor = 'red';
}

  }

  drawSprites();
}