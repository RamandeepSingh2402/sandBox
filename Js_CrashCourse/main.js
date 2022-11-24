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

for( let i = 0; i< todos.length; i++ ){
    console.log(todos[i].text);
}

// FOR-OF LOOP
for(let todo of todos) {
    console.log(todo.id);
}