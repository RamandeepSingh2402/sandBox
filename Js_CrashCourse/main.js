// FUNCTIONS

// NaN means not a number

/* 
    For the function below, we've used the default value for the nums
    which means that if no argument is provided for the function, then the function 
    would use the default value, but on the other hand, if a default value is provided,
    then whenever the function is called without any argument, then the function would be using it's default value.
*/
const addNums = num1 => num1 + 5;

console.log(addNums(5));
console.log(addNums(1));

// todos.forEach((todo) => console.log(todo));

const addingNum = (num1, num2) => {
    console.log(`The sum of the nums is ${num1 + num2}`)
}
addingNum(2,3);

// lexical "this" keyword