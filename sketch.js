var GAMOVAR ;//e
var GAMOBAR ;//JOE MAMAE
var score = 0//yor mom;
var play = 1;  //Hihi hi ha I am a ghost yor mom ahio
var end = 0;
var gamestate = play;
var mitiorr ;
var mitioree ;
var cloudImage ;
var invisibleGround ;
var obstacols1 ;
var obstacols2 ;
var obstacols3 ;
var obstacols ;
var obstacolsGroup ;
var mitiorGroup ;
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
function preload() {
trex_running = loadAnimation("1.png", "2.png", "3.png");
trex_collided = loadAnimation("DED.png");
mitior = loadImage("mitior.png")
groundImage = loadImage("ground2.png")
obstacols1 = loadImage("obstacle 1.png")
obstacols2 = loadImage("obstacle2.png")
obstacols3 = loadImage("obstacle3.png")
mitiorr = loadImage("mitior.png")
mitioree = loadImage("mitioRe.png")
GAMOBAR = loadImage("yor mom screen.png")
}
function setup() {
createCanvas(windowWidth, windowHeight);
//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.addAnimation("collide", trex_collided)
trex.scale = 0.05;
//create a ground sprite
invisibleGround = createSprite(width,height,3200,60)
invisibleGround.visible = false;
trex.setCollider("circle",0,0,350);
trex.debug =true;
 GAMOVAR = createSprite(750,300)
 GAMOVAR.addImage(GAMOBAR)
 GAMOVAR.visible = false;

 
 
 
 
ground = createSprite(width,height-60,600,60);
ground.addImage("ground",groundImage);
ground.x = ground.width / 2;
ground.velocityX = -4 - score / 100;
obstacolsGroup = new Group();
mitiorGroup = new Group();
}
function draw() {
    background("lightblue");
    textSize(50)
text (score,width - 400,40 );
    if (gamestate == play){
  score = score + Math.round(frameCount/60);
  if (keyDown("space")&&trex.isTouching(ground)) {
    trex.velocityY = -22;
    }
trex.velocityY = trex.velocityY + 0.8
if (ground.x <  20) {
  ground.x = ground.width / 2;
  }
 
  if (obstacolsGroup.isTouching(trex)){
  gamestate = end //Change
  }  
  if (mitiorGroup.isTouching(trex)){
    gamestate = end //Change
    }  
spawnmitiors();
spawnOhstacols();
} else if (gamestate == end)  {  
  trex.velocityY = 0
    ground.velocityX = 0;
    trex.changeAnimation("collide", trex_collided)
  obstacolsGroup.setLifetimeEach(-1); //Change
 obstacolsGroup.setVelocityXEach(0)//Change
 GAMOVAR.visible = true;
 obstacols.visible = false;
 
 
 
}
trex.collide(invisibleGround);
drawSprites();

 
}
 
function spawnOhstacols(){
    if(frameCount%150==0){
        var wand = Math.round(random(1,3))
        obstacols=createSprite(width,height-75,30,30);
        obstacols.scale = 0.1;
        obstacols.velocityX=-5;
        //how du wui faind wer?;
     
     switch(wand){
     case 1: obstacols.addImage(obstacols1);
     break;
     case 2: obstacols.addImage(obstacols2);
     break;
     case 3: obstacols.addImage(obstacols3);}
 
     obstacolsGroup.lifetime = 300;
     obstacolsGroup.add(obstacols);
 
     }
 
 
 
   }
 
function spawnmitiors(){
//copy righted! by dirty mike aka as Max L. O. aka as yor mom
if (frameCount %210 == 0){
  var rand = Math.round(random(1,2))
mitior = createSprite(width,random(0,height),30,30);
mitior.scale = 0.50;
mitior.velocityX = -2;
mitior.velocityY = 1;


  //how du wui faind wer?;

switch(rand){
case 1: mitior.addImage(mitiorr);
break;
case 2: mitior.addImage(mitioree);
}

mitiorGroup.lifetime = 300;
mitiorGroup.add(mitior)

}}