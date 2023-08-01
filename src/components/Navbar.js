import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'



function Navbar() {
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click)
    const closeMobileMenu=()=>setClick(false)

   
   
       
      
  return (
    <>
    <nav className='Navbar'>
        <Link to='/' className='navbar-logo'>
            Hey! HI!

        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click?'fas fa-times':'fas fa-bars'}

            />

        </div>
        <ul className={click? 'nav-menu active' : 'nav-menu'}>
            
            <li className='nav-item'>
                
            </li>
            <li className='nav-item'>
                <Link to='/Projects' className='nav-links' onClick={closeMobileMenu}>
                    Projects
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Writings' className='nav-links' onClick={closeMobileMenu}>
                    Writings
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Memories' className='nav-links' onClick={closeMobileMenu}>
                    Memories
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                    Contact Me
                </Link>
            </li>


        </ul>
    </nav>
    </>
  )
}

export default Navbar