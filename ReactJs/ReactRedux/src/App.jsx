import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { decrement ,increment,incrementByAmount,reset} from "./features/counter/counterSlice";


/**
 * Steps to use redux toolkit..
 * 1. create the store
 * 
 * import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store;


 * 2.wrap the app component inside the Provider


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import store  from './store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
  
 * 3.create slices for features
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) =>{
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

  },
})
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,reset } = counterSlice.actions
export default counterSlice.reducer
* 
* 4. Register the reducers inside the store
   import { configureStore } from '@reduxjs/toolkit'
   import counterReducer from './features/counter/counterSlice';

  const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store;


 * 
 */

function App() {
  const count = useSelector((state)=> state.counter.value);
  // const [count, setcount] = useState(count);
  const dispatch = useDispatch();
  function handleIncrementClick(){
      dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement())
      
  }

  function handleReset(){
    dispatch(reset())
  }

  function handleManual(){
    let num = Number.parseInt(prompt("Enter a Number"));
    dispatch(incrementByAmount(num))
  }

  return (
    
    <>
      <div className="container">
        
        <button onClick={handleIncrementClick}>+</button><br />
        <p>count:{count}</p><br />
        <button onClick={handleDecrementClick}>-</button><br /><br />
        <button onClick={handleReset}>reset</button><br /><br />
        <button onClick={handleManual}>Mannual</button><br /><br />


      </div>
    </>
  )
}

export default App
