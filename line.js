class Line {
    constructor(grid, x1, y1, x2, y2, c1, c2, startAnimation, endAnimation) {
        this.grid = grid;

        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;

        this.c1 = c1;
        this.c2 = c2;

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


        let x1 = this.grid.x + this.x1*this.grid.cellSize;
        let y1 = this.grid.y + this.y1*this.grid.cellSize;
        let x2 = this.grid.x + this.x2*this.grid.cellSize;
        let y2 = this.grid.y + this.y2*this.grid.cellSize;

        fill(this.c2.levels[0], this.c2.levels[1], this.c2.levels[2], this.c2.levels[3] * ((20-this.animationTimer)/20));
        console.log(this.c2.levels[0], this.c2.levels[1], this.c2.levels[2], this.c2.levels[3] * ((20-this.animationTimer)/20));
        rect(x1 - (this.grid.cellSize * 1/16), y1 - (this.grid.cellSize * 1/16), x2 - x1 + (this.grid.cellSize * 1/8), y2 - y1 + (this.grid.cellSize * 1/8));

        fill(this.c2.levels[0], this.c2.levels[1], this.c2.levels[2], this.c2.levels[3] * ((20-this.animationTimer)/20));
        rect(x1 - (this.grid.cellSize * 1/24), y1 - (this.grid.cellSize * 1/24), x2 - x1 + (this.grid.cellSize * 1/12), y2 - y1 + (this.grid.cellSize * 1/12));

        pop();
    }
}