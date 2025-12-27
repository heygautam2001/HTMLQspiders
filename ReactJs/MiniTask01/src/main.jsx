import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import MyRoutes  from './Routes/MyRoutes.jsx'
// import { MyRouter } from './Routes/MyRoutes.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router = {MyRoutes}>
    <App />  
    </RouterProvider>
    

 </StrictMode>,              
);






