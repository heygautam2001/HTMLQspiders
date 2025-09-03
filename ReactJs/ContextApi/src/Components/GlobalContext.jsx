import React, {  createContext } from 'react'

export let globalContextApi = createContext();
const GlobalContext = ({children}) => {
  return (
    <globalContextApi.Provider value={{name : "Hello"}}>
      {children}
    </globalContextApi.Provider>
  )
}

export default GlobalContext