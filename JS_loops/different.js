//even: n/2 === 0
//odd: n/2 !== 0

//odd numbers

for (let i = 0; i < 20 ; i ++){
    if(i % 2 ===1){
        console.log( 'Odd Number: ', i);
    }
}

// Even Number
for ( let k = 0; k < 20; k ++){
    if ( k % 2 ===0){
        console.log('Even Number: ', k);
    }
}

// Give me the list numbers between 1 to 30 divisible by 5

for (let j = 1 ; j <= 30; j++){
    if (j % 5 ===0){
        console.log('Divisible by 5: ', j);
    }
}
//Divisible by 5 or 3
for (let j = 1 ; j <= 30; j++){
    if (j % 5 ===0 || j % 3 === 0){
        console.log('Divisible by 5 or 3: ', j);
    }
}
//Divisible by 5 and 3
for (let j = 1 ; j <= 30; j++){
    if (j % 5 ===0 && j % 3 === 0){
        console.log('Divisible by 5 and 3: ', j);
    }
}