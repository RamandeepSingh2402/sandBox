// OOP

/* 
    For creating constructor function, it should start with a capital letter 
    and for the parameters, we put only the properties which we want to set
    "this" keyword specifies that we're setting up the properties of the (this) object.

    We can have multiple functions and we can include these in the constructor, but it is not
    recommended as we might not need all the functions for all, so as a workaround, we'd use prototypes 
    to mention the functions separately.
    To do this, we'd use nameOfTheConstructorFunction.prototype.nameOfTheFunction() and then define the function


    In the example below the function getLastName() will be there in each and every object of the Person class, but using
    Prototypes, we'd be mentioning and defining the functions specifically.


*/

// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName()  {
        return `${this.firstName} ${this.lastName}`
    }
}


Person.prototype.getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate an object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.getBirthYear());
console.log(person2.getBirthYear());
console.log(person2.getFullName());
console.log(`This is a person object: ${person1}`)