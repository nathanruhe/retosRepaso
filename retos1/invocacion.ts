import { isEven } from "./condicionales";
import { add } from "./buclesFor";


let array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
let array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3 = ["Venezuela", "Veneno", "Voltaje"];


function ParOImpar (param:string[]):void {
    let resul = add(param);
    isEven(resul);
};
console.log(ParOImpar(array1));
console.log(ParOImpar(array2));
console.log(ParOImpar(array3));
