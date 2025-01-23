/**
 * is divisible by 3?
 */
import { isDivisibleBy3 } from "./divisibility.js";

const numbers = [541326, 5967013];

numbers.forEach(number => {
    let str = "";
    if(!isDivisibleBy3(number)) {
        str = "not ";
    }
    console.log(`The number is ${str}divisible by 3 because sum of its digits is ${str}divisible by 3.`);

});