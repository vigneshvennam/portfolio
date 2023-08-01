import React from 'react'
import './Home.css'
import photo from "../images/passphoto.jpg"




   

function Home() {
  return (
    
    <div className="aboutme">
        <div className="layout">
            <main className="container">
                <br></br>
            <h1>Introduction.</h1>
            <div className="card">
                
               <img className="photo" src={photo} alt="personal_image" />
                <p>To secure an entry-level position in a dynamic organization where I can apply my Problem Solving
                    skills and knowledge to contribute to the growth of the company, while learning and gaining experience in the
                    industry.
                </p>
            </div>
            <br></br>
                <h1>Certificates</h1>
            <div className="card">
                <ul>
                    <li>NPTEL Certification in <a href="https://drive.google.com/file/d/15O8TBmOFQ8reWwB1nICDJAF_oOO-FR5G/view">DATA ANALYTICS WITH PYTHON</a> with Elite Silver Grade, 2021</li>
                    <br></br>
                    <li>DATA STRUCTURES AND ALGORITHMS Certification from SMART INTERVIEWS.</li>
                    <br></br>
                    <li>MERN STACK DEVELOPER Certification from MASTERSCODING.</li>
                </ul>
            </div>
            <br></br>
            <h1>Achievements</h1>
            <div className="card">
                <ul>
                    <li>Club Executive : Being club executive of VJ DATA QUESTERS , I along with my team conducted
                        many technical and non-technical events in college.</li>
                        <br></br>
                    <li>Knowledge Sharing Sessions: Platform to share thonghts about Datascience.</li>
                    <br></br>
                    <li>Mentored students in art of living event.</li>
                </ul>
            </div>
                
            </main>
            <article className="container">
                <br></br>
            <h1>Skills</h1>
            <div className="card">
                <ul>
                    <li>C++</li>
                    <li>Python</li>
                    <li>ReactJs</li>
                    <li>NodeJs</li>
                    <li>Mongodb</li>
                    <li>SQL</li>
                    <li>DataStructures and Algorithms</li>
                </ul>
            </div>
            <br></br>
            <h1>Strengths</h1>
            <div className="card">
                <ul>
                    <li>Teamwork and Collaboration</li>
                    <li>Time Management</li>
                    <li>Quick Learner</li>
                    <li>Creative Thinking</li>
                </ul>
            </div>
            <br></br>
            <h1>Interests</h1>
            <div className="card">
                <ul>
                    <li>Reading Books</li>
                    <li>Writing</li>
                    <li>Cooking</li>
                </ul>
            </div>
            </article>
        </div>
    </div>
  )
}

export default Home