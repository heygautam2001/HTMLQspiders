import React from "react";
import{BrowserRouter , Routes , Route , Link, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Contact from "../Components/Contact";
import Services from "../Components/Services";
import Home from "../Components/Home";
import App from "../App";
import {Layout} from "../Layout/Layout"




// export const MyRoutes = () => {
//   return (
//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<App/>}></Route>
//     <Route path = "/Home" element = {<Home/>}></Route>
//     <Route path = "/contact" element = {<Contact/>}></Route>
//     <Route path = "/services" element = {<Services/>}></Route>
//  </Routes>
//   </BrowserRouter>
//   )
// }

// const MyRouter = createBrowserRouter([

//   {
//     path : "/",
//     element: <App/>

//   },
//   {
//     path : "",
//     element: <Home/>

//   },
  
//   {
//     path : "/contact",
//     element: <Contact/>

//   },
  
//   {
//     path : "/services",
//     element: <Services/>

//   },
  
  

// ])

// export {MyRouter}


// const MyRouter = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>

//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       },
//       {
//         path:"/services",
//         element:<Services/>
//       },
//     ]

//   }
// ])
// export{MyRouter}

const MyRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path= '' element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/> 
      <Route path='services' element={<Services/>}/>

     </Route>
  )
)

export default MyRoutes