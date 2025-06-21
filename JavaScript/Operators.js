// ! Operators
// ? Arithmetic operator

/**
 * + , - , * , / , ** , ++ , --
 */

console.log(10+5);
console.log(10-5);
console.log(10*5);
console.log(10/5);
console.log(10**5);
// console.log(10++);
// console.log(++10);

var a = 10;
a++;
console.log(a);
var b = 10;
b--;
console.log(b);

// Assignment
/**
 * = , += , -= , *= , %=
 */

var n = 10;
console.log(n);

// n = n+10;
n+=10;
console.log(n);

// comparision Operator

/**
 * > < <= >= == === != !==
 */

console.log(2==2);
console.log(2!=2);
console.log(2 > 1);
console.log(2 > 2);
console.log(2==2);
console.log(2!=2);
console.log(2 != 3);
console.log(2===2);
console.log("2" == 2);
console.log("2" === 2);

// ? logical Operators
/**
 * && , || , !
 */
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);
console.log(!true);
console.log(!false);
// ? Ternary Operator
// condition(true/false) ? true(executed for true statement) : false(execurted for false ststement)

let age = 18;
age > 20 ? console.log('Yes') : console.log('No')


//  !others
var s = '10';
console.log(s);
console.log(typeof s);

//var n = parseInt(s);
//var n = +s //if we use +symbol berfore the numeroical string , 
//it will comvrt into number..

var n = s**1;
// if we numericalString ** i ---> numver

console.log(n);
console.log(typeof n);


