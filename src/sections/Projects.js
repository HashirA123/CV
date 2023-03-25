import Aos from 'aos';
import React, { useEffect } from 'react'
import '../styles/Projects.css'
import ProjectBox from '../components/ProjectBox';
import 'aos/dist/aos.css'


import capstone from  '../images/Capstone.png'
import EduConnect from  '../images/EduConnect.jpg'
import YYCAdventure from  '../images/YYCAdventure.jpg'

function Projects() {
  useEffect(function(){
    Aos.init({
      duration : 5000
    })
  }, []);
  return (
    <div id='Projects' className='projects'>
      <h1>My Projects</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox title = "CalgaryHacks 2020" img= {YYCAdventure} link = "https://devpost.com/software/yyc-adventures"  />
            <ProjectBox title = "CalgaryHacks 2021" img= {EduConnect} link = "https://devpost.com/software/educonnect-vu8xic"  />
            <ProjectBox title = "Capstone Project 2023" img= {capstone}  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects