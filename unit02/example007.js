/**
 * is divisible by 9?
 */
import { isDivisibleBy9 } from "./divisibility.js";

const numbers = [19725462, 36870521];


numbers.forEach(number => {
    const divider = 9;
    let str = "";
    if(!isDivisibleBy9(number)) {
        str = "not ";
    }
    console.log(`The number is ${str}divisible by ${divider} because sum of its digits is ${str}divisible by ${divider}.`);
});