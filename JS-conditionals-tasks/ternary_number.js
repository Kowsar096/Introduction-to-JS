/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
const num1 = 10; // Example number 1
const num2 = 5; // Example number 2
if (num1 > num2) {
    const result = num1 * 2;
    console.log("Result (if-else):", result);
} else {
    const result = num1 + num2;
    console.log("Result (if-else):", result);
}

// Using ternary operator
const result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log("Result (ternary):", result);   