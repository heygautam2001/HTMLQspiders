// # Why call() and bind() are needed
// In JavaScript, the value of this depends on how a function is called, not where it is written.
// call() and bind() let us manually control what this refers to.

// Call in javascript
// 1. call() Method
// What call() does
// Calls a function immediately
// Sets the value of this
// Passes arguments one by one

// Syntax
// functionName.call(thisValue, arg1, arg2, ...);

// Examples of call...

const person = {
  name: "Alex"
};
function greet(age) {
  console.log(`Hi, my name is ${this.name} and I am ${age} years old`);
}
greet(21); 
// name is undefined... because function is unaware about what name you are calling means 'this is not referring any name or unaware about that'
greet.call(person, 20);
// Output: Hi, my name is Alex and I am 20 years old


// Example 2

const user1 = { name: "John" };
const user2 = { name: "Sara" };

function sayHello() {
  console.log(`Hello ${this.name}`);
}

sayHello.call(user1); // Hello John
sayHello.call(user2); // Hello Sara