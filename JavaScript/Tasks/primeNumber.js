let num = Number(prompt("Enter a number"));
let count = 0;
for (let i = 2; i <= Math.floor(num/2); i++) {
  if(Math.floor(num % i) == 0)
    count++;
}
if(count == 0)
  alert("Prime Number")
else
alert("Not prime")