/** 
 * TERNARY --> three parts
 *  ?   :
 * condition ? do something when true : do something when false
 * 
*/
const age = 22;
//normal if else

// if (age >= 18){
//     console.log('You can vote');
// }
// else{
//     console.log('You can not vote');
// }

//we can write the if else statement in one line using TERNARY

age >= 18 ? console.log('You can vote') : console.log('You can not vote');


let price = 500; //you can change the value

const isLeader = false;
// if(isLeader == true){
//    price = 0;   
// }
// else{
//     price = price + 100;
// }

// console.log(price);

//ternary
price = isLeader == true ? 0 : price + 100;

console.log(price);