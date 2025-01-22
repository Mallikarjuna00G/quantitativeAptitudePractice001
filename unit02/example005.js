const numbers = [3567516, 9130525, 7870832, 1371594];

numbers.forEach(number => {
    let unitDigit = number % 10;
    if(unitDigit % 2 === 0) {
        console.log(`${number} is divisible by 2 because unit digit of the number is ${unitDigit} which is divisible by 2.`);
    } else {
        console.log(`${number} is not divisible by 2 because unit digit of the number is ${unitDigit} which is not divisible by 2.`);
    }
})