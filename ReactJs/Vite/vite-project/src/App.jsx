// ! ================ Conditional remndering ===========

/*
1. if , if-else , if else if , switch case 
2. Ternary operator

3. short hand circuit operator (LOGICAL AND OPERATOR)
*/

// ? CASE 1
// IF ELSE CONDITIONS
// WE CANNOT USE IF ELSE BLOCK INISIDE HTML CODE..
/*
import { useState } from "react";

import React from 'react'

const App = () => {
let [number , setNumber] = useState(0);
   if(number % 2 == 0){
     return(
      <>
      <h1>I am App Component</h1>
      <h2>Number : {number}</h2>
      <h2>
        <button onClick={()=>{setNumber(number+1)}}>Update</button>
        <h2>status : Even</h2>

      </h2>
      </>
     )
    }else{
      return(
        <>
        <h1>I am App Component</h1>
      <h2>Number : {number}</h2>
      <h2>
        <button onClick={()=>{setNumber(number+1)}}>Update</button>
        <h2>status : odd</h2>
      </h2>
        </>
      )
    }
}

export default App

*/

// ? CASE : 2
/*
import { useState } from "react";

import React from 'react'

const App = () => {
let [number , setNumber] = useState(0);
   if(number % 2 == 0){
     return(
      <>
      
      <h2>Number : {number}</h2>
      <h2>
        <button onClick={()=>{setNumber(number+1)}}>Update</button>
        <h2>Number is divisible by 2</h2>

      </h2>
      </>
     )
    }else if(number % 3 == 0){
      return(
        <>
        <h2>Number : {number}</h2>
      
      <h2>
        <button onClick={()=>{setNumber(number+1)}}>Update</button>
        <h2>Number is divisible by 3</h2>
      </h2>
        </>
      )
    }
    else if(number % 4 == 0){
      return(
        <>
        <h2>Number : {number}</h2>
      
      <h2>
        <button onClick={()=>{setNumber(number+1)}}>Update</button>
        <h2>Number is divisible by 4</h2>
      </h2>
        </>
      )
    }
    else if(number % 5 == 0){
      return(
        <>
        <h2>Number : {number}</h2>
      
      <h2>
        <button onClick={()=>{setNumber(number+1)}}>Update</button>
        <h2>Number is divisible by 5</h2>
      </h2>
        </>
      )
    }
    else{
      return(
        <>
        <h2>Number : {number}</h2>
      
      <h2>
        <button onClick={()=>{setNumber(number+1)}}>Update</button>
        <h2>Number is divisible by 1</h2>
      </h2>
        </>
      )
    }
}

export default App

*/

// ? CASE : 03
// SWITCH CASE

// ? CASE 4 :
// TERNARY OPERTATOR
/*
import { useState } from "react";

import React from 'react'

const App = () => {
let [number , setNumber] = useState(0);
   
     return(
      <>
      <h1>I am App Component</h1>
      <h2>Number : {number}</h2>
      <h2>
        <button onClick={()=>{setNumber(number+1)}}>Update</button>
        <h2>status :{number % 2 == 0 ? "Even" : "odd" }</h2>
        </h2>

        <h2>
          status : {number % 2 == 0 
          ? "Dividible by 2"
          :number % 3 == 0 
          ? "Divisible by 3"
          : number % 4 == 0 
          ? "Divisible by 5"
          : number % 5 
          ?"Divisible by 5"
          :"Divisiblle by 1"
           }
        </h2>
      </>
     )
    
      
    }


export default App

*/
/*
import React from "react";
import React from "react";

const App = () => {
  let data = [
    { sname: "dhwani", course: "MERN", gotjob: false },
    { sname: "priyanshi", course: "JFS", gotjob: false },
    { sname: "Aman", course: "MERN", gotjob: false },
    { sname: "Yash", course: "JFS", gotjob: false },
    { sname: "ketan", course: "PFS", gotjob: true },
  ];

  return (
    <>
      <h1>I am a component</h1>
      {data.map((student, idx) => {
        console.log(student);

        return (
          <React.Fragment key={ind}>
            <h2>Name : {student.sname}</h2>
            <p>course : {student.course}</p>
            <p>Got Job : {student.gotjob ? "✅" : " ❌"}</p>
            <p>Got Job : {student.gotjob && "✅"}</p>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default App;
*/

// ! Example 2 :

/*

import React, { useState } from 'react'
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { BiSolidContact } from "react-icons/bi";
import { GrLogin } from "react-icons/gr";




const App = () => {
  let [toggle , setToggle] = useState(false);

  return (
    <>
    <span onClick={()=> setToggle(!toggle)}>
      {toggle ? <FaToggleOn />:<FaToggleOff />}
    </span>
    <h4><FaHome /> {toggle ? "Home" : ""}</h4>
    <h4><FcAbout />{toggle && "About"}</h4>
    <h4><BiSolidContact />{toggle && "Contact"}</h4>
    <h4><GrLogin />{toggle && "Login"}</h4>
    </>
  )
}

export default App

*/
/*
import React, { useState } from 'react'
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { BiSolidContact } from "react-icons/bi";
import { GrLogin } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import Sidebar from './Sidebar';


const App = () => {
  let [toggle , setToggle] = useState(false);

  return (
    <>
    <span onClick={()=> setToggle(!toggle)}>
      {toggle ? <FaBars />:<FaCaretDown />
      }
    </span>
    <div>
    {toggle && <Sidebar/>}
    </div>
    </>
  )
}

export default App
*/



/*
import { useState } from 'react';
import { ImNewTab } from "react-icons/im";
import { BsGear } from "react-icons/bs";
import { LiaGemSolid } from 'react-icons/lia';
import { FaBars } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const App=()=>{
let [toggle,setToggle]=useState(false)
return(
<>
  {
    toggle?
    <section style={{height:'100vh',overflowY:'hidden', width:'300px',backgroundColor:'#f0f4f9',overflow:'hidden'}}>

    <div style={{display:'flex',margin:'25px',gap:'200px', alignItems:'center' } }>
    <span onClick={()=>{setToggle(!toggle)}} style={{fontSize:'20px',color:'#5e5e5e',cursor:'pointer',

   }}><FaBars/></span>


<span style={{fontSize:'20px',color:'#5e5e5e'}}><FaCaretDown/> </span>
</div>
<div style={{fontWeight:'500', color:'#5e5e5e',marginLeft:'30px',marginTop:'60px', display:'flex',alignItems:'center',gap:'20px'}}>
  <span><ImNewTab/></span>
<span style={{fontSize:'14px'}}> New Tab</span>
</div>


<div style={{fontWeight:'500', color:'#5e5e5e',marginLeft:'30px',marginTop:'350px', display:'flex',alignItems:'center',gap:'20px'}}>
  <span><LiaGemSolid/></span>
<span style={{fontSize:'14px'}}>Explore Gems</span>
</div>

<div style={{fontWeight:'500', color:'#5e5e5e',marginLeft:'30px',marginTop:'30px', display:'flex',alignItems:'center',gap:'20px'}}>
  <span><BsGear/></span>
<span style={{fontSize:'14px'}}>Settings & help</span>
</div>
</section>
  :
  <section style={{height:'100vh',overflowY:'hidden', width:'65px',backgroundColor:'#f0f4f9',overflow:'hidden'}}>

  <div style={{display:'flex',margin:'25px',gap:'200px', alignItems:'center' } }>

   <span onClick={()=>{setToggle(!toggle)}} style={{fontSize:'20px',color:'#5e5e5e',cursor:'pointer',
   }}><FaBars/></span>

</div>
<div style={{fontWeight:'500', color:'#3e3e3e',marginLeft:'30px',marginTop:'60px', display:'flex',alignItems:'flex-end',gap:'20px'}}>
  <span><ImNewTab/></span>
<span style={{fontSize:'14px'}}></span>
</div>
<div style={{fontWeight:'500', color:'#5e5e5e',marginLeft:'30px',marginTop:'350px', display:'flex',alignItems:'flex-end',gap:'20px'}}>
  <span><BsGear/></span>
<span style={{fontSize:'14px'}}>Settings</span>
</div>
</section>
   
    
  }
  
  <h3 style={{position:'absolute',top:'250px',left:'500px',fontSize:'40px',color:'#000000',fontFamily:'' }}>Hii , Welcome to ChatGPt</h3>
   </>
);



}

export default App;
*/

// ! ============= useRef() Hook =========================

/*
- import useRef Hook
- store in a varable
  let variableName = useRef();
- use this inm any element by using ref props
*/

//? case 1:

import { useRef } from "react";

import React from 'react'

export const App = () => {
  let h1Ref = useRef();
  
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();

  console.log(h1Ref);
  let handleSubmit = ()=>{
    console.log(emailRef);
    console.log(emailRef.current.value);
    console.log(passwordRef);
    console.log(passwordRef.current.value);
    console.log(nameRef);
    console.log(nameRef.current.value);

    console.log(data);
  }
  return (
    <>
    <h1 ref={h1Ref} onClick={handleSubmit}> I am <span>App</span> Component</h1>
    <form >
      <p>
        <label htmlFor="user_name">Name : </label>
        <input type="text" id="user_name" ref={nameRef}/>
      </p>

      <p>
        <label htmlFor="email_name"> Email: </label>
        <input type="text" id="email_name" ref={emailRef}/>
      </p>

      <p>
        <label htmlFor="password_name"> Email: </label>
        <input type="password" id="password_name" ref={passwordRef}/>
      </p>

      <p>
        <button>Submit</button>
      </p>



      </form>
    </>

    
  );
}
export default App;