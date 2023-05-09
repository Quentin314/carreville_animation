class Text {
    constructor(grid,  x, y, text, textSize, color, startAnimation, endAnimation) {
        this.grid = grid;
        this.x = x;
        this.y = y;
        this.text = text;
        this.textSize = textSize;
        this.color = color;

        this.animationTimer = 0;
        if (startAnimation) {
            this.animationTimer = 20;
        }

        this.endAnimation = endAnimation;
        this.decayStarted = false;
    }

    destroy() {
        if (this.endAnimation) {
            this.animationTimer = 0;
            this.decayStarted = true;
        } else {
            this.grid.deleteElement(this);
        }
    }

    draw() {
        push();

        strokeWeight(0);

        //Animation timer
        if (this.animationTimer > 0 && this.decayStarted == false) {
            this.animationTimer--;
        }
        if (this.decayStarted) {
            this.animationTimer++;
            if (this.animationTimer == 20) {
                this.grid.deleteElement(this);
            }
        }


        fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.color.levels[3] * ((20-this.animationTimer)/20));
        textSize(this.textSize);
        textFont(font);

        text(this.text, this.grid.x + this.x*this.grid.cellSize, this.grid.y + this.y*this.grid.cellSize);


        pop();
    }
}