// ! ========= Create ===========
let h1 = document.createElement("h1");
console.log(h1);


// ? to add content :

h1.textContent = "Helllo , JavaScript text content";
h1.innerText = "Hello , JavaScript InnerText";
h1.innerHTML = "Hello , JavaScript , innerHtml";

//let myContainer = document.getElementById("myContainer");
// myContainer.appendChild(h1);

let body = document.body;
body.appendChild(h1);

let head = document.head;
console.log(head);

// ? textContent VS innertext vs innerHTML
h1.textContent = "<i> hello this is < b>Gautam Kumar<b></i>"
h1.innerText = "<i> hello this is < b>Gautam Kumar<b></i>"
h1.innerHTML = "<i> hello this is < b>Gautam Kumar<b></i>";

// ! Update : 
// ? content update
h1.innerHTML = "I am Updated";

// ? Node Update 
let p = document.createElement('p');
p.innerHTML = "I am a para tag";
console.log(p);
console.log(h1);

body.replaceChild(p,h1);

// ! Delete
body.removeChild(p); 
