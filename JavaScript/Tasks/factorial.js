let num = Number(prompt('Enter a number to find factorial'));

let factorial = (num)=>{
  fact = 1;
  for(let i = 2 ; i <= num; i++){
    fact = fact*i;
  }
  return fact;

}

alert(factorial(num));