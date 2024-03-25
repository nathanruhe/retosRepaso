// punto 2
function zodiac (day:number, month:number) {
    if ((day >= 22 && day <= 31 && month == 12) || (day >= 1 && day <= 19 && month == 1)) {
        return `tu signo del zodiaco es: Capricornio`;
    } else if ((day >= 20 && day <= 31 && month == 1) || (day >= 1 && day <= 18 && month == 2)) {
        return `tu signo del zodiaco es: Acuario`;
    } else if ((day >= 19 && day <= 29 && month == 2) || (day >= 1 && day <= 20 && month == 3)) {
        return `tu signo del zodiaco es: Piscis`;
    } else if ((day >= 21 && day <= 31 && month == 3) || (day >= 1 && day <= 19 && month == 4)) {
        return `tu signo del zodiaco es: Aries`;
    } else if ((day >= 20 && day <= 30 && month == 4) || (day >= 1 && day <= 20 && month == 5)) {
        return `tu signo del zodiaco es: Tauro`;
    } else if ((day >= 21 && day <= 31 && month == 5) || (day >= 1 && day <= 20 && month == 6)) {
        return `tu signo del zodiaco es: Geminis`;
    } else if ((day >= 21 && day <= 30 && month == 6) || (day >= 1 && day <= 22 && month == 7)) {
        return `tu signo del zodiaco es: Cancer`;
    } else if ((day >= 23 && day <= 31 && month == 7) || (day >= 1 && day <= 22 && month == 8)) {
        return `tu signo del zodiaco es: Leo`;
    } else if ((day >= 23 && day <= 31 && month == 8) || (day >= 1 && day <= 22 && month == 9)) {
        return `tu signo del zodiaco es: Virgo`;
    } else if ((day >= 23 && day <= 30 && month == 9) || (day >= 1 && day <= 22 && month == 10)) {
        return `tu signo del zodiaco es: Libra`;
    } else if ((day >= 23 && day <= 31 && month == 10) || (day >= 1 && day <= 21 && month == 11)) {
        return `tu signo del zodiaco es: Escorpio`;
    } else if ((day >= 22 && day <= 30 && month == 11) || (day >= 1 && day <= 21 && month == 12)) {
        return `tu signo del zodiaco es: Sagitario`;
    }; 
};
console.log(zodiac(27,5));



// punto 3
let europa:string[] = ["España", "Francia", "Alemania", "Portugal", "Italia"]
let africa:string[] = ["Marruecos", "Senegal", "Camerun", "Etiopia", "Tanzania"]
let asia:string[] = ["Malasia", "Vietnam", "India", "Japon", "Jordania"]
let americaSur:string[] = ["Colombia", "Argentina", "Venezuela", "Brasil", "Chile"]

function continent(country:string) {
    if (europa.some(element => element == country)) {
        console.log("Estás en Europa");
    } else if (africa.some(element => element == country)) {
        console.log("Estás en Africa");
    } else if (asia.some(element => element == country)) {
        console.log("Estás en Asia");
    } else if (americaSur.some(element => element == country)) {
        console.log("Estás en America del Sur");
    };
};
console.log(continent("Japon"));



// punto 4
function isEven(number:number) {
    if(number % 2 == 0) {
        console.log("el numero es par");
    } else {
        console.log("el numero es impar");
    };
};
console.log(isEven(5));
