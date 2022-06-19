import React from 'react'
import "./projectlist.css"
import Project1 from "./Project1.js"
import Project2 from "./Project2.js"

function ProjectList() {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>My Projects</h1>
            <p className='pl-desc'>I worked on projects which are related to datascience. Some of my projects are below.</p>
        </div>
        <div className='pl-list'>
            <Project1/>
            <Project2/>
        </div>
    </div>
  )
}

export default ProjectList