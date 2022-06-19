import React from 'react'
import "./contact.css"
import phone from "../img/phone.png"
import email from "../img/email.jpg"
import { useRef } from 'react'
import emailjs from 'emailjs-com';
import {useState} from "react"
import {useContext} from "react"
import {ThemeContext} from "../context"


function Contact() {
    const formRef=useRef()
    const [done,setDone]=useState(false)
    const theme=useContext(ThemeContext)
    const darkMode=theme.state.darkMode;

    const handleSubmit=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_kltqbk1', 'template_mbr6wb7', formRef.current, 'UOA0QF5cALgn6bhh4')
        .then(
        (result) => {
            console.log(result.text);
            setDone(true)
        }, 
        (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className='c-wrapper'>
            <div className='c-left'>
                <h1 className='c-title'>You can contact me.</h1>
                <div className='c-info'>
                    <div className='c-info-item'>
                        <img src={phone} alt='' className='c-icon'></img>
                        +91 9553171644
                    </div>
                    <div className='c-info-item'>
                        <img src={email} alt='' className='c-icon'></img>
                        vennamvignesh@gmail.com
                    </div>
                </div>
            </div>
            <div className='c-right'>
                <p className='c-desc'>
                    Hey! you can contact me.  
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    < input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Name" name="user_name"></ input >
                    < input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"></ input>
                    < input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Email" name="user_email"></input>
                    <textarea style={{backgroundColor:darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
                    <button>Submit</button>
                    {done && "Thank You..."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact