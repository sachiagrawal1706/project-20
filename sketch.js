

function setup() {
  createCanvas(1600,400);
  speed = random (55,90)
  weight = random (400,1500)

  car = createSprite(50,200,50,50);

  wall = createSprite(900,200,60,height/2)
  wall.shapeColor="grey";
  car.velocityX = speed

}

function draw() {
    background(255,255,255); 
    var deformation = 0.5 * weight * speed * speed / 22509;
    text ("speed : " +speed,200,50)
    text("weight : " +weight, 200,70)
    text("deformation : "+deformation,200,110)

    if(wall.x - car.x < car.width/2 +wall.width/2){
      car.velocityX=0;
      if(deformation>180){
        car.shapeColor=color(255,0,0);
        textSize(28)
        text("RED - REJECTED ", 200,200)
      }

      if(deformation<180 && deformation>100){
        car.shapeColor=color (230,230,0);
        textSize(28)
        text("YELLOW -tested OK ", 200,200)
      }

      if(deformation<100){
        car.shapeColor = color(0,255,0);
        textSize(28)
        text("GREEN -TESTED GOOD ", 200,200)
      }
    }

    drawSprites();
}