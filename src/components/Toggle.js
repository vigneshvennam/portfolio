import React from 'react'
import "./toggle.css"
import moon from "../img/moon.png"
import sun from "../img/sun.png"
import {ThemeContext} from "../context"
import {useContext} from "react"
//import {handleClick} from "react"

function Toggle() {
  const theme=useContext(ThemeContext)
  const handleClick=()=>{
      theme.dispatch({type:"TOGGLE"})
  }
  return (
    <div className='t'>
        <img src={sun} alt='' className='t-icon'></img>
        <img src={moon} alt='' className='t-icon'></img>
        <div className='t-button' onClick={handleClick}  style={{left:theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle