const college = {
    name: 'VNC',
    class: ['11', '12'],
    event: ['Science fair', 'victory day', '21st feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

console.log(college.name);
console.log(college.unique);  // its print object

console.log(college.unique.color); //its print actual property values


//you can update a value

college.unique.result.merit = 'top top most ';

//changed value print here

console.log(college.unique.result.merit);

// access any value in string using index number

console.log(college.event[1]); // [0, 1, 2, 3 ...] (2nd index = 1) print


// change index value

college.event[1] = '16th December';

console.log(college.event[1]); // updated value print 


// delete (any property) and see the full nested
 
delete college.class; // delete class property

console.log(college); // without class property



