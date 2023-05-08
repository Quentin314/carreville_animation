class Grid {
    constructor(x, y, cellSize, rows, cols, background, strokeColor, strokeWeight) {
        this.x = x;
        this.y = y;
        this.cellSize = cellSize;
        this.rows = rows;
        this.cols = cols;
        this.background = background;  
        this.strokeColor = strokeColor;
        this.strokeWeight = strokeWeight;

        this.squares = [];
        for (let x=0; x < this.cols; x++) {
            this.squares.push([]);
            for (let y=0; y < this.rows; y++) {
                this.squares[x].push(null);
            }
        }
    }


    addsquare(square, x, y) {
        this.squares[x][y] = square;
    }

    deletesquare(x, y) {
        console.log("Deleting square at " + x + ", " + y)
        this.squares[x][y] = null;
    }

    getCoords(square) {
        for (let x=0; x < this.cols; x++) {
            for (let y=0; y < this.rows; y++) {
                if (this.squares[x][y] == square) return [x, y];
            }
        }
        return null;
    }


    draw() {
        push();
        strokeWeight(0);

        //Background
        fill(this.strokeColor);
        rect(this.x, this.y, this.cellSize*this.cols, this.cellSize*this.rows);

        //Draw grid
        fill (this.background)
        for (let x=0; x < this.cols; x++) {
            for (let y=0; y < this.rows; y++) {
                rect(this.x + x*this.cellSize + this.strokeWeight, this.y + y*this.cellSize + this.strokeWeight, this.cellSize - 2*this.strokeWeight, this.cellSize - 2*this.strokeWeight);
            }
        }

        pop();

        //Draw squares
        for (let x=0; x < this.cols; x++) {
            for (let y=0; y < this.rows; y++) {
                if (this.squares[x][y] != null) {
                    //Get 8 neighbors
                    let neighbors = [];
                    if (x > 0 && y > 0) {
                        neighbors.push(this.squares[x-1][y-1]);
                    } else neighbors.push(null);
                    if (y > 0) {
                        neighbors.push(this.squares[x][y-1]);
                    } else neighbors.push(null);
                    if (x < this.cols-1 && y > 0) {
                        neighbors.push(this.squares[x+1][y-1]);
                    } else neighbors.push(null);
                    if (x < this.cols-1) {
                        neighbors.push(this.squares[x+1][y]);
                    } else neighbors.push(null);
                    if (x < this.cols-1 && y < this.rows-1) {
                        neighbors.push(this.squares[x+1][y+1]);
                    } else neighbors.push(null);
                    if (y < this.rows-1) {
                        neighbors.push(this.squares[x][y+1]);
                    } else neighbors.push(null);
                    if (x > 0 && y < this.rows-1) {
                        neighbors.push(this.squares[x-1][y+1]);
                    } else neighbors.push(null);
                    if (x > 0) {
                        neighbors.push(this.squares[x-1][y]);
                    } else neighbors.push(null);

                    this.squares[x][y].draw(x, y, neighbors);
                }
            }
        }
    }
}