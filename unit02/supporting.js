function findFactorsOf(number) {
    const factors = [];
    for (let i = 2; i <= Math.ceil(number / 2); i++) {
        if(number % i === 0) {
            factors.push(i);
        }
    }
    factors.push(number);
    return factors;
}

function theseAreCoPrime(a, b) {
    const aFactors = findFactorsOf(a);
    const bFactors = findFactorsOf(b);

    for (const a of aFactors) {
        if(bFactors.includes(a)) {
            return false;
        }
    }
    return true;
}

export {
    findFactorsOf,
    theseAreCoPrime
};