const mobile = {
    brand: 'Samsung',
    color: 'black',
    camera: '12mp',
    price: 25000,
    isNew: true
}

// for of : array
// for in : onject

for(const prop in mobile){
    console.log(prop);
    console.log(prop, mobile[prop]);
}

