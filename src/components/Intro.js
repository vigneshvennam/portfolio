import React from 'react'
import  "./Intro.css"
import myimg from "../img/VIG2.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'




function Intro() {
  return (
    <div className='i'>
        <div className='i-left'>
          <div className='i-left-wrapper'>
            <h2 className='i-intro'>Hello, My name is</h2>
            <h1 className='i-name'>Vignesh.</h1>
            <div className='i-title'>
              <div className='i-title-wrapper'>
                <div className='i-title-item'>Writer</div>
                <div className='i-title-item'>Chef</div>
                <div className='i-title-item1'>Datascience enthusiast</div>
              
                <div className='i-title-item'>Content Creater</div>
              </div>
            </div>
            
            
            <div className='i-desc'>
             I'm passionate about data science. Intrested in learning statistics, machine learning, deep learning ,NLP . I love learning new things. 
            </div>
            <div className="logos">
              <a href="https://github.com/vigneshvennam">
              <FontAwesomeIcon icon={faGithub} className="github p-md-2 " ></FontAwesomeIcon>
              </a>
              <a href="https://www.instagram.com/vignesh_vennam/">
              <FontAwesomeIcon icon={faInstagram} className="insta p-md-2"></FontAwesomeIcon>
              </a>
              <a href="https://www.linkedin.com/in/vennam-vignesh-b589bb204/">
              <FontAwesomeIcon icon={faLinkedin} className="linkid p-md-2"></FontAwesomeIcon>
              </a>
            </div>
            
          </div>
        </div>
        <div className='i-right'>
          
          <img src={myimg} alt="" className="i-img"/>
        </div>
    </div>
  )
}

export default Intro