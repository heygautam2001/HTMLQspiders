//! ========================== Arrays ===========================
 // ? case 1:

/*
 var arr = [10,20,30,40];

 var a = arr[0];
 var b = arr[1];
 var c = arr[2];
 var d = arr[3];

 console.log(a);
console.log(b);
console.log(c);
console.log(d);

*/
// ? case 1.1 :
/* 
var arr = [10,20,30,40];

var[a,b,c,d] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

var[m,n] = arr;
console.log(m);
console.log(n);
* /

// ? case 2 : Explixit desturucturing
/*
var ar = [10,20,30,[400,500,600],70,80];

var[a,b,c,d,e,f] = ar;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

var [x,y,z] = d;
console.log(x);
console.log(y);
console.log(z);
*/

// ? Case 2:
// implicit destructuring
/*
var ar = [10,20,30,[400,500,600],70,80];
var[a,b,c,[m,n,o],d,e] = ar;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(m);
console.log(n);
console.log(o);

*/
// ? case 3
/*
var ar = [10,20,30,[400,500,600],70,80];
var[,,,[m,,o],,f] = ar;
console.log(m);
console.log(o);
console.log(f);
*/
// ? case 4
var ar = [10,20,
  ["Dhwani" , "Yash" , 50 , [500 , 600 ,700 ,["srishti" , "Aman"]],30 , ["Ankkit"]],
  [[[["Gautam Kumar"]]]]
]
 console.log(ar);

var[,b,[, yashString,,[,n,,[srishtiString]]]]= ar;
console.log(b);
console.log(yashString);
console.log(srishtiString);
console.log(n);

var[,,[,,,a]] = ar;
 console.log(a);

var[,,[,,,[x]]] = ar;
 console.log(x);


