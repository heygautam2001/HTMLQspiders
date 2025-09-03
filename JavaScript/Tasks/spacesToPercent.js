// change all the spaces in a sentence to %

let str = String(prompt("Enter Your senetence"));
let gtr = "";
for(let i = 0; i < str.length; i++){
  if(str.charAt(i) == " "){
    gtr = gtr+'%';

  }else{
    gtr = gtr+str.charAt(i);
  }
}
alert(gtr);