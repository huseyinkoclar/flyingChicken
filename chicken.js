class Chicken {
    constructor() {
        this.r = 150;
        this.x = 50;
        this.y = height-this.r;
        this.vy = 0;
        this.vx = 0;
        this.gravity = 2;
        this.friction = 2;
    }

    jump() {
        this.vy = -25;
    }
    moveLeft() {
        this.vx = -10;
    }
    moveRight() {
        console.log(this.vx);
        this.vx = 10;
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.x += this.vx;
        this.vx /= this.friction;
        this.x = constrain(this.x, 0, width-this.r);
        this.y = constrain(this.y, 0, height-this.r);
    }
    show() {
        image(chickenImg, this.x, this.y-183, this.r, this.r);
    }
}