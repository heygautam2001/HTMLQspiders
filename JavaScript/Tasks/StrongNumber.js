
let num = Number(prompt('Enter a number to find factorial'));

let factorial = (num)=>{
  fact = 1;
  for(let i = 2 ; i <= num; i++){
    fact = fact*i;
  }
  return fact;

}

function sumOfFactorialOfDigits(num){
  let sum = 0;
  let temp = num;
  while(temp != 0){
      sum = sum + factorial(temp%10);
      temp = Math.floor(temp/10);
  }
  return sum;
}

if(sumOfFactorialOfDigits(num) == num){
  alert(num+" is a strong number");
}else{
  alert("Not a strong number");
}
