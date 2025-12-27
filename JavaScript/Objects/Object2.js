// ! objects :
/**
 * we can create an object in 3 ways
 * object literals
 * new keyword
 * constructor function
 */

// ? 1. Object literals

var obj = {
  sname : "Professor",
  age : 30,
  course : "JFS"
};

console.log(obj);

// ? 2. new Keyword

// Here we will create an instance of inbuilt Object
var x = Number();
console.log(x);

var x = String();
console.log(x);

var x = Array();
console.log(x);

var obj1 = Object();
console.log(obj1);

obj1.sname = "Gautam";
obj1.course = "Java full-stack";
console.log(obj1);

var obj2 = new Object({address:"haryana" , street : "XYZ"});
console.log(obj2);

obj2.age = 20;
console.log(obj2);

