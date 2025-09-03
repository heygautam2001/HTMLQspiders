// ! ============ Css in React Js ===============
// ! Inline CSS ========

/*
- inine css is exactly similar our traditional inline css
- here we have the properties in an object.
- property names follows lowerCamelCase convention
*/

// ? Case 1:
/*
function App() {
 
  return (
    <>
    <h1 style={{color : "blue" , textAlign : "center"}}>I am Inline css</h1>

    <section style={{display:"flex" , backgroundColor : "crimson" , justifyContent:"space-around"}}>
      <div style={{padding : "20px", color :"white"}}>Home </div>
      <div style={{padding : "20px", color :"white"}}>About</div>
      <div style={{padding : "20px", color :"white"}}>Contact</div>
      <div style={{padding : "20px", color :"white"}}>Services</div>
      <div style={{padding : "20px", color :"white"}}>Login</div>
    </section>
 </>
  )
}

export default App;
*/

// ? Case 2

/*

function App() {

  let h1style = {
    color : "blue",
    textAlign : "center",

  }
  let sectionStyles = {
    display : "flex",
    backgroundColor : "crimson",
   
  };
  let divStyles = {
    
    padding : "10px",
    flex : 1,
    textAlign:"center",
    color : "white"

  };
  return (
    <>
    <h1 style={h1style}> I am inline CSS</h1>

    <section style={sectionStyles}>

      <div style={divStyles}>Home</div>
      <div style={divStyles}>About</div>
      <div style={divStyles}>Contact</div>
      <div style={divStyles}>Services</div>
      <div style={divStyles}>Login</div>

    </section>
    </>
  )
}
export default App;

*/

// ? ========= Module CSS =========================
/*
- Modules css will apply only for selective components
- to save the file ------> filename.module.css
- we have to import it -----> import variablename from "path"
- to provide any id or class names we have to use {variablename.identifier}
*/

/*
 import style from "./styles/productCard.module.css";


const productCard = ()=>{
  return(
    <>
    <h1 style={style.h1}>I am card</h1>
    <p id={style.para1} className={style.p}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius similique perferendis labore tenetur ullam nisi tempore, nostrum voluptates? Fugit rerum at aliquam error ipsa! Hic in corporis quisquam dolore quod beatae at iure nisi doloremque. Doloribus repudiandae quo, debitis incidunt voluptatum eveniet! Veritatis omnis, voluptatum quae sint architecto quam quia iure earum reprehenderit perferendis non molestiae fuga mollitia voluptas necessitatibus quasi tempore, laboriosam magni minus ipsa ad assumenda iusto repellendus? Cupiditate dolorum aliquid natus animi tenetur debitis dolorem facilis accusantium praesentium dignissimos? Debitis praesentium exercitationem temporibus laboriosam asperiores soluta omnis ipsam dicta at minima fuga quae earum, molestiae aut?
    </p>
    <section>
      <div>Home </div>
      <div>About</div>
      <div>Contact</div>
      <div>Login</div>
    </section>
    </>
  )
} 
export default productCard;

*/

/*

// Inine css

import React from 'react'

function App() {
  return (
    <>
    <div style={{height: "100vh"  ,  width:"100vw", display:"flex" , justifyContent:"center" , alignItems:"center" , gap:"10px"}}>
      <div 
      style={{height:"200px" , width : "200px" , border: "2px solid black", textAlign : "center" , backgroundColor : "red"}}>box-1
      </div>
      <div style={{height:"200px" , width : "200px" , border: "2px solid black", textAlign : "center" , backgroundColor : "green"}} >box-2</div>
      <div style={{height:"200px" , width : "200px" , border: "2px solid black", textAlign : "center" , backgroundColor : "blue"}}  >box-3</div>
      <div style={{height:"200px" , width : "200px" , border: "2px solid black", textAlign : "center" , backgroundColor : "yellow"}} >box-4</div>
    </div>
    </>
  )
}

export default App


*/

import React from "react";
import { useState } from "react";

function App() {
  let [stock, setStock] = useState(30);
  return (
    <>
      <h1>stock : {stock}</h1>
      <button
        onClick={() => {
          setStock(stock - 1);
        }}
      >
        dec
      </button>

      <h2>
        
        {stock == 30 && "fullfilled"}
        {stock == 25 && "getting out"}
        {stock == 20 && "only few left"}
        {stock == 10 && "hurry UP"}
        {stock == 0 && "Out of stiock"}

      </h2>
    </>
  );
}

export default App;
