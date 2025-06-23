// ! Immmediate invoked function Expression
// ()();

// (function_area)(function_invocatrion);
// It is only for onetime uasage.

(function sum(a, b) {
  console.log(a + b);
})(10, 20);

(function (a, b) {
  console.log(a + b);
})(10, 20);

// !=========== Arrow Function ========> !

//⁡⁣⁣⁢syntax: () => { };⁡

// ? case 1: with actual code

var square = (n) => {
  return n ** 2;
};

// ? case 2 : if we have only one parameter then parenthesis is not required..

var sqare = (n) => {
  return n ** 2;
};

// ? case 3 : if we have only one statement in a block then block is not required

var square = (n) => n ** 2;
console.log(square);
console.log(square(10));

// ! Higher Order function

console.log("start");

var a1 = "Shivam";
var b1 = "Harsh";

function Calculator(a, b, operation) {
  console.log(operation);
  return operation(a, b);
}

function sum(a, b) {
  return a + b;
}

console.log(sum);

function sub(a, b) {
  return a - b;
}
console.log(sub);

function Multiply(a, b) {
  return a * b;
}

console.log(Multiply);

function divide(a, b) {
  return a / b;
}
console.log(divide);

console.log(Calculator);
console.log(Calculator(10, 20, sum));
console.log(Calculator(10, 20, sub));
console.log(Calculator(10, 20, Multiply));
console.log(Calculator(10, 20, divide));

console.log("end");

// !========= Explanation ======= //

console.log("Start");
function summation(a, b) {
  console.log(a + b);
}

console.log(summation(10,20));
console.log("end");


// ? case 2:

console.log("start");

function Sum(a,b){
  console.log(a+b);

  return "Hii ! How are You";
  console.log("Hello World");
}

console.log(Sum(10,20));
console.log("end");

// ! Case 3 :

console.log("start");

function Sum2(){
  console.log(a+b);

  var result = a+b;

  return result;

}

console.log(Sum2(10,20));
console.log("end");