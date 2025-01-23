/**
 * is divisible by 11?
 */
import {isDivisibleBy11} from "./divisibility.js";

const numbers = [4832718, 5967013];

numbers.forEach(number => {
    const divider = 11;
    let str = "";
    if(!isDivisibleBy11(number)) {
        str = "not ";
    }
    console.log(`The number is ${str}divisible by ${divider} because remainder of ((sum of its odd digits) - (sum of its even digits)) divided by ${divider} is ${str}0.`);
    
});