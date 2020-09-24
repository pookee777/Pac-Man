var PLAY = 1;
var END = 0;
var gameState = 1;
var invisibleWall1,invisibleWall2,invisibleWall3,
    invisibleWall3;
var pacMan,pacManImage;
var ghost1,ghost2,ghost3,ghost4,ghost1Image,ghost2Image,ghost3Image,
 ghost4Image,ghostImage;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8;

var score= 0;
var dot1,dot2,dot3,dot4,dot5,dot6,dot7;

function preload(){
pacManImage = loadImage("bleh.png");
ghost1Image = loadImage("blue-Green.png");
ghost2Image = loadImage("blue.png");
ghost3Image = loadImage("red.png");
ghost4Image = loadImage("pink.png");
ghostImage = loadImage("ghost.png"); 
}
function setup(){
  createCanvas(400, 400);
 pacMan = createSprite(200,220,20,20);
 pacMan.addImage("play",pacManImage);
 pacMan.scale = 0.46;

 ghost1 = createSprite(240,372,20,20);
 ghost1.addImage("playing",ghost1Image);
 ghost1.scale = 0.28;
 ghost1.velocityX = -5;
 
 ghost2 = createSprite(340,340,20,20);
 ghost2.addImage("playing2",ghost2Image);
 ghost2.scale = 0.22;
 ghost2.velocityX = -5;
 
 ghost3 = createSprite(140,140,20,20);
 ghost3.addImage("playing3",ghost3Image);
 ghost3.scale = 0.24;
 ghost3.velocityX = 5;
 
 ghost4 = createSprite(40,40,20,20);
 ghost4.addImage("playing4",ghost4Image);
 ghost4.scale = 0.28;
 ghost4.velocityX = 4;
 
 wall1 = createSprite(82,60,100,10);
 wall1.shapeColor = "blue";
 
 wall2 = createSprite(302,60,100,10);
 wall2.shapeColor = "blue";
 
 wall3 = createSprite(82,340,100,10);
 wall3.shapeColor = "blue";

 wall4 = createSprite(302,340,100,10);
 wall4.shapeColor = "blue";
 
 wall5 = createSprite(322,230,10,100);
 wall5.shapeColor = "blue";
 
 wall6 = createSprite(62,230,10,100);
 wall6.shapeColor = "blue";
 
 wall7 = createSprite(190,115,100,10);
 wall7.shapeColor = "blue";
 
 wall8 = createSprite(190,285,100,10);
 wall8.shapeColor = "blue";
 
  invisibleWall1 = createSprite(2,2,800,2);
  invisibleWall1.visible = false;
  
  invisibleWall2 = createSprite(398,2,2,800);
  invisibleWall2.visible = false;
  
  invisibleWall3 = createSprite(2,398,800,2);
  invisibleWall3.visible = false;
  
  invisibleWall4 = createSprite(2,398,2,800);
  invisibleWall4.visible = false;  
}
function draw() {
  background("black");
  fill("white");
  textSize(20);
  text("Survival Time: "+ score,38,20);
  
  if (gameState === PLAY)
  {
    score = Math.ceil(frameCount/frameRate()); 
      for (var i = 20; i<400; i=i+20)
     {
       dot1 = createSprite(i,312,10,10);
       dot1.shapeColor = "yellow";
       dot1.depth = -1;
     }
 
     for (var u = 20; u<400; u=u+20)
     {
       dot2 = createSprite(16,u,10,10);
       dot2.shapeColor = "yellow";
       dot2.depth = -1;
     }
     for (var a = 20; a<400; a=a+20)
     {
       dot3 = createSprite(a,372,10,10);
       dot3.shapeColor = "yellow";
       dot3.depth = -1;
     }

     for (var r = 20; r<400; r=r+20)
     {
       dot4 = createSprite(r,32,10,10);
       dot4.shapeColor = "yellow";
       dot4.depth = -1;
     }
 
     for (var o = 20;o<400; o=o+20)
     {
       dot5 = createSprite(o,86,10,10);
       dot5.shapeColor = "yellow";
       dot5.depth = -1;
     }

     for (var v = 20; v<400; v=v+20)
     {
       dot6 = createSprite(v,156,10,10);
       dot6.shapeColor = "yellow";
       dot6.depth = -1;
     }

     for (var b = 20; b<400; b=b+20)
     {
     dot7 = createSprite(384,b,10,10);
     dot7.shapeColor = "yellow";
     dot7.depth = -1;
     }
   
     if (ghost1.isTouching(pacMan))
     {
        gameState = END; 
     }
   
     if (ghost2.isTouching(pacMan))
     {
        gameState = END; 
     }

     if (ghost3.isTouching(pacMan))
     {
        gameState = END; 
     }
    
     if (ghost4.isTouching(pacMan))
     {
        gameState = END; 
     }
}
else if(gameState === END)
{
  ghost1.velocityX = 0;
  ghost2.velocityX = 0;
  ghost3.velocityX = 0;
  ghost4.velocityX = 0;
  pacMan.velocityX = 0;
  pacMan.velocityY = 0;
  textSize(22);
  fill("red");
  text("Game Over",200,200);
}

    if(keyDown(UP_ARROW))
    {
      pacMan.velocityY = -6;
    }
    
    if(keyDown(DOWN_ARROW))
    {
      pacMan.velocityY = 6;
    }
    
    if(keyDown(RIGHT_ARROW))
    {
      pacMan.velocityX = 6;
    }
    
    if(keyDown(LEFT_ARROW))
    {
      pacMan.velocityX = -6;
    } 
    
    createEdgeSprites();
    
    pacMan.bounceOff(wall1);
    pacMan.bounceOff(wall2);
    pacMan.bounceOff(wall3);
    pacMan.bounceOff(wall4);
    pacMan.bounceOff(wall5);
    pacMan.bounceOff(wall6);
    pacMan.bounceOff(wall7);
    pacMan.bounceOff(wall8);
    pacMan.bounceOff(invisibleWall1);
    pacMan.bounceOff(invisibleWall2);
    pacMan.bounceOff(invisibleWall3);
    pacMan.bounceOff(invisibleWall4);
  
    ghost1.bounceOff(wall1);
    ghost1.bounceOff(wall2);
    ghost1.bounceOff(wall3);
    ghost1.bounceOff(wall4);
    ghost1.bounceOff(wall5);
    ghost1.bounceOff(wall6);
    ghost1.bounceOff(wall7);
    ghost1.bounceOff(wall8);
    ghost1.bounceOff(invisibleWall1);
    ghost1.bounceOff(invisibleWall2);
    ghost1.bounceOff(invisibleWall3);
    ghost1.bounceOff(invisibleWall4);
      
    ghost2.bounceOff(wall1);
    ghost2.bounceOff(wall2);
    ghost2.bounceOff(wall3);
    ghost2.bounceOff(wall4);
    ghost2.bounceOff(wall5);
    ghost2.bounceOff(wall6);
    ghost2.bounceOff(wall7);
    ghost2.bounceOff(wall8);
    ghost2.bounceOff(invisibleWall1);
    ghost2.bounceOff(invisibleWall2);
    ghost2.bounceOff(invisibleWall3);
    ghost2.bounceOff(invisibleWall4);  

    
    ghost3.bounceOff(wall1);
    ghost3.bounceOff(wall2);
    ghost3.bounceOff(wall3);
    ghost3.bounceOff(wall4);
    ghost3.bounceOff(wall5);
    ghost3.bounceOff(wall6);
    ghost3.bounceOff(wall7);
    ghost3.bounceOff(wall8);
    ghost3.bounceOff(invisibleWall1);
    ghost3.bounceOff(invisibleWall2);
    ghost3.bounceOff(invisibleWall3);
    ghost3.bounceOff(invisibleWall4);
    
    ghost4.bounceOff(wall1);
    ghost4.bounceOff(wall2);
    ghost4.bounceOff(wall3);
    ghost4.bounceOff(wall4);
    ghost4.bounceOff(wall5);
    ghost4.bounceOff(wall6);
    ghost4.bounceOff(wall7);
    ghost4.bounceOff(wall8);
    ghost4.bounceOff(invisibleWall1);
    ghost4.bounceOff(invisibleWall2);
    ghost4.bounceOff(invisibleWall3);
    ghost4.bounceOff(invisibleWall4);  
    
 drawSprites();
}