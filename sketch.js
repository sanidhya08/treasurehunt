var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  if(score === 3){
    clear();
    background(bg2);
    Fill("black");
    textSize(40);
    text("TREADURE UNLOCKED",250,200);
  }


  drawSprites()
}