// Conditionals
const x = 4;
const y = 11;

/*
    using '==' compares only the values, not the dataTypes
    '===' compare the value on the basis of dataTypes as well
*/
if(x == 10) {
    console.log(`The value of x without comparing thedata type is: ${x}`);
}
if(x === 10) {
    console.log(`The value of x based on the data type as well is: ${x}`)
}
if(x > 5 && y > 11) {
    console.log(`The value of x is more than 5 and the value of y is more than 10`);
}
if( x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10')
}
else if(x > 10) {
    console.log(`The value of x is greater than 10`);
}
else {
    console.log('The value of x is less than 10 and is ' + x + ' which is less than 10');
}