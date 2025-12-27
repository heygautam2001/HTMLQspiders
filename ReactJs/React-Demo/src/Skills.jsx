import React from 'react'
import { useState } from 'react';
function Skills(){
  const [skills, setskills] = useState([]);
  function handleSkills(event){
    console.log(event.target.value,event.target.checked);
    if(event.target.checked){
      setskills([...skills , event.target.value+" "])
    }else{
      setskills([...skills.filter((item)=> item != event.target.value)])
    }
  }
  return (
    <div>

      <h1>Handles Checkboxes</h1>
      <h2>Choose Your Skills</h2>

      <label htmlFor="php">php</label>
      <input type="checkbox" onChange={handleSkills} name="checkbox" value="php" id="php" /><br /><br />

      <label htmlFor="Node">Node</label>
      <input type="checkbox" onChange={handleSkills} name="checkbox" value="Node" id="Node" /><br /><br />

      <label htmlFor="js">javaScript</label>
      <input type="checkbox" onChange={handleSkills} name="checkbox" value="js" id="js" /><br /><br />

      <label htmlFor="React">React</label>
      <input type="checkbox" onChange={handleSkills} name="React" value="React" id="React" /><br />

      <button>Submit</button>
       <h1>{skills}</h1>
       <h1>{console.log(skills)}</h1>

      


    </div>
  )
}

export default Skills