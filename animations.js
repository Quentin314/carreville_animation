function animation1(index, time) {
    switch (index) {
        case 1:
            switch (time) {
                case 0:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 1, 1);
                    break;
                case 10:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 2, 1);
                    break;
                case 20:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 3, 1);
                    break;
                case 30:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 4, 1);
                    break;
                case 40:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 5, 1);
                    break;
                case 50:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 1, 2);
                    break;
                case 60:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 2, 2);
                    break;
                case 70:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 3, 2);
                    break;
                case 80:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 4, 2);
                    break;
                case 90:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 5, 2);
                    break;
            }
            break;




        case 2:
            switch (time) {
                case 0:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 6, 1);
                    break;
                case 10:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 6, 2);
                    break;
            }
            break;
        

        
        case 3:
            switch (time) {
                case 0:
                    grid.squares[6][1].destroy();
                    break;
                case 10:
                    grid.squares[6][2].destroy();
                    break;
                case 70:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 1, 3);
                    break;
                case 80:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 2, 3);
                    break;
            }
            break;
        
        
        
        case 4:
            switch (time) {
                case 0:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 3, 3);
                    break;
                case 10:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 4, 3);
                    break;
                case 20:
                    grid.addsquare(new Square(grid, C1, C2, C3, C4, true, true), 5, 3);
                    break;
            }
            break;
        



        default:
            break;
    }
}