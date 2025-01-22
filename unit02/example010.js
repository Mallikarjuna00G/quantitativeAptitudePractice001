/**
 * is divisible by 11?
 */

const numbers = [4832718, 5967013];

const divider = 11;

numbers.forEach(number => {
    let digitSums = [0, 0];
    let i = 0;
    /* recursive function (lambda) */
    let sumOfDigits = (number) => {
        digitSums[i] += number % 10;
        i++;
        i %= 2;
        if (number < 10) {
            return;
        }
        sumOfDigits(Math.trunc(number / 10));
    };

    sumOfDigits(number);
    console.log(`>>> Sum of odd digits of the ${number} is ${digitSums[0]}`);
    console.log(`>>> Sum of even digits of the ${number} is ${digitSums[1]}`);
    let sumDiff = digitSums[0] - digitSums[1];
    console.log(`And the difference is ${sumDiff}`);
    let str = "";
    if(sumDiff % divider !== 0) {
        str = "not ";
    }
    console.log(`The number is ${str}divisible by ${divider} because remainder of ((sum of its odd digits) - (sum of its even digits)) divided by ${divider} is ${str}0.`);

})