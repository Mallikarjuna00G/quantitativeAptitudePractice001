/**
 * is divisible by 8?
 */

const numbers = [98016542, 106598304];

const divider = 8;

numbers.forEach(number => {
    let lastTwoDigits = number % 1000;

    console.log(`>>> The number formed by last 3 digits of the ${number} is ${lastTwoDigits}`);
    let str = "";
    if(lastTwoDigits % divider !== 0) {
        str = "not ";
    }
    console.log(`The number is ${str}divisible by ${divider} because the number formed by last 3 digits is ${str}divisible by ${divider}.`);

})