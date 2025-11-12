let btn = document.getElementById(fizzBuzzer);
let x = 0;
const mole = 6.022 * Math.pow(10, 23);

function fizz (num) {
    if ((num % 3) === 0){
        return "Fizz";
    } else {
        return "";
    }
}

function buzz (num) {
    if ((num % 5) === 0){
        return "Buzz";
    } else {
        return "";
    }
}

function fizz_buzz (unit) {
    for (let i = 1 + x; i <= (unit + x); i++) {
        if (fizz(i) || buzz(i)) {
            console.log(fizz(i) + buzz(i));
        } else {
            console.log(i);
        }
    }
    x = x +unit;
};