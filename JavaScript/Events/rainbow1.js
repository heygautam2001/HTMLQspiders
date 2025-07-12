
let colors = ["red" , "orange" , "yellow" , "green" , "blue" , "indigo" , "violet"];

let section = document.createElement("section");
document.body.appendChild(section);
document.body.style.cssText = `
margin : 0;
padding : 0;
box-sizing : border-box;
`
section.style.cssText = `
display : flex;
height : 100vh;
// border : 5px solid black;
`

for (let color of colors) {
  console.log(color);
  let div = document.createElement('div');
  console.log(div);
  section.append(div)
  div.style.cssText = `flex : 1;`
  div.addEventListener("mouseover",()=>{
    div.style.cssText += `background-color : ${color}`
  })

  div.addEventListener("mouseout",()=>{
    div.style.cssText += `background-color : white`
  })

}

console.log(section);