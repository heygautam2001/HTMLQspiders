// ! ..................id Selector...................

console.log(document);

let heading3 = document.getElementById('heading3');
console.log(heading3);

let heading4 = document.getElementById('heading4');
console.log(heading4);

let heading5 = document.getElementById('heading5');
console.log(heading5);

// ! ------------- class selector -----------------

let demo = document.getElementsByClassName('demo');
console.log(demo);

let demo1 = document.getElementsByClassName('demo1');
console.log(demo1);

let demo2 = document.getElementsByClassName('demo2');
console.log(demo2);

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
console.log(userNames[0].value);


