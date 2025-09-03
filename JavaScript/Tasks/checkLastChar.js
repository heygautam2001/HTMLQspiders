let str = String(prompt("Enter Your String"));
function CheckLastChar(str){
 if(
    str.charAt(str.length-1) === "A" ||
    str.charAt(str.length-1) === "E" ||
    str.charAt(str.length-1) === "I" ||
    str.charAt(str.length-1) === "O" ||
    str.charAt(str.length-1) === "U" ||
    str.charAt(str.length-1) === "a" ||
    str.charAt(str.length-1) === "e" ||
    str.charAt(str.length-1) === "i" ||
    str.charAt(str.length-1) === "o" ||
    str.charAt(str.length-1) === "u"
  ) {
    return true;
  }
  return false;
}

alert(CheckLastChar(str));