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

// high order array methods
// forEach (loops through the arrays)
// map (allows us to create a new array from an array)
// filter (allows us to create an array based on a condition)

/*
    These high order methods take in parameter of function and the call-back
    function takes in a parameter which is a variable  that we want to use 
    as each item (for this each todo )
*/


// forEach 
todos.forEach(function(todo) {
    console.log(todo.text);
});

// map
// with map it actually returns an array
const todoText = todos.map(function(mapTodo) {
    return mapTodo.text;
});
console.log(`The text for todos using map is: ${todoText}`);

//filter
const completedTodos = todos.filter(function(filterCompleted) {
    return filterCompleted.isComplete === true;
}).map(function(filterCompleted){
    return filterCompleted.text
});
console.log(completedTodos);
/*

    One thing to note here is that simple console.log(completedTodos) gives us 
    the whole array which can be inspected, but on the other hand, 
    completedTodos with the text give us objects which can't be inspected.
*/
console.log(`The text of the filtered and completed todos is: ${completedTodos}`);