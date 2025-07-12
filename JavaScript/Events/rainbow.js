// Code for creating rainbow

let section = document.createElement("section");

let red = document.createElement("div");
let orange = document.createElement("div");
let yellow = document.createElement("div");
let green = document.createElement("div");
let blue = document.createElement("div");
let indigo = document.createElement("div");
let violet = document.createElement("div");

// appending the section to body and inside section append the colors
document.body.appendChild(section)
section.append(red , orange , yellow , green , blue , indigo , violet);

section.style.cssText = `
// border : solid red;
height : 100vh;
display : flex;
`
red.style.cssText = `flex : 1 ; `
orange.style.cssText = `flex : 1;`
yellow.style.cssText = `flex : 1;`
green.style.cssText = `flex : 1;`
blue.style.cssText = `flex : 1;`
indigo.style.cssText = `flex : 1;`
violet.style.cssText = `flex : 1;`

red.addEventListener("mouseover" , ()=>{
  red.style.cssText += `background-Color : red;`;
})

red.addEventListener("mouseout" , ()=>{
  red.style.cssText += `background-Color : white;`;
})

orange.addEventListener("mouseover" , ()=>{
  orange.style.cssText += `background-Color : orange;`;
})

orange.addEventListener("mouseout" , ()=>{
  orange.style.cssText += `background-Color : white;`;
})

yellow.addEventListener("mouseover" , ()=>{
  yellow.style.cssText += `background-Color : yellow;`;
})

yellow.addEventListener("mouseout" , ()=>{
  yellow.style.cssText += `background-Color : white;`;
})

green.addEventListener("mouseover" , ()=>{
  green.style.backgroundColor = "green";
})

green.addEventListener("mouseout" , ()=>{
  green.style.backgroundColor = "white";
})

blue.addEventListener("mouseover" , ()=>{
  blue.style.backgroundColor = "blue";
})

blue.addEventListener("mouseout" , ()=>{
  blue.style.backgroundColor = "white";
})

indigo.addEventListener("mouseover" , ()=>{
  indigo.style.backgroundColor = "indigo";
})

indigo.addEventListener("mouseout" , ()=>{
  indigo.style.backgroundColor = "white";
})

violet.addEventListener("mouseover" , ()=>{
  violet.style.backgroundColor = "violet";
})

violet.addEventListener("mouseout" , ()=>{
  violet.style.backgroundColor = "white";
})

