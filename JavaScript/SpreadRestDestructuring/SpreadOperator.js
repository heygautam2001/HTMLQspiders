let array1 = [1,2,3,4];
let array2 = [7,3,5,9];
// console.log("Array1 : ",array2);
// console.log("Array2 : ",array2);
// Spread Operator...
let arr3 = [...array1 , ...array2];
// console.log("Array 3 :",arr3);


let obj1 = {
  name : "Gautam",
  rollNo : "101",
  phone : "8285XXXX"
}
console.log(obj1);
let obj2 = {
  course : "JFS",
  subject : [
    {
      frontend : ["Html" , "css" , "javascript"],
      backend : ["Java" , "spring" , "spring boot"]
    }
  ]

}
console.log(obj2);
// console.log(obj2.subject[0].frontend[1]);

let obj3 = {
  ...obj1 ,
  ...obj2
}

console.log(obj3);


// Rest operator is only used with function parameter syntax is same as rest spread operator '...'

function sum(...num){
  let sum = 0;
  num.forEach((val)=>{
    sum = sum+val;
  })
  return sum;
}


console.log(sum(1,2,3,4,5));