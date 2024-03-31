import { Triangle } from "./triangle";
import { Point } from "./point";

let point1:Point = new Point(3,1);
let point2:Point = new Point(6,6);
let point3:Point = new Point(8,3);
let myTriangle:Triangle = new Triangle (point1, point2, point3);


let resultado = myTriangle.calculateLengthSides()
console.log(resultado);
