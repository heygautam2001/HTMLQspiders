import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from "react-dom/client"

console.log(React); // it is the main package which maintains the core functionality of react js
console.log(ReactDOM); // This package helps to work with dom

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);


// createRoot -- It will create root element from react , whole react code will render here.

root.render("Hello I am from React Js"); // String 
// if we want to render anything into react root elemnr we have toin use render elemement.


root.render(<h1>Welcome to react world</h1>); // JSX Element.

root.render(
<h1>if you think i am html , you are wiorking wrong buddy..... , I am JSX</h1>

); // JSX 

root.render(
  <section>

    <div>Home</div>
    <div>about</div>
    <div>Contact</div>
    <div>Login</div>
  </section>
); // JSX Element 




// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
