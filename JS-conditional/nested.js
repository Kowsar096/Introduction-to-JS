/**
 *A nested conditional means placing one if...else statement inside another if...else statement.
 * 
 *   */ 

const money = 250;
if (money > 300){
    console.log('You can buy a Shirt');
}
else{
    if(money > 100){
        console.log('You can buy T-Shirt');
    }
    else{
        if(money > 50){
            console.log('You can buy Socks');
        }
        else{
            console.log('You can buy a Mask');
        }
    }
}