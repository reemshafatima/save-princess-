var dragon,dragonImg
var fireball,fireballImg
var flag,flagImg
var gameover,gameoverImg
var MetalSpike,MetalSpikeImg
var prince,princeImg
var princess,princessImg
var rockwall,rockwallImg
var rockwall2
var startarrow,startarrowImg
var youwin,youwinImg
var castle,castleImg

function  preload() {
dragonImg=loadImage("dragon.png")
fireballImg=loadImage("fire ball.png")
flagImg=loadImage("flag.png")
gameoverImg=loadImage("game over.png")
MetalSpikeImg=loadImage("Metal Spike.png")
princeImg=loadImage("prince.png")
princessImg=loadImage("princess.png")
rockwallImg=loadImage("rock wall.jpg")
StartArrowImg=loadImage("Start Arrow.png")
youWinImg=loadImage("youWin.png")
castleImg=loadImage("castle.png")
}

function setup() {
    var canvas=createCanvas(windowWidth,windowHeight);
 
  rockwall = createSprite(500,800,20,20);
  rockwall.addImage("rockwall",rockwallImg);

  //rockwall.velocityX = -4
  rockwall.scale=0.4;

  rockwall2 = createSprite(1522,800,20,20);
  rockwall2.addImage("rockwall",rockwallImg);

  //rockwall2.velocityX = -4
  rockwall2.scale=0.4;


prince=createSprite(150,500,20,20);
prince.addImage("prince",princeImg)

prince.scale=0.3;

MetalSpikeGroup=new Group();


}

function draw() {
 background(0)
 
 if (rockwall.x < 250){
    rockwall.x = 500
  }

  if (rockwall2.x < 1100){
    rockwall2.x = 1589;
  }



fill("white") 
text(mouseX+","+mouseY,mouseX,mouseY)
//spawnrockwall();

spawnMetalSpike();

if(keyIsDown(UP_ARROW)){
  prince.y-=5
}

if(keyIsDown(DOWN_ARROW)){
  prince.y+=5
}

if(keyIsDown(RIGHT_ARROW)){
  prince.x+=5
}

if(keyIsDown(LEFT_ARROW)){
  prince.x-=5
}

 


drawSprites();

if(MetalSpikeGroup.isTouching(prince)){
  text("game over",1600,60)
 
  }
}

// function spawnrockwall() {
//     if(frameCount%60===0){
//         var rockwall=createSprite(width,800,30,30);
//         rockwall.addImage(rockwallImg);
//         rockwall.scale=0.4;
//         rockwall.velocityX=-4;

//         rockwall.lifetime = 2000;
//     }
// }

function spawnMetalSpike(){

  if(frameCount % 300 === 0){
    var MetalSpike=createSprite(2000,633,30,30);
   // MetalSpike=Math.round(random(80,120));
   MetalSpike.addImage(MetalSpikeImg);
    MetalSpike.scale=0.3;
    MetalSpike.velocityX=-4;

    MetalSpike.lifetime=2000;

    MetalSpike.depth=prince.depth;
    prince.depth=prince.depth+1;

    MetalSpikeGroup.add(MetalSpike);

  }
}








