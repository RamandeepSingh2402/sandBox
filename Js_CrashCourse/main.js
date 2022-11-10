// var, let and const
// var has been used in the JS since beginning and is globally scoped
// we dont use var anymore

// let and const have block-level scope and both were added with the addition of ES-6 or ES-2015

// What is the difference between let and const? :
// Using let we can reassign the values



/*
    The following code block would give an error in the console, since age is mentioned as const
    const age = 30;
    age = 31;
    console.log(age);
*/

/*
    The following code block would display age as 31 in the console.
    let age = 30;
    age = 31;
    console.log(age);
*/