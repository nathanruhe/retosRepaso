// punto 2
function hasEven(myNums:number[]) {
    let i = 0
    while (i < myNums.length) {
        let letra = myNums.some((elem) => elem % 2 == 0)
        return letra
        i++
    };
};
let existe = hasEven([1,3,5,7,8,9,11]);
console.log(existe);



// punto 3
function startWithM(myNames:string[]) {
    let i = 0;
    while (i < myNames.length) {
        let letra = myNames.every((elem) => elem[i][0] == "M")
        return letra
        i++
    };
};
let nombres = startWithM(["Mario", "Maria", "Manolo"]);
console.log(nombres);