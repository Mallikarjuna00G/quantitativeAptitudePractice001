/**
 * is divisible by 4?
*/
import { isDivisibleBy4 } from "./divisibility.js";

const numbers = [67920594, 618703572];

numbers.forEach(number => {
    const divider = 4;
    
    let str = "";
    if(!isDivisibleBy4(number)) {
        str = "not ";
    }
    console.log(`The number is ${str}divisible by ${divider} because the number formed by last two digits is ${str}divisible by ${divider}.`);
});