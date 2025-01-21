const numbers = [256, 27, 159, 182];

product = 1;

numbers.forEach(number => {
    product *= number % 10;
})

console.log(product % 10);