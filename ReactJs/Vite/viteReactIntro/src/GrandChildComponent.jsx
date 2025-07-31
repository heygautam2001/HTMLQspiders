import React from 'react'

function GrandChildComponent(props) {
  console.log("I am from GrandChild Compnent");
  console.log(props);
  return (
    <>
    <h2>I am from Grandchild Component </h2>
    <p>Name : {props.data.data}</p>
    </>

  )
}

export default GrandChildComponent