// ! ..................id Selector...................



// ! Tag Name
let b = document.getElementsByTagName("b");
console.log(b);

let div = document.getElementsByTagName("div");
console.log(div);

let p = document.getElementsByTagName("p");
console.log(p);

// ! New Attribute

let userNames = document.getElementsByName("username");
console.log(userNames);

console.log(userNames[0]);
console.log(userNames[0].name);
console.log(userNames[0].placeholder);
console.log(userNames[0].value);

userNames[0].value = "Gautam"


