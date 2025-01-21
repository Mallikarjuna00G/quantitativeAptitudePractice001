const unitDigits = [
    {
        digit: 0,
        cycleDigits: [0],
    },
    {
        digit: 1,
        cycleDigits: [1],
    },
    {
        digit: 2,
        cycleDigits: [2, 4, 8, 6], // Corrected cycle
    },
    {
        digit: 3,
        cycleDigits: [3, 9, 7, 1],
    },
    {
        digit: 4,
        cycleDigits: [4, 6],
    },
    {
        digit: 5,
        cycleDigits: [5],
    },
    {
        digit: 6,
        cycleDigits: [6],
    },
    {
        digit: 7,
        cycleDigits: [7, 9, 3, 1],
    },
    {
        digit: 8,
        cycleDigits: [8, 4, 2, 6],
    },
    {
        digit: 9,
        cycleDigits: [9, 1],
    }
];

// Calculate cycle length AFTER defining the array
unitDigits.forEach(obj => {
    obj.cycleLength = obj.cycleDigits.length;
});


console.log(unitDigits);

let finalUnitDigit = 1;

const bases = [3, 6, 7];
const powers = [67, 39, 53];

if(bases.includes(0)) {
    finalUnitDigit = 0;
} else {
    bases.forEach((baseValue, i) => {
        if([0, 1, 5, 6].includes(baseValue)) {
            finalUnitDigit *= baseValue;
        } else {
            finalUnitDigit *= unitDigits[baseValue].cycleDigits[powers[i] % unitDigits[baseValue].cycleLength - 1];
        }
        console.log(baseValue, finalUnitDigit);
        finalUnitDigit %= 10;
    });
}

console.log('Final unit digit is ' + finalUnitDigit);