// We'll be learning about object literals
// Object literals are basically key-value pairs    

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address : {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    }
}

// accessing properties of objects
console.log(person.firstName, person.lastName);

// accessing properties of properties
console.log(person.hobbies[1]);
console.log(person.address.city);

// using destructuring
// pulling things out, meaning that we're pulling properties out of person
const { firstName, lastName, address: {city} } = person;
console.log(firstName, lastName, city);

// we can add the properties to the object
// On printing the object, the print will be done on the basis og  alphabetical order of properties
person.email = 'john@gmail.com';
console.log(person);


// ARRAYS OF OBJECTS:
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isComplete: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isComplete: false
    }
];

console.log(todos);

// printing from the array of the todos
console.log(todos[2].text);


// JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// LOOPS IN JavaScript
// for loop
for (let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// while loop
let i = 0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}