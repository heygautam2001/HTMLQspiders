import React from 'react'
import style from "./styles/ChildComponent.module.css"

function ChildComponent(){
  return (
    <>
    <section >
      <nav id={style.navbar}>
        <a href="#" id='Home'>Home</a>
        <a href="#" id='about'>About</a>
        <a href="#" id='services'>Services</a>
        <a href="#" id='contacts'>Contacts</a>
      </nav>
    </section>
    </>
  )
}
export default ChildComponent;