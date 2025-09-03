import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import App from './App.jsx'
import ChildComponent from './ChildComponentB.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ChildComponent/> */}
  </StrictMode>,
)
