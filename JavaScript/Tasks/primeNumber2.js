function isPrime(num){
  let count = 0;
for (let i = 2; i <= Math.floor(num/2); i++) {
  if(Math.floor(num % i) == 0)
    count++;
}
if(count == 0)
  return true;
else
   return false;

}

let num = Number(prompt("Enter a number"));
for(let i = 1 ; i < Math.floor(num); i++){
   if(isPrime(i))
    console.log(i);
 
}