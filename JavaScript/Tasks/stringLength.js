let str = String(prompt("Enter a string"));

function strLen(str){
  let gtr = "";
  let cnt = 0;
  while(gtr !== str){
    console.log(cnt);
    gtr = gtr+str.charAt(cnt);
    cnt++;
  }
  return cnt;
}

alert("string length : "+strLen(str));