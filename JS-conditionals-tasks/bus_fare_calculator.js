/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const age = 25; // Example age
const isStudent = true; // Example student status
if (age < 10) {
    console.log("Ticket fare: Free");
} else if (isStudent) {
    console.log("Ticket fare: 400 tk (50% discount)");
} else if (age >= 60) {
    console.log("Ticket fare: 680 tk (15% discount)");
} else {
    console.log("Ticket fare: 800 tk");
}