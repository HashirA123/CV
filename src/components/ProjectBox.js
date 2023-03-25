import React from 'react'
import '../styles/ProjectBox.css'

import { useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

function ProjectBox(props) {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
      <div className='projectbox'>
        <a href={props.link} target="_blank" rel="noopener noreferrer"><img src={props.img} alt="images" /></a>
        <div className="details">        
          <p>{props.title}</p>
        </div>
    </div>
  )
}

export default ProjectBox