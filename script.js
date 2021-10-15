let nit = "79886653"; // Carry out the necessary validations on the captured number. CAPM.
const base = [3,7,13,17,19,23,29,37,41,43,47,53,59,67,71];
const DIVIDER = 11;
let checkDigit;
let accumulator = 0;

let reverseString = (str) => str.split("").reverse();


let arrayString = reverseString(nit);

for (let index = 0; index < arrayString.length; index++) {
    let calculation = Number(arrayString[index]) * base[index]; 
    accumulator += calculation;   
}
 
let calculationBasis = accumulator % DIVIDER;
checkDigit = calculationBasis > 1 ? DIVIDER - calculationBasis: calculationBasis;

console.log(checkDigit);