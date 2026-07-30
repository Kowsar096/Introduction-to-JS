var orangePrice = 20;
var chocolate = 0.5;
// var applePrice = '25';

console.log(typeof orangePrice); //number
console.log(typeof applePrice); //string

console.log(orangePrice + chocolate); //addition two number
 
//convert a string into integer using parseInt

var applePrice = parseInt('25');

console.log(orangePrice + applePrice); //addition number and string

//NaN example

var bananaPrice = parseInt('Twenty');

console.log(bananaPrice); //the output is NaN 

//parseFloat conversation

var mangoPrice = parseFloat('25.55');
console.log(mangoPrice);

//special case 0.1 + 0.2 = 0.300000000000004

var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total); //0.30000000000000004
console.log(total.toFixed(2)); //0.30 but there is one problem it's make string

//Infinity 

const num = 50 / 0;
console.log(num); //if any number divided by 0 than the result is infinity

//-Infinity 

const negNum = -50 / 0;
console.log(negNum); //if any (-)number divided by 0 than the result is -infinity


