const person = {
    name: 'David Backham',
    age:  45,
    profession: 'Footballer',
    salary: 350000,
    married: true,
    'fav place': ['Coxs-Bazar', 'Bandarban', 'Sylhet']
}
// console.log(person);
console.log(person.age);

//you can store any property in variable

const income = person.salary;
console.log(income);

// third bracket notation

console.log(person['name']);

const occupation = person['profession'];
console.log(occupation);

console.log(person["fav place"]);

const keyName = 'profession' ;
console.log(person[keyName]);
