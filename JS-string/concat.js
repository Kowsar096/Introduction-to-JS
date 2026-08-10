const first = 'James';
const last = 'Rodrigez';

// const fullname = first + last ; //there is no space
const fullname = first + ' ' + last ;
console.log(fullname);

const fullname2 = first.concat(' ', last);
console.log(fullname2);

//includes

console.log(last.includes('g')); //true
console.log(last.includes('x')); //false
