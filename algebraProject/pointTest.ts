import { Point } from "./point";

let myPoint:Point = new Point(5,2);

console.log(myPoint.getx());
myPoint.setx(10)
console.log(myPoint.getx());

console.log(myPoint.gety());
myPoint.sety(20)
console.log(myPoint.gety());

console.log(myPoint.toString());