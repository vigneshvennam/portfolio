import React from 'react'

import Intro from "./components/Intro"
import About from "./components/About"
import ProductList from './components/ProjectList'
import Contact from './components/Contact'
import Toggle from "./components/Toggle"
import {ThemeContext} from "./context"
import {useContext} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'



function App() {
  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div style={{backgroundColor:darkMode ? "#222":"white", color:darkMode && "white"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  )
}

export default App;