// Receiving props 
import React from "react";
/*
function ChildComponent(props) {
  console.log(props);
  console.log("I am from ChildComponent");
  return (
    <>
    <h4>I am from child Component</h4>
    <h3>Name : {props.name}</h3>
    <h3>Course : {props.course}</h3>
    <h3>Age : {props.age}</h3>
    </>
  )
}
export default ChildComponent;
*/

/*
const ChildComponent = (props) => {

  const handleHover = (e)=>{
     console.log("Mouse is Hovered");
  }
  return (
    <>
      <h1>I am from ChildComponent</h1>
      
      <p>
        <b>Name : </b> {props.name}
      </p>
      

      <p>
        <b>Age : </b> {props.age}
      </p>
      

      <p>
        <b>course : </b> {props.course}
      </p>
      

      <p>
        <b>skills : </b> {props.skills.join(" , ")}
      </p>
      

      <p>
        <b>Friend : </b> {props.friend.sname} , {props.friend.yof} ,{" "}
        {props.friend.friend_package}
      </p>
      


      <p>
        <b>Friend : </b>
        {props.friend["sname"]} , {props.friend["yof"]},
        {props.friend["friend_package"]}
      </p>
      

      <p>
        <b>isPlaced : </b>
        {props.isPlaced == true ? "Yes" : "No"}
      </p>
      

      <p>
        <b>isMarriedf : </b>
        {props.isMarried == undefined ? "No" : props.isMarried}
      </p>
      


      <button onMouseOver={props.handleHover}>Hover Here</button>
    </>
  );
};

export default ChildComponent;

*/

// ! ======== Props Children ============
/*
const ChildComponent = props =>{
   console.log(" I am from child component");
   console.log(props);

   return (
    <>
    <h4>I am from Child Component</h4>
    {props.children}
    </>
   )
}
export default ChildComponent;
*/

// ! ========= Props Destructuring ==============]

/*
const ChildComponent = ({ name , course , age , isPlaced} )=>{
  
  console.log("I am from Child Component");
  return(
    <>
    <h4>I am from child component</h4>
    <h4> Name : {name}</h4>
    <h4>Course : {course}</h4>
    <h4>Age : {age}</h4>
    <h4>isPlaced:{isPlaced ? "Yes" : "No"}</h4>
    </>
  )
}

export default ChildComponent;
*/
//! =================== Default props ===================

/*
we can define defaukt props in 2 ways 
- 1. While destructuring
- 2. ComponentName.defaultprops
*/

// ? case 1 : 
/*
const ChildComponent = props => {
  console.log("I am from child component");
  console.log(props);

   let {
    name = "Name not defined",
    age = 18,
    course = "SDLC",
    isPlaced = false,
    marks = 0,
    address = "India",
    company = "Abhi bus hum maze m hai"

   } = props;

   return(
    <>
   <h4>I am from child component</h4>
    <h4> Name : {name}</h4>
    <h4>Course : {course}</h4>
    <h4>Age : {age}</h4>
    <h4>isPlaced:{isPlaced ? "Yes" : "No"}</h4>
    <h4>Address : {address}</h4>
    <h4>Company Name : {company}</h4>

    </>
   )
}
 export default ChildComponent;

*/

// ? Case 2:
/*
const ChildComponent = props =>{
  console.log(" I am from child component");
  console.log(props);

  return (
    <>
    <h2>I am from child component</h2>
    <h4>I am from child component</h4>
    <h4> Name : {name}</h4>
    <h4>Course : {course}</h4>
    <h4>Age : {age}</h4>
    <h4>isPlaced:{isPlaced ? "Yes" : "No"}</h4>
    <h4>Address : {address}</h4>
    <h4>Company Name : {company}</h4>


    </>
  )
}

ChildComponent.defaultProps = {
  name : "Not Mentioned",
}

export default ChildComponent;
*/
// ! ======== props Drilling =====

import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = props =>{
  console.log("I am from Child Component");
  console.log(props);

  return(
    <>
    <h2>I am child Component</h2>
    <p>Name : {props.data}</p>
    <GrandChildComponent data  = {props}></GrandChildComponent>
    </>
  )
}
export default ChildComponent;




