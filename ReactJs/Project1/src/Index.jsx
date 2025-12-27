import React from "react";
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from "react";

import App from './App.jsx';

// ReactDOM.render(
// <App/> , 
// document.getElementById('root')

// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
