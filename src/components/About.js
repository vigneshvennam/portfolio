import React from 'react'
import "./about.css"
import dsimg from "../img/dslogo.png"
import badge from "../img/badge.png"
import c2 from "../img/c2.jpg"


function about() {
  return (
    <div className='a'>
        <div className='a-left'>
          
          <div className='a-card'>
            <img src={dsimg} alt='' className='a-img'></img>
          </div>
        </div>
        <div className='a-right'>
          <h1 className='a-title'> About Me</h1>
          <p className='a-sub'>I'm b.tech 2nd year student from computer science and datascience in VNR vignana jyothi institute of technology.</p>
          <p className='a-desc'>I'm intrested in learning datascience. I wondered how our youtube sending recommendations and how google weather pridicting weather before a day. 
          There are many things which made me fall in love with datascience. Statistics is one of the thing which running all these models from back. These things made me to start play with data.

          </p>
          <div className='a-award'>
            <img src={badge} alt='' className='a-award-img'></img>
            <div className='a-award-texts'>
              <h4 className='a-award-title'>Machine Learning Badge</h4>
              <p className='a-award-desc'>I completed a course in coursera where I learned about differnt machine learning algorithms.</p>
            </div>
          </div>
          <div className='a-award'>
            <img src={c2} alt='' className='a-award-img'></img>
            <div className='a-award-texts'>
              <h4 className='a-award-title'>Data Analytics with python.</h4>
              <p className='a-award-desc'>I completed a course in nptel Swayam where I learned about different analytical techniques with python.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default about