/**
 * is divisible by 4?
 */

const numbers = [67920594, 618703572];

const divider = 4;

numbers.forEach(number => {
    let lastTwoDigits = number % 100;

    console.log(`>>> The number formed by last 2 digits of the ${number} is ${lastTwoDigits}`);
    let str = "";
    if(lastTwoDigits % divider !== 0) {
        str = "not ";
    }
    console.log(`The number is ${str}divisible by ${divider} because the number formed by last two digits is ${str}divisible by ${divider}.`);

})