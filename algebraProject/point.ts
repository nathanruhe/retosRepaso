
export class Point {
    constructor(private x:number, private y:number) {};

    getx():number {
        return this.x;
    }

    gety():number {
        return this.y;
    }

    setx(x:number) {
        this.x = x;
    }

    sety(y:number) {
        this.y = y;
    }

    toString():string {
        let string = "";
        string = this.x + "," + this.y
        return string
    };

    // reto 2 punto 1
    distanceToOrigin(x,y):number {
        return Math.sqrt(x*x + y*y)
    };

    // reto 2 punto 2
    calculateDistance(anotherPoint:Point):number {
        let x:number = myPoint.x - anotherPoint.x
        let y:number = myPoint.y - anotherPoint.y
        return Math.sqrt(x*x + y*y)
    };

    // reto 3
    calcularQuadrant():number {
        let cuadrado:number = -1;
        if (this.x == 0 && this.y == 0) {
            cuadrado = 0
        } else if (this.x > 0 && this.y > 0) {
            cuadrado = 1
        } else if(this.x < 0 && this.y > 0) {
            cuadrado = 2
        } else if(this.x < 0 && this.y < 0) {
            cuadrado = 3
        } else if(this.x > 0 && this.y < 0) {
            cuadrado = 4
        } 
        return cuadrado
    };

    // reto 4
    calculateNearest(points:Point[]):Point {
        let ordena = points.sort((a, b) => {
            return this.calculateDistance(a) - this.calculateDistance(b);
        });
        return ordena[0];
    };
};

let myPoint:Point = new Point(5,2);