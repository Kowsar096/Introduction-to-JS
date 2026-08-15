
// Initialize the function
function hello(){
    console.log("Hello i am a function");
}

// Call the function

hello();

function wallet(){
    var money = 5000;
    console.log('I have ' + money + " Taka");
}

wallet(); 
// console.log(money); //money is not defined because money is under the function


function addition(input1, input2){
    let sum = input1 + input2;
    console.log('Sum is = ' + sum);
    return sum; 

}
const result = addition( 10, 40); // input the value and call the function so that he can return the output

console.log(result);