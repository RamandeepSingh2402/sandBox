/// DOM

console.log(window);

// we use "window." to access anything that is in the window 

// window.alert(1);

// Single element selectors
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container'));

// even if we have multiple selectors, it's gonna give us the first h1 tag only
console.log(document.querySelector('h1'));


// Multiple element selectors

// it returns a node list which is similar to the array and we can also use the methods used on the arrays
console.log(document.querySelectorAll('.item'));

// returns an HTML collection
// the difference is that for an HTML collection, we cannot use array methods, we'll have to convert it manually to arrays in order to use
// array methods on it 
console.log(document.getElementsByClassName('item'));

// getELementByTagName()
// this also returns HTML collection
console.log(document.getElementsByTagName('li'));


// loops through and grabs each and every present item
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));