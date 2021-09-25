var battlefield

var statue1
var statuegood
var statue2
var statuebad

var miner
var minegear
var goldpile
var goldpaint

var attacker
var attackerimage
var attackers
var arrow
var arrowimage
var arrows

var gold=0

 var warrior
 var armour
 var minion
 var minions
 var minionsdead=0
function preload(){
 battlefield=loadImage("battle2.jpg")

 statuegood=loadImage("statue1.png")
 statuebad=loadImage("statue bad.png")

 minegear=loadImage("miner.png")
 goldpaint=loadImage("gold pile.png")

 attackerimage=loadImage("archidon1.png")
 arrowimage=loadImage("arrow1.png")

 armour=loadImage("Swordwrath1.png")
}

function setup() {
  createCanvas(1200,500);
  statue1 = createSprite(100,350 ,50 ,200 );
  statue1.addImage(statuegood)
  statue1.scale=0.5

  statue2 = createSprite(1100,350 ,50 ,200 );
  statue2.addImage(statuebad)
  statue2.scale=0.3
  
   miner= createSprite(20,450 ,50 ,200 );
  miner.addImage(minegear)
  miner.scale=0.5
  miner.velocityX=2

arrows=new Group ()
attackers=new Group ()
minions=new Group ()

  warrior=createSprite(50,450,50,100)
  warrior.addImage(armour)
  warrior.scale=0.3

  
  
  goldpile = createSprite(200,450 ,50 ,200 );
  goldpile.addImage(goldpaint)
  goldpile.scale=0.1
  
}

function draw() {
  background(battlefield);  
  if(miner.isTouching(goldpile)){
    miner.velocityX=0
    
  }
  textSize(50)
text("gold="+gold,100,50)
  if(keyWentDown("space")){
    arrow=createSprite(attacker.x,450,10,10)
  arrow.addImage(arrowimage)
  arrow.scale=0.2
  arrow.velocityX=-3
  arrows.add(arrow)
  arrow.lifetime=400
 }
 text("minionsdead="+minionsdead,300,50)

 if(arrows.isTouching(miner)){
   miner.destroy();
   
   arrows.destroyEach();
 }
 if(arrows.isTouching(minions)){
   minions.destroyEach();
   minionsdead=minionsdead+1
 }

 if(minionsdead===10){
   warrior.destroy();
   text("gameOver",600,300)
 }

 if(keyDown(UP_ARROW)){
   miner.y=miner.y-3
 }

 if(keyDown(DOWN_ARROW)){
  miner.y=miner.y+3
}

if(keyDown("w")){
  warrior.y=warrior.y-3
}

if(keyDown("s")){
  warrior.y=warrior.y+3
}

if(keyDown("d")){
  warrior.x=warrior.x+3
}

if(keyDown("a")){
  warrior.x=warrior.x-3
}

spawnminions();

if( warrior.isTouching(attackers)|| minions.isTouching(attackers)){
  attackers.destroyEach();
  minions.destroyEach();
  gold=gold+100
}

  spawnattackers();
  
  drawSprites();
}
function shoot(){
  
}
function spawnattackers(){
  if(frameCount%100==0){
  attacker = createSprite(1100,450 ,50 ,200 );
  attacker.addImage(attackerimage)
  attacker.scale=0.05
  attacker.velocityX=-1
  attackers.add(attacker)
  }

  

}

function spawnminions(){
  if(frameCount%60==0){
  minion=createSprite(20,450,10,10)
  minion.addImage(armour)
  minion.scale=0.1
  minion.velocityX=2
  minions.add(minion)
  }
  
}