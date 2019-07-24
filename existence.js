let circles = [];
let months = 1080;

function setup() {
    createCanvas(1280, 760);
    for (let i = 0; i < months; i++) {
        circles.push(new Circle());
    }
}

function draw() {
    for (let i = 0; i < circles.length; i++) {
        circles[i].display();
    }
}

class Circle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.diameter = 30;
    }

    display() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}