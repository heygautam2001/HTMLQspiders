let num = Number(prompt('Enter a number'));
let digitCount = function(num){
  let cnt = 0;
while(num != 0){
  cnt++;
  num = Math.floor(num/10);
  }
  return cnt;
}

alert(digitCount(num));