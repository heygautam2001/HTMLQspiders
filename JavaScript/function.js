// ! Function

// !Named functionst

//Case 1

console.log("Start");
var a = 10;
console.log(a);

let b = 20;
console.log(b);

const c = 30;
console.log(c);

function sum(){
  var m = 5;
  let n = 5;
  return m+n;
}

// console.log(m);
console.log(sum);
console.log(sum());


console.log("end");


// ? Case 2:

console.log("start");
function sayHii(){
  console.log("I am function Hii");
}

function SayBye(){
  console.log("I am from function Bye");
}

function greetUser(){
   var user = "ketan";
   console.log("Hello" , user);

}

sayHii();
greetUser();
SayBye();

console.log("end");


if(true){
  var r = 25;
}

console.log(r);

// Anonymous Function

/**
 * -Here we should not use function identifier
 * - as there is not reference to invoke the function , we have to store in variable
 * and we have to invoke it. 
 */


// ?Case 1:

console.log("srrat");

console.log(a);
var a =10;
console.log(a);

console.log(b);
var x = "himanshu";
console.log(x);


console.log(add); //undefined
var add = function(){
  console.log("Gautam");
}
console.log(add);
console.log(add());

console.log(end);


// case 2

console.log("start");

console.log(d);
var d = 10;
console.log(d);

console.log(v);
var v = 45;
console.log(v);


var add1 = function sum1(){
  console.log("Gautam");
  let m = 45;
  let n = 9;
  return m+n;
}


console.log(add1);
console.log(add1());

console.log("end");




