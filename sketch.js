let grid;

let index = 0;
let ticktimer;

let C1;
let C2;
let C3;
let C4;


function setup() {
    createCanvas(750, 750);

    C1 = color(0, 200, 255, 200);
    C2 = color(0, 200, 255, 150);
    C3 = color(0, 200, 255, 100);
    C4 = color(0, 200, 255, 50);

    //Create grid
    grid = new Grid(15, 15, 72, 10, 10, color(255), color(0), 1);
}



function draw() {
    background(0);

    //Animations
    animation1(index, ticktimer);
    ticktimer++;


    grid.draw();
}



function mousePressed() {
    grid.addsquare(new Square(grid, color(0, 200, 255, 200), color(0, 200, 255, 150), color(0, 200, 255, 100), color(0, 200, 255, 50), true, true), Math.floor(random(0, 5)), Math.floor(random(0, 5)));
}

function keyPressed() {
    if (keyCode == 32) {
        index++;
        ticktimer = 0;
    }
}