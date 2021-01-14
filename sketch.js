
var monkey , monkeyImg;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,survialTime;

function preload(){

  monkeyImg = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(20, 500, 10, 10);
  monkey.addAnimation("monkey",monkeyImg);
  monkey.scale = 0.1;


  FoodGroup= new Group();
  obstacleGroup= new Group();
}

score = 0;
survialTime = 0;


function draw() {
   
background("lightGreen");
  
  stroke("black");
    fill("black");
      textSize(20);
  
  text("Survial Time:"+  survialTime, 100, 50);
  
  //displaying score
  stroke("black");
    fill("black");
      textSize(20);
  text("Score:"+  score, 300, 100);
  
   survialTime = Math.ceil(frameCount/frameRate());
  
  ground=createSprite(400,570,900,70);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        //jumpSound.play();
    }
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    
  }
  
  monkey.collide(ground);
  createBanana();
  createRocks();
  
  drawSprites();
  
}

function createBanana() {
  if (frameCount % 80 === 0) {
    banana = createSprite(700,350,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.170;
    
    banana.velocityX = -3;
    banana.lifetime = 400;
    
    FoodGroup.add(banana);
  }
}

function createRocks(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(700,500,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacle.scale = 0.3 ;
     obstacleGroup.add(obstacle);
  

  }
}



