/**
 * is divisible by 8?
 */
import {isDivisibleBy8} from "./divisibility.js";

const numbers = [98016542, 106598304];

numbers.forEach(number => {
    const divider = 8;
    let str = "";
    if(!isDivisibleBy8(number)) {
        str = "not ";
    }
    console.log(`The number is ${str}divisible by ${divider} because the number formed by last 3 digits is ${str}divisible by ${divider}.`);
    
});