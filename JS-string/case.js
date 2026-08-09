const school = 'Rajuk Uttara Model School';


console.log (school);
console.log (school.toUpperCase());
console.log (school.toLowerCase());

 //.toLowerCase example for (upper and lower case)
const subject = 'Chemistry';
const book = 'chemistry';

if (subject.toLowerCase === book.toLowerCase){
    console.log('I am reading chemistry book.');

}
else{
    console.log('Gave up');
}
 //.trim example for (space)
const drink = ' water ';
const liquid = 'water  ';

if (drink.trim === liquid.trim){
    console.log('I am reading book.');

}
else{
    console.log('Gave up');
}