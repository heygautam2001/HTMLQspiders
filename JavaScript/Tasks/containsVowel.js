let str = String(prompt("Enter Your Text"));

function isContains(str){
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) === "A" ||
      str.charAt(i) === "E" ||
      str.charAt(i) === "I" ||
      str.charAt(i) === "O" ||
      str.charAt(i) === "U" ||
      str.charAt(i) === "a" ||
      str.charAt(i) === "e" ||
      str.charAt(i) === "i" ||
      str.charAt(i) === "o" ||
      str.charAt(i) === "u"
    ) {
      return alert("Contains Vowels");
      
    }
  }
  return alert("Not contains vowels")
}

isContains(str);