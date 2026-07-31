/**
 * MULTI_LEVEL CONDITION

*/

const price = 12000;
 if(price >= 5000){
    //10% discount
    const discount = price * 10 / 100;
    // console.log(discount);
    const payAmount = price - discount;
    console.log(payAmount);
 }
  else if(price > 2500){
    //5% discount
    const discount = price * 5 / 100;
    // console.log(discount);
    const payAmount = price - discount;
    console.log(payAmount);
 }
 else {
    console.log(price);
 }


 //another example multi level condition

 
const age = 77;
const another_Price = 500;

if (age <= 12) {
    console.log("You can eat for free");
} 
else if (age >= 60) {
    // 50% discount
    const another_discount = another_Price * 50 / 100;
    const another_payAmount = another_Price - another_discount;
    console.log(another_payAmount);
} 
else if (age >= 50) {
    // 30% discount
    const another_discount = another_Price * 30 / 100;
    const another_payAmount = another_Price - another_discount;
    console.log(another_payAmount);
} 
else if (age <= 40) {
    // 10% discount
    const another_discount = another_Price * 10 / 100;
    const another_payAmount = another_Price - another_discount;
    console.log(another_payAmount);
} 
else {
    console.log(another_Price);
}