// ? Declaration

let str = "String in double quote"
console.log(str);

let str1 = 'I am string1 in single quote'
console.log(str1);

let str2 = ` I am string2 in backtik`
console.log(str2);

let str3 = new String("Hello I am  a New String");
console.log(str3);

let str4 = "hello";
let str5 = new String("hello");
let str6 = 'hello';
let str7 = `hello`;
console.log(str4 === str5); // false for === and true for ==
console.log(str4 === str6); // true for both == and ===
console.log(str6 == str7); // true
console.log(str6 === str7); // true


// ? string concatenation
// ! with + operator
let str8 = str6 + str7;
console.log(str8); 
// ! with concat method
console.log(str8.concat(str5));

//! converting into UpperCase and lowercase
let strn = "Hello";
console.log(strn.toUpperCase());
console.log(strn.toLowerCase());

// ! trim() , trimStart() , trimEnd()

let trimStr = "       Gautam     "
console.log(trimStr.trimStart());
console.log(trimStr.trimEnd());
console.log(trimStr.trim());

// ! subStr() and subString()

let subStr = "HELLO GAUTAM";
console.log(subStr.substr(2,6));
console.log(subStr.substring(1,7)); // Last Index Excluded.
console.log(subStr.substring(1)); // Print the whole string from specifoed start index to end index..

// ! slice() and splice();

let slce = "Slices";
console.log(slce.slice(0 , 6)); // Last Index elcluded
// console.log(slce.splice()); // not method in string

// ! charAt() and charCodeAt();
let char = "Venomm";
console.log(char.charAt(3));
console.log(char.charCodeAt(1));

// ! indexOf() , lastIndexOf() , startsWith() , endsWith() and includes();

console.log(char.indexOf('n'));
console.log(char.indexOf('x'));
console.log(char.includes('m'));
console.log(char.includes('x'));
console.log(char.lastIndexOf('m'));
console.log(char.startsWith('V'));
console.log(char.startsWith('x'));
console.log(char.endsWith('m'));
console.log(char.endsWith('n'));

// ! contains is also done by includes...
 let container = "Container Container";
 console.log(container.includes('Conta'));

 // ! length
console.log(char.length);

// ! replace() and replaceAll();
 console.log(char.replace('V' , 'v'));
 console.log(char);

 console.log(char.replaceAll('m','r'));

 let strng = " I am Gautam Kumar"
 console.log(strng.split('?j',strng.length));

 console.log(str1.match(str2));
 

