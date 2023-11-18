import React from "react";
import "../styles/Home.css";
import { useEffect } from "react";
import Aos from "aos";
import developer from "../images/developer_2.png";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";

function Home() {
  useEffect(function () {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="Home" className="home">
      <div className="home-flex">
        <div className="left-content" data-aos="fade-down" data-aos-delay="500">
          <p>Hello, My name is</p>
          <h1>Hashir Ahmed</h1>
          <h2>
            <TypeAnimation
              sequence={[
                "Engineer",
                1000,
                "Developer",
                1000,
                "Versatile",
                1000,
                "Gamer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <a href="Resume HA.pdf">Download CV</a>
        </div>
        <div className="right-content" data-aos="fade-up" data-aos-delay="1000">
          <img src={developer} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
