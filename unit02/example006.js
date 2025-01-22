/**
 * is divisible by 3?
 */

const numbers = [541326, 5967013];

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
    if(sod % 3 !== 0) {
        str = "not ";
    }
    console.log(`The number is ${str}divisible by 3 because sum of its digits is ${str}divisible by 3.`);

})