// Node.addEventListener("eventName" , "callback" , "useCapture");

let body = document.body;

// ! Example 1 : 

let h1 = document.createElement('h1');
h1.innerHTML = " I am from h1 tag";

body.appendChild(h1);

h1.addEventListener("mouseover", ()=>{
  console.log("I am from mouseover event");

  h1.style.cssText += `
  color : blue;
  `
})

h1.addEventListener("mouseout", ()=>{
  console.log("I am from mouseout event");

  h1.style.cssText += `
  color : black;
  `
})


h1.addEventListener("click", ()=>{
  console.log("I am from click event");

  h1.style.cssText += `
   text-align : center;
  `
});


// !============= Example 2

let student = [
  {
    sname : "Gautam",
    course : "java Full stack",
    skills : ["Html" , "css " , "Java"],
  },

  {
    sname : "Ketan",
    course : "Python Full stack",
    skills : ["Html" , "css " , "Java"],
  },

  {
    sname : "dhwani",
    course : "java Full stack",
    skills : ["Html" , "css " , "Java"],
  },
]

let btn = document.createElement("button");
btn.innerText = "Get student";

body.appendChild(btn);

btn.addEventListener('click' , ()=>{
  // create paragraph
  student.map(student => {
    let p = document.createElement("p");
    console.log(p);

    p.innerHTML = `
    <b>Name : ${student.sname}</b>
    <i> Course : ${student.course}</i>
    <i>Skills : ${student.skills}</i>
    `
    body.appendChild(p);
  });
 
  
})



// ! Example 3

let user_name = document.getElementById("user_name");
console.log(user_name);
user_name.addEventListener("focus" , ()=>{
  user_name.style.cssText += `
  border : 2px solid red;
  outline : 2px solid red;
  border-radius: 10px;
  `
});

user_name.addEventListener("blur" , ()=>{
 user_name.style.cssText = ``;
});

// ! Example 4

let scrollInfo = document.getElementById('scrollInfo');

scrollInfo.style.cssText = `
position : fixed;
top : 600px;
left : 80vw;
`
window.addEventListener("scroll" , ()=>{
  console.log("scrolling");
  console.log(window.scrollX);
  console.log(window.scrollY);

  scrollInfo.innerHTML = `scrollX : ${Math.trunc(scrollX)}px , scrollY : ${Math.floor(scrollY)}px `
})




