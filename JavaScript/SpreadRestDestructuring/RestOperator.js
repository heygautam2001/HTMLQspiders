// ! Rest Operator

function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
  // sum(12, 14, 56, 78 ,1 ,2, 45, 90);

function sumOfNumbers(...num) {
  let sum = 0;
  for (const val of num) {
    sum += val;
  }
  return sum;
}
//  console.log(sumOfNumbers(1,2,3,4,5));

function sumnum(...num) {
  let sum;
  let result = num.reduce((acc, val) => {
     console.log(acc+val);
    sum = acc + val;
    return sum;
  });
  return result;
}
// console.log(sumnum(1, 2, 3, 4, 5));


//! fuction check

function hello(hello){

  console.log(Object.entries(hello));
}
hello([12 , 13 , 14]);
