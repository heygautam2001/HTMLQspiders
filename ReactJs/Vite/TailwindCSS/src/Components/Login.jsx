import React from 'react'
import "../index.css"

function Login() {
  return (
    <>
    <section className="h-dvh w-dvw bg-purple-600 flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl text-center">Login</h1>
      
      <section className='h-120 w-100 bg-gray-100 flex flex-col justify-around items-center border-2 border-solid border-purple-950 rounded-xl m-5'>
        <div className="content-start self-center"  >
          <p className='text-center text-3xl text-gray-600' >Welcome Back</p>
          <p className='text-center text-gray-500'>Please login to your account</p>
        </div>
        <form action="#abx" method='post' autoComplete='on' >
          <label htmlFor="username" className='font-mono'>Username/Email : </label><br />
          <input className='border-2 border-gray-300 border-solid rounded-lg h-10 w-80 m-2 bg-white' type="text" placeholder="Enter email/password" id="username"/><br />
          <label htmlFor="password" className='font-mono'>Password : </label><br />
          <input className='border-2 border-gray-300 border-solid rounded-lg h-10 w-80 m-2 bg-white' type="password" placeholder="Enter password" id='password' /><br />
          <input type="checkbox" /><span className='font-mono'> Remember Me</span><br />
          <label htmlFor="login"></label>
          <button className='h-10 w-80 border-2 border-solid m-2 rounded-lg text-white bg-purple-500 font-mono' type='submit' id='login'>Log-In</button><br />
          <button className='h-10 w-80   m-2 rounded-lg font-mono' type='submit' >Forgot password ?</button><br />
         
          
        </form>
      </section>

    </section>
    </>
  )
}

export default Login