function animation1(index, time) {
    switch (index) {
        case 1:
            switch (time) {
                case 0:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 1, 1);
                    break;
                case 10:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 2, 1);
                    break;
                case 20:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 3, 1);
                    break;
                case 30:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 4, 1);
                    break;
                case 40:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 5, 1);
                    break;
                case 50:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 1, 2);
                    break;
                case 60:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 2, 2);
                    break;
                case 70:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 3, 2);
                    break;
                case 80:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 4, 2);
                    break;
                case 90:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 5, 2);
                    break;
            }
            break;




        case 2:
            switch (time) {
                case 0:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 6, 1);
                    break;
                case 10:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 6, 2);
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
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 1, 3);
                    break;
                case 80:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 2, 3);
                    break;
                case 120:
                    grid.addElement(new Line(grid, 6, 1, 7, 1, G1, G2, true, true));
                    grid.addElement(new Line(grid, 6, 3, 7, 3, G1, G2, true, true));
                    grid.addElement(new Line(grid, 7, 1, 7, 3, G1, G2, true, true));
                    break;
                case 160:
                    grid.addElement(new Line(grid, 6, 1, 6, 3, R1, R2, true, true));
                    break;
                case 200:
                    grid.addElement(new Line(grid, 1, 3, 3, 3, G1, G2, true, true));
                    break;
                case 240:
                    grid.addElement(new Line(grid, 1, 3, 1, 4, R1, R2, true, true));
                    grid.addElement(new Line(grid, 3, 3, 3, 4, R1, R2, true, true));
                    grid.addElement(new Line(grid, 1, 4, 3, 4, R1, R2, true, true));
                    break;
                case 300:
                    grid.addElement(new Text(grid, 4.3, 5.5, "+0", 100, GREY, true, true));
            }
            break;
        
        
        case 4:
            switch (time) {
                case 0:
                    grid.elements[8].destroy();
                    grid.elements[7].destroy();
                    grid.elements[6].destroy();
                    grid.elements[5].destroy();
                    grid.elements[4].destroy();
                    grid.elements[3].destroy();
                    grid.elements[2].destroy();
                    grid.elements[1].destroy();
                    grid.elements[0].destroy();
                    break;
                case 50:
                    grid.addElement(new Line(grid, 1, 1, 6, 1, Y1, Y2, true, true));
                    grid.addElement(new Line(grid, 1, 4, 6, 4, Y1, Y2, true, true));
                    grid.addElement(new Line(grid, 1, 1, 1, 4, Y1, Y2, true, true));
                    grid.addElement(new Line(grid, 6, 1, 6, 4, Y1, Y2, true, true));
                    break;
            }
            break;
        
        case 5:
            switch (time) {
                case 0:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 3, 3);
                    break;
                case 10:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 4, 3);
                    break;
                case 20:
                    grid.addSquare(new Square(grid, B1, B2, B3, B4, true, true), 5, 3);
                    break;
            }
            break;
        



        default:
            break;
    }
}