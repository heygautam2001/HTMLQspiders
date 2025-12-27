/*
! Notes
- Modules : Modules helps us to break the large ammount code into smaller pieces.

- we can export it in two ways
- using default export
- using named export

? Default way :
- syntax : export default dataIdentifier..
- by using default way we are unable to export more than one data at a time.
- we can import the data with any name.


? Named way :
1. export let variableName = "Some data"
2. export {variablename}
3. export{variableName1 , variableName2, ....}
4. export {variablename1 as v1 , variableName2 as v2,...}

1. import{variableName} from "fileName.js"
2. import{variableName1, variableName2,...} from "fileName.js"
3. import{variableName1 as v1 , variableName2 as v2,...} from "fileName.js"
4. import * as somevariableName from "fileName.js"

*/

// ! ======== import File =====
// ? Default Import ...

// import sname from "./code.js"
// import course from "./code.js"
// import age from "./code.js"

// console.log(sname);
// console.log(course);
// console.log(age);

// ? Named import
// ~ case 1:


// console.log(product2);
// console.log(product4);
// import { product4 } from "./code.js";
// import { product2 } from "./code.js";

// ~ case 2:

// console.log(product2);
// console.log(product4);
// import { product4 } from "./code.js";
// import { product2 } from "./code.js";

// ~ case 3:
// import {product1 , product2 , product3 , product4 } from "./code.js"

// console.log(product1);
// console.log(product2);
// console.log(product3);
// console.log(product4);

// ~ case 4:
// import{
//   data3 , data4 , addition , subtraction , multiplication , division
// } from "./code.js"

// console.log(addition);
// console.log(multiplication);
// console.log(division);
// console.log(subtraction);
// console.log(data3);
// console.log(data4);

// console.log(addition(10,20));
// console.log(multiplication(10,10));

// ~ case 5:
// import {add , multiply , divide, subtract } from "./code.js"

// console.log(add);
// console.log(add(20,30));
// console.log(subtract);
// console.log(subtract(20,40));
// console.log(multiply);
// console.log(multiply(10,20));
// console.log(divide);
// console.log(divide(10,20));

// ~ case 5.1:
// import {add as a , subtract as s , multiply as m , divide as d} from "./code.js"
// console.log(a);
// console.log(s);
// console.log(m);
// console.log(d);

// console.log(add); // uncaught reference error

// you can also called that function... with that name...ase

// ~ Case 5.2
import * as allFunctions from "./code.js"
console.log(allFunctions.add);
console.log(allFunctions.add(10,20));
console.log(allFunctions["add"](10,20));
console.log(allFunctions.subtract);
console.log(allFunctions.default);



console.log(NaN == NaN)
console.log(undefined == NaN);


