class Square {
    constructor(grid, c1, c2, c3, c4, startAnimation, endAnimation) {
        this.grid = grid;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.c4 = c4;

        this.ready = !startAnimation;
        this.animationTimer = 0;
        if (startAnimation) {
            this.animationTimer = 40;
        }

        this.endAnimation = endAnimation;
        this.decayStarted = false;
    }


    destroy() {
        if (this.endAnimation) {
            this.animationTimer = 0;
            this.decayStarted = true;
        } else {
            this.grid.deletesquare(this.grid.getCoords(this)[0], this.grid.getCoords(this)[1]);
        }
    }


    draw(x, y, neighbors) {
        push();
        strokeWeight(0);

        //Animation timer
        if (this.animationTimer > 0 && this.decayStarted == false) {
            this.animationTimer--;
            if (this.animationTimer == 20) {
                this.ready = true;
            }
        }
        if (this.decayStarted) {
            this.animationTimer++;
            if (this.animationTimer == 20) {
                this.ready = false;
            }
            if (this.animationTimer == 40) {
                this.grid.deletesquare(this.grid.getCoords(this)[0], this.grid.getCoords(this)[1]);
            }
        }

        //Get x and y position in grid
        let absX = x * (this.grid.cellSize);
        let absY = y * (this.grid.cellSize);

        if (this.ready) {
            //Draw center
            fill(this.c4);
            rect(this.grid.x + absX + (this.grid.cellSize * 1/6), this.grid.y + absY + (this.grid.cellSize * 1/6), (this.grid.cellSize * 2/3), (this.grid.cellSize * 2/3));


            

            //-----------Draw side 1
            if (neighbors[1] == null || neighbors[1].ready == false) {
                fill(this.c1);
                rect(this.grid.x + absX + (this.grid.cellSize * 1 / 18), this.grid.y + absY, (this.grid.cellSize * 16 / 18), (this.grid.cellSize * 1 / 18));

                fill(this.c2);
                rect(this.grid.x + absX + (this.grid.cellSize * 1 / 6), this.grid.y + absY + (this.grid.cellSize*1/18), (this.grid.cellSize * 4 / 6), (this.grid.cellSize * 1 / 18));
                
                fill(this.c3);
                rect(this.grid.x + absX + (this.grid.cellSize * 1 / 6), this.grid.y + absY + (this.grid.cellSize*2/18), (this.grid.cellSize * 4 / 6), (this.grid.cellSize * 1 / 18));

            } else {
                //Draw in c4
                fill(this.c4);
                rect(this.grid.x + absX + (this.grid.cellSize * 1 / 6), this.grid.y + absY, (this.grid.cellSize * 2 / 3), (this.grid.cellSize * 1 / 6));
            }



            //-----------Draw side 2
            if (neighbors[3] == null || neighbors[3].ready == false) {
                fill(this.c1);
                rect(this.grid.x + absX + (this.grid.cellSize * 17 / 18), this.grid.y + absY + (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 16 / 18));
                
                fill(this.c2);
                rect(this.grid.x + absX + (this.grid.cellSize * 16 / 18), this.grid.y + absY + (this.grid.cellSize * 1 / 6), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 4 / 6));

                fill(this.c3);
                rect(this.grid.x + absX + (this.grid.cellSize * 15 / 18), this.grid.y + absY + (this.grid.cellSize * 1 / 6), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 4 / 6));
            } else {
                //Draw in c4
                fill(this.c4);
                rect(this.grid.x + absX + (this.grid.cellSize * 5 / 6), this.grid.y + absY + (this.grid.cellSize * 1/6), (this.grid.cellSize * 1 / 6), (this.grid.cellSize * 2 / 3));
            }



            //-----------Draw side 3
            if (neighbors[5] == null || neighbors[5].ready == false) {
                fill(this.c1);
                rect(this.grid.x + absX + (this.grid.cellSize * 1 / 18), this.grid.y + absY + (this.grid.cellSize * 17 / 18), (this.grid.cellSize * 16 / 18), (this.grid.cellSize * 1 / 18));
                
                fill(this.c2);
                rect(this.grid.x + absX + (this.grid.cellSize * 1 / 6), this.grid.y + absY + (this.grid.cellSize * 16 / 18), (this.grid.cellSize * 4 / 6), (this.grid.cellSize * 1 / 18));

                fill(this.c3);
                rect(this.grid.x + absX + (this.grid.cellSize * 1 / 6), this.grid.y + absY + (this.grid.cellSize * 15 / 18), (this.grid.cellSize * 4 / 6), (this.grid.cellSize * 1 / 18));
            } else {
                //Draw in c4
                fill(this.c4);
                rect(this.grid.x + absX + (this.grid.cellSize * 1 / 6), this.grid.y + absY + (this.grid.cellSize * 5 / 6), (this.grid.cellSize * 2 / 3), (this.grid.cellSize * 1 / 6));
            }



            //-----------Draw side 4
            if (neighbors[7] == null || neighbors[7].ready == false) {
                fill(this.c1);
                rect(this.grid.x + absX, this.grid.y + absY + (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 16 / 18));
                
                fill(this.c2);
                rect(this.grid.x + absX + (this.grid.cellSize * 1 / 18), this.grid.y + absY + (this.grid.cellSize * 1 / 6), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 4 / 6));

                fill(this.c3);
                rect(this.grid.x + absX + (this.grid.cellSize * 2 / 18), this.grid.y + absY + (this.grid.cellSize * 1 / 6), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 4 / 6));
            } else {
                //Draw in c4
                fill(this.c4);
                rect(this.grid.x + absX, this.grid.y + absY + (this.grid.cellSize * 1 / 6), (this.grid.cellSize * 1 / 6), (this.grid.cellSize * 2 / 3));
            }




            //-----------Draw corner 1

            //If corner 1 is fully surrounded, draw in c4
            if (neighbors[0] != null && neighbors[0].ready == true && neighbors[1] != null && neighbors[1].ready == true && neighbors[7] != null && neighbors[7].ready == true) {
                fill(this.c4);
                rect(this.grid.x + absX, this.grid.y + absY, (this.grid.cellSize * 1 / 6), (this.grid.cellSize * 1 / 6));
            } else {
                //Draw c1 corner (1/18 * 1/18)
                fill(this.c1);
                rect(this.grid.x + absX, this.grid.y + absY, (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));

                fill(this.c2);
                if (neighbors[1] == null || neighbors[1].ready == false) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 1 / 18), this.grid.y + absY + (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 2 / 18), (this.grid.cellSize * 1 / 18));
                } else {
                    rect(this.grid.x + absX + (this.grid.cellSize * 1 / 18), this.grid.y + absY, (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 2 / 18));
                }

                if (neighbors[7] == null || neighbors[7].ready == false) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 1 / 18), this.grid.y + absY + (this.grid.cellSize * 2 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));
                } else {
                    rect(this.grid.x + absX, this.grid.y + absY + (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));
                }

                fill(this.c3);
                if (neighbors[1] == null || neighbors[1].ready == false) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 2 / 18), this.grid.y + absY + (this.grid.cellSize * 2 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));
                } else {
                    rect(this.grid.x + absX + (this.grid.cellSize * 2 / 18), this.grid.y + absY, (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 3 / 18));
                }

                if (neighbors[7] != null && neighbors[7].ready == true) {
                    rect(this.grid.x + absX, this.grid.y + absY + (this.grid.cellSize * 2 / 18), (this.grid.cellSize * 2 / 18), (this.grid.cellSize * 1 / 18));
                }
            }



            //-----------Draw corner 2

            //If corner 2 is fully surrounded, draw in c4
            if (neighbors[1] != null && neighbors[1].ready == true && neighbors[2] != null && neighbors[2].ready == true && neighbors[3] != null && neighbors[3].ready == true) {
                fill(this.c4);
                rect(this.grid.x + absX + (this.grid.cellSize * 5 / 6), this.grid.y + absY, (this.grid.cellSize * 1 / 6), (this.grid.cellSize * 1 / 6));
            } else {
                //Draw c1 corner (1/18 * 1/18)
                fill(this.c1);
                rect(this.grid.x + absX + (this.grid.cellSize * 17 / 18), this.grid.y + absY, (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));

                fill(this.c2);
                if (neighbors[3] == null || neighbors[3].ready == false) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 16 / 18), this.grid.y + absY + (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 2 / 18));
                } else {
                    rect(this.grid.x + absX + (this.grid.cellSize * 16 / 18), this.grid.y + absY + (this.grid.cellSize * 1/18), (this.grid.cellSize * 2 / 18), (this.grid.cellSize * 1 / 18));
                }

                if (neighbors[1] == null || neighbors[1].ready == false) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 15 / 18), this.grid.y + absY + (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));
                } else {
                    rect(this.grid.x + absX + (this.grid.cellSize * 16 / 18), this.grid.y + absY, (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));
                }

                fill(this.c3);
                if (neighbors[3] == null || neighbors[3].ready == false) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 15 / 18), this.grid.y + absY + (this.grid.cellSize * 2 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));
                } else {
                    rect(this.grid.x + absX + (this.grid.cellSize * 15 / 18), this.grid.y + absY + (this.grid.cellSize * 2 / 18), (this.grid.cellSize * 3 / 18), (this.grid.cellSize * 1 / 18));
                }

                if (neighbors[1] != null && neighbors[1].ready == true) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 15 / 18), this.grid.y + absY, (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 2 / 18));
                }
            }



            //-----------Draw corner 3

            //If corner 3 is fully surrounded, draw in c4
            if (neighbors[3] != null && neighbors[3].ready == true && neighbors[4] != null && neighbors[4].ready == true && neighbors[5] != null && neighbors[5].ready == true) {
                fill(this.c4);
                rect(this.grid.x + absX + (this.grid.cellSize * 5 / 6), this.grid.y + absY + (this.grid.cellSize * 5 / 6), (this.grid.cellSize * 1 / 6), (this.grid.cellSize * 1 / 6));
            } else {
                //Draw c1 corner (1/18 * 1/18)
                fill(this.c1);
                rect(this.grid.x + absX + (this.grid.cellSize * 17 / 18), this.grid.y + absY + (this.grid.cellSize * 17 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));

                fill(this.c2);
                if (neighbors[5] == null || neighbors[5].ready == false) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 15 / 18), this.grid.y + absY + (this.grid.cellSize * 16 / 18), (this.grid.cellSize * 2 / 18), (this.grid.cellSize * 1 / 18));
                } else {
                    rect(this.grid.x + absX + (this.grid.cellSize * 16 / 18), this.grid.y + absY + (this.grid.cellSize * 16 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 2 / 18));
                }

                if (neighbors[3] == null || neighbors[3].ready == false) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 16 / 18), this.grid.y + absY + (this.grid.cellSize * 15 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));
                } else {
                    rect(this.grid.x + absX + (this.grid.cellSize * 17 / 18), this.grid.y + absY + (this.grid.cellSize * 16 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));
                }

                fill(this.c3);
                if (neighbors[5] == null || neighbors[5].ready == false) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 15 / 18), this.grid.y + absY + (this.grid.cellSize * 15 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));
                } else {
                    rect(this.grid.x + absX + (this.grid.cellSize * 15 / 18), this.grid.y + absY + (this.grid.cellSize * 15 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 3 / 18));
                }

                if (neighbors[3] != null && neighbors[3].ready == true) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 16 / 18), this.grid.y + absY + (this.grid.cellSize * 15 / 18), (this.grid.cellSize * 2 / 18), (this.grid.cellSize * 1 / 18));
                }
            }




            //----------Draw corner 4

            //If corner 4 is fully surrounded, draw in c1
            if (neighbors[5] != null && neighbors[5].ready == true && neighbors[6] != null && neighbors[6].ready == true && neighbors[7] != null && neighbors[7].ready == true) {
                fill(this.c4);
                rect(this.grid.x + absX, this.grid.y + absY + (this.grid.cellSize * 5/6), (this.grid.cellSize * 1 / 6), (this.grid.cellSize * 1 / 6));
            } else {
                //Draw c1 corner (1/18 * 1/18)
                fill(this.c1);
                rect(this.grid.x + absX, this.grid.y + absY + (this.grid.cellSize * 17 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));

                fill(this.c2);
                if (neighbors[7] == null || neighbors[7].ready == false) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 1 / 18), this.grid.y + absY + (this.grid.cellSize * 15 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 2 / 18));
                } else {
                    rect(this.grid.x + absX, this.grid.y + absY + (this.grid.cellSize * 16 / 18), (this.grid.cellSize * 2 / 18), (this.grid.cellSize * 1 / 18));
                }

                if (neighbors[5] == null || neighbors[5].ready == false) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 2 / 18), this.grid.y + absY + (this.grid.cellSize * 16 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));
                } else {
                    rect(this.grid.x + absX + (this.grid.cellSize * 1 / 18), this.grid.y + absY + (this.grid.cellSize * 17 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));
                }

                fill(this.c3);
                if (neighbors[7] == null || neighbors[7].ready == false) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 2 / 18), this.grid.y + absY + (this.grid.cellSize * 15 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 1 / 18));
                } else {
                    rect(this.grid.x + absX, this.grid.y + absY + (this.grid.cellSize * 15 / 18), (this.grid.cellSize * 3 / 18), (this.grid.cellSize * 1 / 18));
                }

                if (neighbors[5] != null && neighbors[5].ready == true) {
                    rect(this.grid.x + absX + (this.grid.cellSize * 2 / 18), this.grid.y + absY + (this.grid.cellSize * 16 / 18), (this.grid.cellSize * 1 / 18), (this.grid.cellSize * 2 / 18));
                }
            }
        
        
        } else {
            //Do animation depending on timer
            let timer = this.animationTimer - 20;
            if (timer < 0) {
                timer = 0;
            }
            
            //Draw center
            fill(this.c4);
            rect((this.grid.x + absX + ((this.grid.cellSize * 1 / 6) * (20-timer)/20))  +  (this.grid.cellSize * timer/40), (this.grid.y + absY + ((this.grid.cellSize * 1 / 6) * (20-timer)/20))  +  (this.grid.cellSize * timer/40), (this.grid.cellSize * 2 / 3) * (20-timer)/20, (this.grid.cellSize * 2 / 3) * (20-timer)/20);
            
            //Draw all edges (corners included cause we wanna optimize this shit)
            fill(this.c1);
            rect((this.grid.x + absX)  +  (this.grid.cellSize * timer/40), (this.grid.y + absY)  +  (this.grid.cellSize * timer/40), (this.grid.cellSize * 1/18) * (20-timer)/20, (this.grid.cellSize) * (20-timer)/20);
            rect((this.grid.x + absX) + ((this.grid.cellSize * 17 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.y + absY)  +  (this.grid.cellSize * timer/40), (this.grid.cellSize * 1/18) * (20-timer)/20, (this.grid.cellSize) * (20-timer)/20);
            rect((this.grid.x + absX) + ((this.grid.cellSize * 1 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.y + absY)  +  (this.grid.cellSize * timer/40), (this.grid.cellSize * 16/18) * (20-timer)/20, (this.grid.cellSize * 1/18) * (20-timer)/20);
            rect((this.grid.x + absX) + ((this.grid.cellSize * 1 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.y + absY) + ((this.grid.cellSize * 17 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.cellSize * 16/18) * (20-timer)/20, (this.grid.cellSize * 1/18) * (20-timer)/20);
            
            fill(this.c2);
            rect((this.grid.x + absX) + ((this.grid.cellSize * 1 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.y + absY) + ((this.grid.cellSize * 1 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.cellSize * 1/18) * (20-timer)/20, (this.grid.cellSize * 16/18) * (20-timer)/20);
            rect((this.grid.x + absX) + ((this.grid.cellSize * 16 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.y + absY) + ((this.grid.cellSize * 1 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.cellSize * 1/18) * (20-timer)/20, (this.grid.cellSize * 16/18) * (20-timer)/20);
            rect((this.grid.x + absX) + ((this.grid.cellSize * 2 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.y + absY) + ((this.grid.cellSize * 1 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.cellSize * 14/18) * (20-timer)/20, (this.grid.cellSize * 1/18) * (20-timer)/20);
            rect((this.grid.x + absX) + ((this.grid.cellSize * 2 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.y + absY) + ((this.grid.cellSize * 16 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.cellSize * 14/18) * (20-timer)/20, (this.grid.cellSize * 1/18) * (20-timer)/20);
            
            fill(this.c3);
            rect((this.grid.x + absX) + ((this.grid.cellSize * 2 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.y + absY) + ((this.grid.cellSize * 2 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.cellSize * 1/18) * (20-timer)/20, (this.grid.cellSize * 14/18) * (20-timer)/20);
            rect((this.grid.x + absX) + ((this.grid.cellSize * 15 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.y + absY) + ((this.grid.cellSize * 2 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.cellSize * 1/18) * (20-timer)/20, (this.grid.cellSize * 14/18) * (20-timer)/20);
            rect((this.grid.x + absX) + ((this.grid.cellSize * 3 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.y + absY) + ((this.grid.cellSize * 2 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.cellSize * 12/18) * (20-timer)/20, (this.grid.cellSize * 1/18) * (20-timer)/20);
            rect((this.grid.x + absX) + ((this.grid.cellSize * 3 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.y + absY) + ((this.grid.cellSize * 15 / 18) * (20-timer)/20)  +  (this.grid.cellSize * timer/40), (this.grid.cellSize * 12/18) * (20-timer)/20, (this.grid.cellSize * 1/18) * (20-timer)/20);
        }
        if  (this.animationTimer < 20 && this.animationTimer > 0) {
            //White square with gamma depending on timer
            let timer = this.animationTimer;
            fill(255, 255, 255, 200 * timer/20);
            rect(this.grid.x + absX, this.grid.y + absY, this.grid.cellSize, this.grid.cellSize);
        }



        pop();
    }
}