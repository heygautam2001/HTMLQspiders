// ! =============Filter Method=============== !

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
 * CallBack function requires parameter for 
 * This callback function must and should return a condition.
 * 
 * . if the condittion is true element should store in an array
 * 
 */

let arr = [23 , 1 , 45 , 67 , 54 , 78 , 90 , 56 , 3 , 9 , 70 , 80 , 34 , 85 ];

function looper(val)
{
  return val > 60;
}
console.log(arr.filter(looper));

let looper1 = (val)=>{
       return val > 60;
}

console.log(arr.filter(looper1));

 let val = arr.filter((val)=>{
  return val > 60;
})
console.log(val);

// !========= Map Method ========================
// case 1 : Using for Loop

let salaries = [500 , 200 , 40 , 60 , 80 , 40 , 500 , 600 , 450];
console.log(salaries);

let updatedSal = [];

for(let i = 0; i < salaries.length; i++){
  if(salaries[i] > 200)
    updatedSal.push(salaries[i]+50);

}

console.log(salaries);
console.log(updatedSal);

for(let i = 0; i < salaries.length; i++){
    updatedSal.push(salaries[i]+50);
}

console.log(updatedSal);

// ? case 2 : Using for of loop

let sal = [500 , 450 , 80 , 60 , 56 , 54 , 79 , 89 , 23, 76 , 88 , 99 ];
let upSal = [];
for (const ele of sal) {
 
  upSal.push(ele+50)
  
}
console.log(sal);
console.log(upSal);

// ? Case 3 : Using Map Method
/**
 * It helps us to iterate through an array
 * it will not affect the original array
 * It takes a callbackfn as a parameter.
 * syntax : collectionName.map(callbackFn)
 * This callbackFn should have a parameter for itreration.
 * This should return an expression/normal code
 */

let salY = [500 , 450 , 80 , 60 , 56 , 54 , 79 , 89 , 23, 76 , 88 , 99 ];
let upSalY = [];
function increment(i){
  return i+50;
}

let upSaly = salY.map((increment));
console.log("upsaly : ",upSaly);

console.log(salY.map((ele)=>
  {
    return ele+200;
  })

);

// ! ========== Reduce ========== !
// syntax : collectionName.reduce(callbackFn(ele , initialVal),accumaulator)
let arr1 = [45 , 60 , 12 , 43 , 23 , 78 , 90];
let initialValue = 0;
let sum = arr1.reduce((accumaulator,ele)=>{
  console.log("accumulator : ",accumaulator);
  console.log("ele : ",ele);
  return accumaulator += ele;
});

console.log("Total array sum of ", arr1 , " is ", sum);