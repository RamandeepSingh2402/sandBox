// FUNCTIONS

// NaN means not a number

/* 
    For the function below, we've used the default value for the nums
    which means that if no argument is provided for the function, then the function 
    would use the default value, but on the other hand, if a default value is provided,
    then whenever the function is called without any argument, then the function would be using it's default value.
*/
function addNums(num1 = 1, num2 = 1) {
     return (num1 + num2);
}

console.log(addNums(5,4));
console.log(addNums());