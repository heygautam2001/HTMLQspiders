
// import ChildComponent from './ChildComponent'
// ! ======== PROPS ==============
/*
- In short , we call properties as props in react js,
- If we want to share the data b/w  the component then we have to 
  to use props ...
*/

// ! ======= Passing Props =========
// ? Case 1
/*
function App() {
  console.log(" I am from App component...");
  return(
     <>

     <h1>I am from App component</h1>
     <ChildComponent name = "Priyanshi" course="JFS" age = "20" />
     <ChildComponent name = "Ketan" course="PFS" age = "23"/>
     <ChildComponent name = "Rohit" course="MERN" age = "22"/>
     
     </>
  )
}
export default App;

*/

// ? Case 2 : 

/*
import React from 'react'

function App() {
  console.log("I am from component");
  return (
    <>
    <ChildComponent
     name = "Ankit"
     age = {22}
     course = "Java Full Stack"
     skills = {["html" , "css" , "js" , "react js"]}
     isPlaced = {true}
     friend = {{
      sname: "srishti",
      yof: 5,
      friend_package: 11,
     }}
     isMarried = {5}
     handleHover = {()=>{
      console.log("You hovered here");
     }}
    />

    </>
  )
}

export default App

*/

// ! ========== Props Children =========
/*
import ChildComponent from './ChildComponent'
const App = () =>{
  console.log(" I am from component");
  return (
    <>
    <h1>I am from App Component</h1>
    <ChildComponent name = "Gautam" course= "JFS" age = {21}>
      <h1>I am Child 1</h1>
      <h2>I am Child 2</h2>
      <h1>I am child 3</h1>
    </ChildComponent>
    </>
  )
}
export default App;
*/

// ! =============Props destructuring==========

import ChildComponent from './ChildComponent'

const App = ()=>{
  console.log("I am from App component");

  return(
    <>
    <h1>I am from App Component</h1>
    <ChildComponent name = "pragya" course = "MERN" age = {20} isPlaced={true}></ChildComponent>
    <ChildComponent name = "ketan" course = "PFs" Marks = {988} isPlaced={true} > </ChildComponent>
    <ChildComponent course="PFS" marks = {988} address = "Delhi"></ChildComponent>
    <ChildComponent name = "Srishti" company = "Goo00gle" address="Delhi"></ChildComponent>
    </>
  )
}

export default App;


// ! ========== Props Drilling ==========
/*
import ChildComponent from './ChildComponent';

const App = props =>{
  console.log("I am from App Compinent");
  console.log(props);

  let data = "Shivam";
  return (
    <>
    <h1>I am from parent Component</h1>
    <p>Name  : {data}</p>
     <ChildComponent data = {data}></ChildComponent>
    </>
  )
}
 export default App;

 */

 // ! ======= Prop Types ==========
