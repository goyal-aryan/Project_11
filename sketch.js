var garden, rabbit, apple, leaf;
var gardenImg, rabbitImg, appleImg, leafImg;

//to preload images
function preload() {
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
    appleImg = loadImage("apple.png");
    leafImg = loadImage("leaf.png");
}

function setup() {

    //to create Canvas
    createCanvas(400, 400);

    // background
    garden = createSprite(200, 200);
    garden.addImage(gardenImg);

    //creating rabbit
    rabbit = createSprite(180, 340, 30, 30);
    rabbit.scale = 0.08;
    rabbit.addImage(rabbitImg);
}


function draw() {

    //to give background color  
    background(0);

    //to create Edges  
    var edges = createEdgeSprites();

    //to collide rabbit with edges and move it with mouse  
    rabbit.collide(edges);
    rabbit.x = mouseX;

    // call the functions
    spawnApple();
    spawnLeaf();

    //to display all sprites  
    drawSprites();
}

//function to create apples
function spawnApple() {

    // to check if the remainder is 0  
    if (World.frameCount % 80 === 0) {

        //to create the apple sprite      
        apple = createSprite(200, 100, 20, 20);

        //to move apple
        apple.velocityY = 3;

        //to add image to apple
        apple.addImage(appleImg);

        //to resize apple
        apple.scale = 0.05;

        //to display apple in different positions
        apple.x = Math.round(random(10, 390));
    }
}

//function to create the leaf
function spawnLeaf() {

    // to check if the remainder is 0  
    if (World.frameCount % 60 === 0) {
      
        leaf = createSprite(100, 100, 20, 20);

        //to move the leaf
        leaf.velocityY = 3;

        //to add image for leaf
        leaf.addImage(leafImg);

        //to resize the leaf
        leaf.scale = 0.05;

        //to display leaf in different positions
        leaf.x = Math.round(random(100, 390));
    }
}