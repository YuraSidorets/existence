let circles = [];
let months = 1080;
let threeYcols = 36;
let ninetyYrows = 30;
var dob;

function setup() {
    var canvas = createCanvas(1280, 1280);
    canvas.parent('sketch-holder');

    for (let i = 0; i < months; i++) {
        circles.push(new Circle());
    }
}

function draw() {
    line(15, 10, 1275, 10);
    var diff = monthDiff(new Date(), dob);
    var xCord = 30;
    var yCord = 30;

    for (let i = 0; i < ninetyYrows; i++) {
        for (let j = 0; j < threeYcols; j++) {
            circles[j].setCoordinates(xCord, yCord);
            circles[j].display();
            if (threeYcols * i + j + 1 <= diff) {
                fill(0);
            } else {
                fill(255);
            }
            text(threeYcols * i + j + 1, xCord - 6, yCord + 5);
            xCord += 35;
        }
        xCord = 30;
        yCord += 35;
    }
}

function setDob(dateString) {
    dob = new Date(dateString);
}

function monthDiff(d1, d2) {
    if (!d1) d1 = new Date();
    if (!d2) d2 = new Date();

    var months;
    months = (d1.getFullYear() - d2.getFullYear()) * 12;
    months -= d2.getMonth() + 1;
    months += d1.getMonth();
    return months <= 0 ? 0 : months;
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