// ? find()
/**
 * It will iterate through an array
 * it requires a callback function
 * CallBack should return a condition.
 * find() returns the first matching element
 */

// ? findIndex()
/**
 * it will iterate through an array
 * it requires a callback function
 * callback should return a condition.
 * find() returns the first matching element's index
 */

var arr = [10 , 20 , 30 , 4 , 5, 1 , 6 , 9 , 90 , 100 , 50 , 7800 , 400 , 320 , 45 , 100 , 600 , 320 , 450];

// find the element which is more than 300

function looper(val){
  // console.log(val);
  return val > 300;

}

console.log(arr.find(looper)); //7800 // returns first element which is greater than 300 by traversing the array left to right.
console.log(arr.filter(looper));// [ 7800, 400, 320, 600, 320, 450 ]
console.log(arr.findIndex(looper)); //11
console.log(arr.findLastIndex(looper)); // 18

