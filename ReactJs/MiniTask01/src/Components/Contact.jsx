import React from 'react'
import "../style.css"
import { CiGlobe } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";


const Contact = () => {
  return (
   <>
   <div className='w-dvw h-170 ' >
     <div className='w-dvw h-40 bg-white flex flex-col items-center justify-center gap-4.5'>
     <h1 className='text-5xl font-serif'>Get In Touch</h1>
     <p className='text-xl font-serif'>We'd Love To Hear from You</p>
 </div>

 {/* Conatiner div for services section */}

 <div className='flex justify-between' >

{/* first */}

 <div className='h-130 w-110 flex flex-col gap-5.5  justify-center'>
 <CiGlobe className='text-7xl ml-3.5'/>
 <h2 className='ml-3.5 text-4xl font-serif'>Press</h2>
 <p className='ml-3.5 text-xl font-serif'>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sed beatae autem, voluptate voluptas ut unde consequatur. Libero, debitis officiis inventore laborum quos voluptas nostrum adipisci ab deserunt sed dicta obcaecati, dignissimos aliquid, commodi .

 </p>
<button type='submit' className='inline-block w-70 h-15 ml-3.5 font-xl font-serif bg-green-600 rounded-2xl text-white'>--- Visit press page --- </button>

</div>

{/* second */}

<div className='h-130 w-110 flex flex-col gap-5.5  justify-center'>
 <MdSupportAgent  className='text-7xl ml-3.5'/>
 <h2 className='ml-3.5 text-4xl font-serif'>Help & Support</h2>
 <p className='ml-3.5 text-xl font-serif'>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sed beatae autem, voluptate voluptas ut unde consequatur. Libero, debitis officiis inventore laborum quos voluptas nostrum adipisci ab deserunt sed dicta obcaecati, dignissimos aliquid, commodi .

 </p>
<button type='submit' className='inline-block w-70 h-15 ml-3.5 font-xl font-serif bg-green-600 rounded-2xl text-white'>--- Visit press page --- </button>

</div>

{/* third */}

<div className='h-130 w-110 flex flex-col gap-5.5 justify-center'>
 <IoIosContacts className='text-7xl ml-3.5'/>
 <h2 className='ml-3.5 text-4xl font-serif'>Sales</h2>
 <p className='ml-3.5 text-xl font-serif'>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sed beatae autem, voluptate voluptas ut unde consequatur. Libero, debitis officiis inventore laborum quos voluptas nostrum adipisci ab deserunt sed dicta obcaecati, dignissimos aliquid, commodi .

 </p>
<button onClick={
  ()=>{
    alert("Your request is submitted")
  }
} type='submit' className='inline-block w-70 h-15 ml-3.5 font-xl font-serif bg-green-600 rounded-2xl text-white'>--- Visit press page --- </button>

</div>

 </div>

<h1 className='text-2xl text-center text-green-700 font-serif m-6'>----- Submit a Support Request -----</h1>
 


   </div> 
   
   </>
  )
}

export default Contact