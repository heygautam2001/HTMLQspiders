let body = document.body;
let h1 = document.createElement('h1');

h1.textContent = "Hello Events !";
body.appendChild(h1);
console.log(h1);

h1.onclick = function(){
  console.log("I am a function one 1");
};
console.log(h1.onclick);
h1.onclick = ()=> console.log("I am function two 02");

console.log(h1.onclick);

// ! ==============================================

let button = document.createElement('button');
button.innerText = "Click Me";
body.appendChild(button);

button.onmouseover = function(){
  console.log(" I hovered the mouse here ");
}

button.onmouseout = function(){
  console.log("Pushed back your pointer");
}

// ^ Actions on forms =======================

let userName = document.getElementsByName('userName')[0];
userName.onchange = function(event){
  //  console.log(event);
   console.log(event.target);
   console.log(event.target.value);
}

let form = document.querySelector('form');
console.log(form);

form.onsubmit = function(e){
   e.preventDefault();

   console.log(e);
   
  //  console.log(e.timeStamp);
  //  console.log("form submitted");

   let userName = document.getElementsByName("userName")[0].value;
   let email = document.getElementsByName("email")[0].value;
   let password = document.getElementsByName("password")[0].value;

   console.log({
    userName : userName,
    password : password,
    email: email
   });


};


 

// console.log(document.getElementsByName('email'));