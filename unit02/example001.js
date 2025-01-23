/**
 * Unit digit in the product
 */

const numbers = [256, 27, 159, 182];

let product = 1;

numbers.forEach(number => {
    product *= number % 10;
})

console.log(`Unit's digit in the product of ${numbers} is ${product % 10}.`);