// Talking more about Strings

const name = 'John';
const age = 30;

// Concatenation
console.log('My name is ' + name + ' and my age is ' + age + '.');

// Template Strings/ Template Literals
// We use `` and wherever we want to use the variables, we use them using $ and curly braces
// and in the curly braces, we use the name of the variable which we are using

console.log(`My name is ${name} and my age is ${age}`);

const hello = `My name is ${name} and my age is ${age}`;

console.log(hello);

// More properties of Strings:
// Properties do not have "()", methods have ()

const s = 'Hello World';
const t = 'Computers, Technology, IT, Code';

console.log(`The length of the string is ${s.length}`);
console.log(`Upper case of the string ${s.toUpperCase()}`);
console.log(`Lower case of the string ${s.toLowerCase()}`);
console.log(`Substring with starting index of 0 and ending index of 5 is ${s.substring(0,5).toUpperCase()}`);
// the following line of code returns an array of 11 elements
console.log(s.split(''));
console.log(t.split(','))


