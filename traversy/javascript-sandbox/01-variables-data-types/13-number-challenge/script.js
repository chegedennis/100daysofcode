/*
Number Challenge

Instructions:
Create a variable called x that is a random number between 1 and 100 along with a variable called y that is a random number between 1 and 50.
create a variable for the sum, difference, product, quotient and remainder of x and y. log the output in a string that shows the two numbers of x and y along with the operator and result.
 > you can log the output string directy or put them in separate variables and log them like below.
 > you can use string concatenation or template literals for the output.

*/

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

let sumOutput = x + y;
let differenceOutput = x - y;
let productOutput = x * y;
let quotientOutput = x / y;
let remainderOutput = x % y;

console.log(x);
console.log(y);
console.log(`sum: ${x} + ${y} = ${sumOutput}`);
console.log(`difference: ${x} - ${y} = ${differenceOutput}`);
console.log(`product: ${x} * ${y} = ${productOutput}`);
console.log(`quotient: ${x} / ${y} = ${quotientOutput}`);
console.log(`remainder: ${x} % ${y} = ${remainderOutput}`);
