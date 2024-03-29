// punto 2
function evenNumbers(num:number):void {
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 1) {
            console.log(i);
        };
    };
};
evenNumbers(15);



// punto 3
function myRevert(myArr:number[]):number[] {
    let revertir:number[] = [];
    for (let i = myArr.length; i > 0; i--) {
        revertir.push(i);
    };
    return revertir;
};
let resultado = myRevert([1,2,3,4,5]);
console.log(resultado);



// punto 4
let arcoiris:string[] = ["rojo", "naranja", "amarillo", "verde", "cian", "azul", "violeta"];

function isRainbow(colors:string[]):void {
    for (let element of colors) {
        if (arcoiris.some(valor => valor == element)) {
            console.log(`el color "${element}" está en el arcoiris`)
        } else {
            console.log(`el color "${element}" no está`)
        };
    };
};
isRainbow(["verde", "negro", "blanco", "amarillo", "marron"]);



// punto 5
export function add(myWords:string[]):number {
    let suma:number = 0;
    for (let element of myWords) {
        suma += element.length;
    };
    return suma;
};
let resul = add(["hola", "que", "tal"]);
console.log(resul);
