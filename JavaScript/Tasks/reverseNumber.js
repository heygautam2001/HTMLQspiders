let num = Number(prompt("Enter a number"));
let temp = num;
let reverse = 0;
while(temp != 0){
  reverse = reverse*10 + temp % 10;
  temp = Math.floor(temp/10);
}
alert(reverse);