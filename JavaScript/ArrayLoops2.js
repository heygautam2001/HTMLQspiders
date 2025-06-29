// ! ============================ !

// ? case 1 : using for loops

let marks = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100];

let result = [];
for(let i = 0 ; i <= marks.length ; i++){
  console.log(marks[i]);

  if(marks[i] >= 35){
    result.push(marks[i]);
  }
}
console.log(result);

// ? case 2 : using for of loops

let marks1 = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100]

let result1 = [];

for(let marks of marks1){
  console.log(marks);

  if(marks >= 35){
    result1.push(marks)
  }
}

console.log(result1);


// ? case 3 : using filter method

/**
 * - it helps us to iterate through an array.
 * - It will not affect the origin array.
 * - It will filter the data.
 * - It will crete a new array and it will store the results.
 * syntax : collectionName.filter(callbackFn);
 * CallBack function requires parameter for iteration
 */