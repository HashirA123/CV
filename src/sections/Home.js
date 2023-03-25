import React from 'react'
import "../styles/Home.css"
import { useEffect } from 'react'
import Aos from 'aos'
import developer from "../images/developer_2.png"
import 'aos/dist/aos.css'


function Home() {
  useEffect(function(){
    Aos.init({
      duration : 1000
    })
  }, []);
  return (
    <div id='Home' className='home'>
      <div className="home-flex">
        <div className="left-content" data-aos = "fade-down" data-aos-delay= "2000">
          <p>Hello, My name is</p>
          <h1>Hashir</h1>
          <h2>And I'm a  <span className="typing"></span></h2>
          <a href="Resume HA.pdf" >Download CV</a>
        </div>
        <div className="right-content" data-aos = "fade-up" data-aos-delay= "2000">
          <img src={developer} alt=""  />
        </div>
      </div>
    </div>
  )
}

export default Home