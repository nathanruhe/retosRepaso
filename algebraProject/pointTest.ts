import { Point } from "./point";

let myPoint:Point = new Point(5,2);

console.log(myPoint.getx());
myPoint.setx(10)
console.log(myPoint.getx());

console.log(myPoint.gety());
myPoint.sety(20)
console.log(myPoint.gety());

console.log(myPoint.toString());

// reto 2 punto 1
console.log(myPoint.distanceToOrigin(5,2));

// reto 2 punto 2
let otroPoint:Point = new Point(7,5);
console.log(myPoint.calculateDistance(otroPoint));

// reto 3
console.log(myPoint.calcularQuadrant());

// reto 4
let point1:Point = new Point(3,6);
let point2:Point = new Point(7,8);
console.log(myPoint.calculateNearest([point1, point2]));