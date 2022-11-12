// Arrays - variables that hold multiple values
// In JS, an array can have different data types

const fruits = ['Apples', 'Oranges', 'Pears', 10, true];

/*
    we can manipulate the array, but we can't reassign the array like:
    fruits = [];
*/

// Adding more elements at the end
fruits[5] = 'grapes';

// Better way to add more elements in an array
// push() pushes elements at the end of an array
fruits.push('banana');

// Adding elements on the beginning of the array
fruits.unshift('strawberries');

// Taking the last element off the array
fruits.pop();

// Check to see if something is in the array
console.log(Array.isArray('hello'));

// Getting the index of a certain value
console.log(fruits.indexOf('oranges'));

// Accessing the whole array
console.log(fruits);

// Accessing particular elements of the array
console.log(fruits[1]);