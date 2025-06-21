
// Data-Types
/**
 * number
 * string
 * boolean 
 * null 
 * bigInt
 * undefined
 * 
 * Object
 * array
 * function
 * Math
 * Date
 *
 */

var sname = "Gautam"
console.log(sname);
console.log(typeof sname);

var sal = 5000;
console.log(sal);
console.log(typeof sal);

var isplaced = true;
console.log(isplaced);
console.log(typeof isplaced);

var isMarries = false;
console.log(isMarries);
console.log(typeof isMarries);

var bandiCount = null;
console.log(bandiCount);
console.log(typeof bandiCount);

var kidsName = ["Hello" , "Mello" , "Xello"];
console.log(kidsName);
console.log(typeof kidsName);


var address = 
{
  street: 123,
  city: 'xyz'
  
};
console.log(address);
console.log(typeof address);

var sal = 2n;
console.log(sal);
console.log(typeof sal);


function sum(x , y){
  return x+y;
}

console.log(sum);
console.log(sum(2,5));

console.log(typeof sum);

console.log(Math);
console.log(new Date());