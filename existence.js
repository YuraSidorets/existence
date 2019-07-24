let circles = [];
let months = 1080;

function setup() {
    createCanvas(1280, 760);
    for (let i = 0; i < months; i++) {
        circles.push(new Circle());
    }
}

function draw() {
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 36; j++) {
            circles[j].setCoordinates(i + 30, j + 30);
            circles[j].display();
        }
    }
}

class Circle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.diameter = 30;
    }

    setCoordinates(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}