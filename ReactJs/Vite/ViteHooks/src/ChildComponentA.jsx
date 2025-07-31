/*
import React from 'react'
import HOC from './HOC'

const ChildComponentA = (props) => {
  console.log("I am from componentA",props);
  return (
   <>
   <h2>I am from ChildComponentA</h2>
   </>
  )
}

export default HOC(ChildComponentA);

*/

// ! ============= Context API [consuming data using consumer way]=========

import { MyContext } from "./App";
import React from "react";

const ChildComponentA = ()=>{
  console.log("I am Child Component");

  return(
    <>
    <h1>I am from Child Component</h1>

    <MyContext.Consumer>
      {
        (data)=>{
          console.log(data);

          return(
            <>
            <h1>I am using Data here</h1>

            {
              data.map((val,ind)=>{
                console.log(val,ind);

                return (
                  <React.Fragment key = {ind}>

                    <h3>Name : {val.name}</h3>
                    <p>Username : {val.username}</p>
                    <p>email : {val.email}</p>

                  </React.Fragment>
                  
              )
              })
            }
            </>
          )
        }
      }
    </MyContext.Consumer>
    </>
  )
}
export default ChildComponentA;