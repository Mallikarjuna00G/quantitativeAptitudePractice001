import { findFactorsOf, theseAreCoPrime } from "./supporting.js";

function isDivisibleBy2(number) {
    let unitDigit = number % 10;
    return unitDigit % 2 === 0;
}


function isDivisibleBy3(number) {
    /* recursive function (lambda) */
    let sumOfDigits = (number) => {
        if (number < 10) {
            return number;
        }
        return (number % 10) + sumOfDigits(Math.trunc(number / 10));
    };
    
    const sod = sumOfDigits(number);
    console.log(`>>> Sum of digits of the ${number} is ${sod}`);
    return (sod % 3 === 0);
}

function isDivisibleBy4(number) {
    let lastTwoDigits = number % 100;
    
    console.log(`>>> The number formed by last 2 digits of the ${number} is ${lastTwoDigits}`);
    return lastTwoDigits % 4 === 0;
}

function isDivisibleBy5(number) {
    return (number % 10) === 5;
}

function isDivisibleBy8(number) {
    let lastTwoDigits = number % 1000;
    
    console.log(`>>> The number formed by last 3 digits of the ${number} is ${lastTwoDigits}`);
    return lastTwoDigits % 8 === 0;
}

function isDivisibleBy9(number) {
    /* recursive function (lambda) */
    let sumOfDigits = (number) => {
        if (number < 10) {
            return number;
        }
        return (number % 10) + sumOfDigits(Math.trunc(number / 10));
    };

    const sod = sumOfDigits(number);
    console.log(`>>> Sum of digits of the ${number} is ${sod}`);
    return sod % 9 === 0;
}

function isDivisibleBy11(number) {
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

    return sumDiff % 11 === 0;
}

function isDivisibleBy(divisor, dividend) {
    const availables = [2, 3, 4, 5, 8, 9, 11];
    const correspondingFunctions = [isDivisibleBy2, isDivisibleBy3, isDivisibleBy4, isDivisibleBy5, isDivisibleBy8, isDivisibleBy9, isDivisibleBy11];
    const divisorIndex = availables.indexOf(divisor);
    if(divisorIndex !== -1) {
        return correspondingFunctions[divisorIndex](dividend);
    } else {
        return dividend % divisor === 0;
    }
}

function checkDivisibleWithoutActualDivision(divisor, dividend) {
    const factorsOfDivisor = findFactorsOf(divisor);
    for (let i = 0; i < factorsOfDivisor.length - 1; i++) {
        for (let j = 1; i < factorsOfDivisor.length; i++) {
            const x = factorsOfDivisor[i];
            const y = factorsOfDivisor[j];
            if(theseAreCoPrime(x, y)) {
                if(x * y === divisor) {
                    if(isDivisibleBy(x, dividend) && isDivisibleBy(y, dividend)) {
                        console.log(`${dividend} is divisible by each number of co-prime(${x}, ${y}).`);
                        console.log(`Therefore, ${dividend} is divisible by ${divisor}.`)
                        return true;
                    };
                }
            }
        }
    }
    return false;
}

export {
    isDivisibleBy2, 
    isDivisibleBy3, 
    isDivisibleBy4, 
    isDivisibleBy5, 
    isDivisibleBy8, 
    isDivisibleBy9, 
    isDivisibleBy11, 
    isDivisibleBy,
    checkDivisibleWithoutActualDivision
};