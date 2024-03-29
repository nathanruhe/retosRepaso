
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
        let x:number = this.x - anotherPoint.x
        let y:number = this.y - anotherPoint.y
        return Math.sqrt(x*x + y*y)
    };
};