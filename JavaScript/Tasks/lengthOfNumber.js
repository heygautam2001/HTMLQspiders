// find the length of a number is even or not
let num = Number(prompt('Enter a number'));
let digitCount = function(num){
  let cnt = 0;
while(num != 0){
  cnt++;
  num = Math.floor(num/10);
  }
  return cnt;
}

// if(Math.floor(digitCount(num) % 2) == 0){
//   alert("Even digit number");
// }
// else{
//   alert('Odd digit number');
// }

let digitCount1 = function(num){
  let cnt = 0;
while(num != 0){
  cnt++;
  num = Math.floor(num/10);
  }
  return cnt;
}

export default digitCount1;