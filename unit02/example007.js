/**
 * is divisible by 9?
 */

const numbers = [19725462, 36870521];

const divider = 9;

numbers.forEach(number => {

    /* recursive function (lambda) */
    let sumOfDigits = (number) => {
        if (number < 10) {
            return number;
        }
        return (number % 10) + sumOfDigits(Math.trunc(number / 10));
    };

    const sod = sumOfDigits(number);
    console.log(`>>> Sum of digits of the ${number} is ${sod}`);
    let str = "";
    if(sod % divider !== 0) {
        str = "not ";
    }
    console.log(`The number is ${str}divisible by ${divider} because sum of its digits is ${str}divisible by ${divider}.`);

})