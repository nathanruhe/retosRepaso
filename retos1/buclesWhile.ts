// punto 2
function hasEven(myNums:number[]) {
    let i = 0
    while (i < myNums.length) {
        if (myNums[i] % 2 == 0) {
            return true;
        }
        i++
    };
};
let existe = hasEven([1,3,5,7,8,9,11]);
console.log(existe);



// punto 3
function startWithM(myNames:string[]) {
    let i = 0;
    while (i < myNames.length) {
        if (myNames[i][0] !== "M") {
            return false;
        }
        i++
    };
    return true
};
let nombres = startWithM(["Mario", "Maria", "David"]);
console.log(nombres);