import Aos from 'aos';
import React, { useEffect } from 'react'
import myFace from "../images/myFace.jpg"
import '../styles/Experience.css'
import 'aos/dist/aos.css'

function Experience() {
  useEffect(function(){
    Aos.init({
      duration : 1000
    })
  }, []);
  return (
    <div id="About" className="about">
      <h1>About me</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={myFace} alt="" />
        </div>
        <div  className="right-content">
        <h2>I'm Hashir</h2>
        <p>I am a software engineering student at the University of Calgary, currently in my final year. 
        Through my academic career, I have built a strong set of skills in various programming languages, most notably Java, C/C++, 
        and many useful programming paradigms. I also have valuable experience when it comes to version control through GIT, and web 
        development with JavaScript, PHP, and MySQL. Along with the academic skills, I am also building strong interpersonal and 
        communication skills through volunteering in places like the Students Union at U of C. Though there may be skills that 
        I have not yet learned or perfected, I am always up to new challenges, always seeking to better myself as a person and professional. </p>

        </div>
      </div>
    </div>
  )
}

export default Experience