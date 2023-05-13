let grid;

let index = 0;
let ticktimer;

let B1;
let B2;
let B3;
let B4;

let G1;
let G2;

let R1;
let R2;

let Y1;
let Y2;

let GREY;


let minWidth;
let minHeight;

let yOffset = 50;


let font;


function setup() {
    createCanvas(displayWidth-50, windowHeight - yOffset);

    minWidth = windowWidth;
    minHeight = windowHeight;

    B1 = color(0, 200, 255, 200);
    B2 = color(0, 200, 255, 150);
    B3 = color(0, 200, 255, 100);
    B4 = color(0, 200, 255, 50);

    G1 = color(50, 200, 50, 255);
    G2 = color(50, 200, 50, 150);

    R1 = color(200, 50, 50, 255);
    R2 = color(200, 50, 50, 150);

    Y1 = color(200, 200, 50, 255);
    Y2 = color(200, 200, 50, 150);

    GREY = color(100, 100, 100, 255);


    font = loadFont("LemonDays.ttf");


    //Create grid
    grid = new Grid((windowWidth - windowHeight) / 2 + 15 + (yOffset/2), 15, (windowHeight - (30 + yOffset))/10, 10, 10, color(255), color(0), 1);
}

let inMenu = true;
let animationN = 0;


function draw() {
    background(0);
    if (inMenu) {
        fill(255);
        rect(((displayWidth-50)/3), 0, ((displayWidth-50)/3), windowHeight);
    } else {
        //White sides
        if (fullscreen()) {
            fill(255);
            rect(0, 0, (displayWidth - displayHeight) / 2 + (yOffset/2), displayHeight);
            rect(displayWidth - (displayWidth - displayHeight) / 2 - (yOffset/2), 0, (displayWidth - displayHeight) / 2 + 30, displayHeight);
        } else {
            fill(255);
            rect(0, 0, (windowWidth - windowHeight) / 2 + (yOffset/2), windowHeight);
            rect(windowWidth - (windowWidth - windowHeight) / 2 - (yOffset/2), 0, (windowWidth - windowHeight) / 2 + 30, windowHeight);
        }

        //Animations
        animation(animationN, index, ticktimer);
        ticktimer++;


        grid.draw();
    }
}



function mousePressed() {
    //grid.addSquare(new Square(grid, color(0, 200, 255, 200), color(0, 200, 255, 150), color(0, 200, 255, 100), color(0, 200, 255, 50), true, true), Math.floor(random(0, 5)), Math.floor(random(0, 5)));
    if (inMenu) {
        if (mouseX > 0 && mouseX < (displayWidth - 50)/3) {  
            animationN = 0;
            inMenu = false;
        }
        else if (mouseX > (displayWidth - 50)/3 && mouseX < (displayWidth - 50)/3*2) {
            animationN = 1;
            inMenu = false;
        }
        else if (mouseX > (displayWidth - 50)/3*2 && mouseX < (displayWidth - 50)) {
            animationN = 2;
            inMenu = false;
        }
    }
}

function keyPressed() {
    if (keyCode == 32) {
        index++;
        ticktimer = 0;
    }
    if (keyCode == 70) {
        fullscreen(!fullscreen());
    }
}


function windowResized() {
    if (fullscreen()) {
        resizeCanvas(displayWidth - 50, displayHeight - yOffset);
        grid.cellSize = (displayHeight - (30 + yOffset))/10;
        grid.x = (displayWidth - displayHeight) / 2 + 15 + (yOffset/2);
    } else {
        resizeCanvas(minWidth-50, minHeight - yOffset);
        grid.cellSize = (minHeight - (30 + yOffset))/10;
        grid.x = (minWidth - minHeight) / 2 + 15 + (yOffset/2);
    }
}