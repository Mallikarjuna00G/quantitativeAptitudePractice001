import { isDivisibleBy2 } from "./divisibility.js";

const numbers = [3567516, 9130525, 7870832, 1371594];

numbers.forEach(number => {
    if(isDivisibleBy2(number)) {
        console.log(`${number} is divisible by 2 because unit digit of the given number is divisible by 2.`);
    } else {
        console.log(`${number} is not divisible by 2 because unit digit of the given number is not divisible by 2.`);
    }
});