import React from 'react'
import { Outlet } from 'react-router-dom'
import App from '../App'
import Home from '../Components/Home'

const Layout = () => {
  return (
    <>
   <App/>
   <Outlet/>
  </>

  )
}

export {Layout}