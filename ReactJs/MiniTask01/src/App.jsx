import { useState } from "react";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="flex justify-around items-center h-12 w-dvw bg-black text-white ">

        {/* <a href="/" className='font-serif text-2xl'>Home</a>
    <a href="/contact" className='font-serif text-2xl'>Contact</a>
    <a href="/services" className='font-serif text-2xl'>Servies</a> */}

        
        <Link to="" className="font-serif text-2xl">
          Home
        </Link>
        <Link to="/contact" className="font-serif text-2xl">
          Contact
        </Link>
        <Link to="/services" className="font-serif text-2xl">
          Servies
        </Link>
      </nav>

      {/* <Home />
      <Contact /> */}
    </>
  );
}

export default App;
