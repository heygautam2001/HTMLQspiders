import React from 'react'

function Register() {
  return (
    <>
    <section className='h-dvh w-dvw bg-purple-600'  >
      <section className='flex flex-col justify-center items-center gap-5' >
        <h1 className='text-center text-4xl font-mono mt-20'>Register</h1>
        <section className='h-120 w-100  border-2 border-solid border-blue-900 rounded-xl flex flex-col justify-around items-center bg-white'>
          <h1 className='text-3xl self-center font-mono font-medium'>Signup Form</h1>
          <form className='' action="">
            <label className='font-mono ' htmlFor="Username">Username : </label><br />
            <input className='h-10 w-80 m-1.5 border-2 border-gray-300 rounded-lg' type="text" id='Username' placeholder='Enter username' /><br />
            <label className='font-mono ' htmlFor="email">Email : </label><br />
            <input className='h-10 w-80 m-1.5 border-2 border-gray-300 rounded-lg' type="text" id='email' placeholder='Enter your mail id'/><br />
            <label className='font-mono ' htmlFor="passwrd">Password : </label><br />
            <input className='h-10 w-80 m-1.5 border-2 border-gray-300 rounded-lg' type="password" name="" id="passwrd" placeholder='Enter password' /><br />
            <label className='font-mono ' htmlFor="confirm-password">Confirm Password : </label><br />
            <input className='h-10 w-80 m-1.5 border-2 border-gray-300 rounded-lg' type="password" name="" id="confirm-password" placeholder='confirm password'/><br />

            <button className='h-11 w-80 border-2 rounded-lg bg-blue-500 text-white m-1.5' type="submit">Signup</button>

          </form>
        </section>
      </section>

    </section>
    </>
  )
}

export default Register