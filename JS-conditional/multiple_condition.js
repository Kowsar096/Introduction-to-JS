/** 
 * -------MULTIPLE CONDITION------------
 * In JavaScript, we can use multiple conditions with logical operators:
 *  && (AND) : all conditions must be true
 *  || (OR) : at least one condition must be true
 * 
 * */ 

const salary = 25000;
const isBCS = true;
const height = 61;

if (salary > 20000 && height > 60){
    console.log('Good salary');
}
else{
    console.log('Try something better')
}

if (salary > 30000 || height > 66){
    console.log('Good salary');
}
else{
    console.log('Try something better')
}

//more and more condition

if (salary > 30000 || height > 66 || isBCS == true){
    console.log('Good salary');
}
else{
    console.log('Try something better')
}


//--------------COMPLEX CONDITION-------------

if ((salary > 30000 && height > 66) || isBCS == true){
    console.log('Good salary');
}
else{
    console.log('Try something better')
}
