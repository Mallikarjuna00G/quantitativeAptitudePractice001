/**
 * Prime number or not?
 * Hint: k > sqrt(p)
 */

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function primeOrNot(number) {
    let k = Math.ceil(Math.sqrt(number));
    let i = 0;

    const checkWithExisting = () => {
        while (k > primeNumbers[i]) {
            if(number % primeNumbers[i] === 0) {
                return false;
            }
            i++;
        }
        return true;
    };
    if(checkWithExisting()) {
        if (i < primeNumbers.length) {
            // It is a prime number
            return true;
        } else {
            // need to find more prime numbers
            let j = primeNumbers[i -1] + 1;
            while(j < k + 2) {
                primeOrNot(j) ? primeNumbers.push(j) : undefined;
            }
            return checkWithExisting() && i < primeNumbers.length;
        }
    } else {
        return false;
    }
}

console.log("primeOrNot: ");
console.log("191: " + primeOrNot(191));
console.log("241: " + primeOrNot(241));
console.log("337: " + primeOrNot(337));
console.log("391: " + primeOrNot(391));