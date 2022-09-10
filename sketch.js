let chicken;
let clouds = [];
let chickenImg;
let backgroundImg;
let cloudImg;
function preload() {
    chickenImg = loadImage('Images/chicken.png');
    backgroundImg = loadImage('Images/background.png');
    cloudImg = loadImage('Images/cloud.png');
}
function setup() {
    createCanvas(1920, 1080);
    chicken = new Chicken();
    cloud = new Cloud();
}

document.onkeydown = keyPressed;
function keyPressed() {
    if(key == ' ') {
        chicken.jump();
    }
    if (keyCode == LEFT_ARROW) {
        chicken.moveLeft();
    }
    if (keyCode == RIGHT_ARROW) {
        chicken.moveRight();
    }
}
function draw() {
    if(random(3) < 0.01 && clouds.length < 5) {
        clouds.push(new Cloud());
    }
    background(backgroundImg);
    chicken.show();
    chicken.move();

    for(let cloud of clouds) {
        cloud.show();
        cloud.move();
    }
}