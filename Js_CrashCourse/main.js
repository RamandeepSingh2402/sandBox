// The ternary operator
/* 
    The TERNARY operator:
    A shorthand if statement used alot to assign variables based on the condition
    The first part is the condition and afte that is the question mark followed by teh color
    and then is ':' which signifies else and then is the second condition.
*/
const x = 9;

const color = x > 10 ? 'Red' : 'Black'; 

console.log(color);

// SWITCHES
switch(color) {
    case 'red':
        console.log(`The color is ${color}`);
        break;
    case 'blue':
        console.log(`The color is ${color}`);
        break;
    default:
        console.log(`The color is neither red nor black.`);
        break;
}