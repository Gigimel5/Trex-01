
var trex, trex_running;
var piso, pisoImage, piso_invisible;
var fondo;
var obstaculo1, obstaculo2, obstaculo3, obstaculo4, obstaculo5, obstaculo6;
function preload(){
  trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png");

  pisoImage=loadImage("ground2.png");
  fondo=loadImage("cloud.png");
  obstaculo1=loadImage("obstacle1.png");
  obstaculo2=loadImage("obstacle2.png");
  obstaculo3=loadImage("obstacle3.png");
  obstaculo4=loadImage("obstacle4.png");
  obstaculo5=loadImage("obstacle5.png");
  obstaculo6=loadImage("obstacle6.png");

}

function setup(){
  createCanvas(600,200);
  trex=createSprite(40,170,10,20);
  trex.addAnimation ("running", trex_running);
  trex.scale=0.5;
 
  piso=createSprite(300,190,600,10);
  piso.addImage(pisoImage);
  piso.velocityX=-2;

  piso_invisible=createSprite(300,200,600,7);
  piso_invisible.shapeColor="orange";
  piso_invisible.visible=false


}

function draw(){
  background("white");
  drawSprites();
  text(mouseX+"-"+mouseY,mouseX,mouseY);

  if(keyDown("space") && trex.y>160) {
    trex.velocityY=-10
  }

  

  trex.velocityY=trex.velocityY+0.8
  trex.collide(piso_invisible);
  console.log(trex.y)

  if(piso.x<0){
    piso.x=piso.width/2;
  }
  crearFondo();
}
function crearFondo(){
    var nube=createSprite(600,20,60,15);
      nube.velocityX=-2
  }

  function crearCactus(){

  }