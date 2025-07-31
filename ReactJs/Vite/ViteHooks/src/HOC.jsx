// ! ============= HOC ================
/*
- While exporting the component , we have to export as an argument of HOC component.
- HOC component will take a prop which contains the argument component information.
- HOC component must and should return a function (which is  HOC component)
- INside the function , we have top return the received component. (Which means we sending as a child of HOC component)
*/

import React from 'react'
const HOC = (ComponentName) => {
  console.log(ComponentName);
  return (props) =>{
    console.log(props);
    return(
      <>
      <h1>I am from HOC Component</h1>
      <ComponentName
      course = "JFS / PFS / MERN"
      insttitute = "qspiders delhi"
      wantJob = {true}
      gotjob = {false}
      studentName = {props.sname}      
      />
      </>
    )
  }
 
}

export default HOC