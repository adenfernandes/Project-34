var dog, happyDog, database, foodS, foodStock;
var happyDogImage,dogImage;

//Create variables here

function preload()
{
  happyDogImage=loadImage("images/dogImg1.png")
  dogImage=loadImage("images/dogImg.png")
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}

function setup() {
  database=firebase.database()
  createCanvas(500, 500);

  dog=createSprite(250,250,1,1)
  dog.scale=0.2
  
  dog.addImage("dog",dogImage)
  
  
}


function draw() {  

  drawSprites();
  //add styles here
  background(46,139,87)
  
  if(KeyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  fill("white")
  textSize(40)
  text("Note:press UP_ARROW key To feed Dargo Milk!", 300, 100);
function readStock(data){
   foodS=data.val();
}
  
function writeStock(x){

  database.ref('/').update({
    Food:x
  })
 
}

  }







