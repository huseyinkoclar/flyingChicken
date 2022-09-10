class Cloud {
  constructor() {
    this.x = random(1920);
    this.y = random(150)+50;
    this.speed = random(-0.8, 0.8);
  }

  move() {
    this.x += this.speed;
    if (this.x > width || this.x < 0) {
      this.x = 0;
    }
  }

  display() {
    noStroke();
    fill(255);
  }
  show() {
    image(cloudImg, this.x, this.y, 250, 150);
  }
}