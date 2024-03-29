
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
};

