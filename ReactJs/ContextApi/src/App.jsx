import { useContext } from "react"
import ComponentA from "./Components/ComponentA"
import ComponentB from "./Components/ComponentB"
import GlobalContext, { globalContextApi } from "./Components/GlobalContext"


function App() {
  let {GlobalContext} = useContext(globalContextApi)
  
  return (
    <>
    <ComponentA/>
    <ComponentB/>
    </>
  )
}

export default App
