/** 
 * If Statement
 * The if statement executes a statement if a specified condition is truthy
 * 
 * if you buy food for me
 *      i will come
 * 
 * ------STRUCTURE--------
 * if (condition){
 *      execute code if condition above is true
 * }
 * else{
 *      execute code if condition is false
 * }
 * 
*/

if(15 < 20){
    console.log('i have smaller value');
}
else{
    console.log('i have bigger value');
}

var weight = 40;

if(weight < 20){
    console.log('I have carry it by myself');
}
else{
    console.log('I will rent a rickshaw');
}