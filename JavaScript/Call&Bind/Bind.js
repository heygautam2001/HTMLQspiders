// 2. bind() Method
// What bind() does
// Does NOT call the function immediately
// Returns a new function
// The new function has this permanently fixed

// Syntax : 
// const newFunction = functionName.bind(thisValue, arg1, arg2);

// Example 1

const person = {
  name: "Alex"
};

function greet() {
  console.log(`Hi, my name is ${this.name}`);
}

const greetAlex = greet.bind(person);

greetAlex();
// Output: Hi, my name is Alex


// Example 2....
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);

console.log(double(5));
// Output: 10


