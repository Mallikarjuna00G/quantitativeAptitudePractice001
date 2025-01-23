/**
 * 
 */

import { theseAreCoPrime } from "./supporting.js";

// console.log(theseAreCoPrime(3, 8));
// console.log(theseAreCoPrime(6, 4));
// console.log(theseAreCoPrime(7, 9));
// console.log(theseAreCoPrime(11, 8));

const num1 = 4;
const num2 = 6;
const product = num1 * num2;

console.log('Let x be given number.');
console.log(`Assume x is divisible by ${num1}.`);
console.log(`Assume x is divisible by ${num2}.`);

if(theseAreCoPrime(num1, num2)) {
    console.log(`${num1} and ${num2} are co-prime.`);
    console.log(`Therefore, x is divisible by ${product}`);
} else {
    console.log(`But, ${num1} and ${num2} are not co-prime.`);
    console.log(`Therefore, x is not divisible by ${product}.`);
}