import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from "./Components/Menu.jsx"
import Rodape from "./Components/Rodape.jsx"

function App() {

  return ( 
  <>
    <Menu/>
    <Outlet/>
    <Rodape/>
  </>
  )
}

export default App
