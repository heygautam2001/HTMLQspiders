// ! ======= component ===========
 /*
 - A react component is a logical block of code.
 - It is nothing bu t a javaScript funtion.
 - component name should start with upperCase letter only
 - we can create compionent in two ways
 1. Class Based Component
 2. Function Based Component.

 - we cannit use component as it is , we have to call as an element ...
 - element should be closed only , either by pairec tag or self closing tag.
 closing tag .
 - Ex: <App></App>
 - Ex : </App>

 */

 // ! Classed based component:

 
//  import {Component} from "react";
//  class App extends Component{
//    render(){
//     return <h1>I am from class based compionent</h1>
//    }
//  }
//  export default App;

// ! Function Based component =========
// ? case 1: Named Function

// import React from 'react';

// function App() {
//   return <h1>I am from function based component</h1>
// }

// export default App

// Case 2: Anonymious function

// import React from 'react'

// const App =   function () {
//   return (
//     <div>App</div>
//   )
// }

// export default App;

// Case 3 : Anonymous funcxtioon
// import React from 'react'

// const App = ()=> {
//   return (
//     <div> I am from Arrow function</div>
//   )
// }

// export default App;

//case 1 Named function
/*
const App=function App(){
  return<h1>i am from class based component</h1>
}
export default App;
*/

//case 2 anonymous function
/*
function App(){
  return<h1>i am from function based anonymous function</h1>
}
export default App;
*/

//case 3 arrow function
/*
const App=()=>{
  return <h1>i am from function based arrow function</h1>
}
export default App;

*/

// ==========JSX=========
/*
-JSX is a syntax extension to JavaScript, commonly used with React,
•⁠  ⁠that allows you to write HTML-like code within your JavaScript files.
•⁠  ⁠It's a way to structure user interface components with a syntax that's similar to XML, but with the full power of JavaScript.
•⁠  ⁠This "markup" is then transformed into regular JavaScript objects (React elements) that the browser can understand. 
*/

// Rule 1;
// we should not return more than one element at a time.
// we have use a parent element or React.Fragmenet or <> </>

// case 1:
/*
const App=()=>{
  return (
<div>
  <h1>i am h1</h1>
  <p>i m para</p>
</div>
  )
}
export default App;
*/

// case 2:
/*
import React from 'react'
const App=()=>{
  return (
    <React.Fragment>
    <h1>i am h1</h1>
  <p>i m para</p>
    </React.Fragment>
  )
}

export default App;
*/

// case 3:
/*
import React from 'react'
const App=()=>{
  return (
    <>
    <h1>i am h1</h1>
  <p>i m para</p>
    </>
  )
}

export default App;
*/
// Rule 2:
// JSx Element  are case senstive
//we have to write in lowerCase sonly
//ir we use uppercase for a tag ,it'll treat as a component.
/*
const App=()=>{
  // return <SECTION>i m section</SECTION>;
  return <section>im section tag</section>
};
export default App;

*/

// Rule 3:
// it follows lowercase conventions.

/*

/*
const App=()=>{
  return (
    <>
    <form action='' onSubmit="">
      <input type='text' onChange="" />
    </form>
    </>
  )
};
export default App;

*/

// rule 4:
// if we want to use javascript variable inside html,we have to use expression{}.
// jss------>html-->return
//html----->js--->{}

/*
const App=()=>{
  let sname="abhishek";
  let age ="22";
  let course="MERN stack"

  console.log(sname);
  console.log(age);
  console.log(course);
  return (
    <>
    <h1>sname:{sname}</h1>
    <h1>age:{age}</h1>
    <h1>course:{course}</h1>
    </>
  )
}

export default App;
*/

// rule 5:
// The common word in html and js will change in jsx
// ex:class---->className
// ex:for----->htmlFor

 /*
const App = () =>{
  return (
    <>
     <nav id= "container">
      <div className="flex-items">Home</div>
      <div className="flex-items">About</div>
      <div className="flex-items">Contact</div>
      <div className="flex-items">Login</div>
     </nav>

     <label htmlFor="userName">Name:</label>
     <input type="text" id="userName" />
    </>
  );
};

export default App;
*/

//?RULE6:
// every element should be closed
// either in paired way or self closing way.


const App =() =>{
  return(
    <>
     <h1>welcome to React JS</h1>
     <hr />
     <p>lorem3 </p>

     <input type="text" />
     <br />
     <input type="text" />
     <br />
     <img src="" alt=""/>
         
    </>
  );
 };

 export default App;

 



 
