import digitCount1 from "./lengthOfNumber.js";
let num = Number(prompt('Enter your Number'));

function isArmstrong(num){
  let digitcnt = digitCount1(num);
  let temp = num;
  let sum = 0;
  while(temp != 0){
    sum = sum + Math.pow(temp%10 , digitcnt);
    temp = Math.floor(temp/10);
  }
if(sum == num)
  alert(num+" is a armstrong number")
else
  alert(num+" is not a armstrong number");

}

isArmstrong(num);