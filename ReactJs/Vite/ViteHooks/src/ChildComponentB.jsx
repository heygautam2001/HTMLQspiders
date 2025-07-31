/*
import React from 'react'
import HOC from './HOC'
const ChildComponentB = (props) => {
  console.log("I am from componentB",props);
  return (
   <>
   <h2>I am from ChildComponentB</h2>
   </>
  )
}

export default HOC(ChildComponentB);
*/


import { MyContext } from "./App";
import React from "react";
import { useContext } from "react";


const ChildComponentB = ()=>{
  console.log("I am Child Component B");

  let data = useContext(MyContext);
  console.log(data);
  return(
    <>
    <h1>I am from Child Component B</h1>
    {
      data.map((val,ind)=>{
        console.log(val,ind);

        return(
          <React.Fragment key = {ind}>
            <h3>Name : {val.name}</h3>
            <p>username:{val.username}</p>
            <p>email : {val.email}</p>

          </React.Fragment>
        )
      })
    }
    </>
  );
};
export default ChildComponentB;