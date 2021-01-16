var jerry,tom

var jerryImage

var tomImage

var gardenImage

function preload() {
    //load the images here
    jerryImage = loadImage("images/jerryTwo.png")

    tomImage = loadImage("images/tomTwo.png")

    gardenImage = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);

    jerry = createSprite (300,600)
    jerry.addImage("jerry",jerryImage)
    jerry.scale = 0.1
    jerry.setCollider("circle",0,0,270)

    tom = createSprite (800,600)
    tom.addImage("tom",tomImage)
    tom.scale = 0.1
    tom.setCollider("circle",0,0,370)

    //create tom and jerry sprites here

}

function draw() {

    background(gardenImage);
    
    //Write condition here to evalute if tom and jerry collide

    keyPressed();

    if(tom.isTouching(jerry)){
        tom.velocityX = 0
        jerry.velocityX = 0

        jerry.addAnimation("jerryOne.png")
        jerry.changeAnimation("jerryOne.png")

        //tom.addAnimation("tomFour.png")
        tom.changeAnimation("tomFour.png")

    }


    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
 if (keyCode === LEFT_ARROW){
    tom.velocityX = -5
    tom.addAnimation ("tomThree.png")
    tom.changeAnimation ("tomThree.png")

    jerry.velocityX = 5
    jerry.addAnimation("jerryFour.png")
    jerry.changeAnimation("jerryFour.png")
 }

}
