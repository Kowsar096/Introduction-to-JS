const fruits = ['apple', 'banana', 'mango', 'cherry'];

console.log("Include example: ")
console.log (fruits.includes('mango')); //true
console.log (fruits.includes('jackfruits')); //false

console.log('Index of example: ')

console.log(fruits.indexOf('banana')); // 1 means that element in index 1
console.log (fruits.indexOf('jackfruits')); //-1 means that element is not here

const food = 'ros o gok ka a';
const age = 26;
console.log('Checking that is array or not: ');
console.log(Array.isArray(fruits)); //true
console.log(Array.isArray(food)); //false
console.log(Array.isArray(age)); //false
