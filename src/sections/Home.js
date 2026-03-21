import React from "react";
import "../styles/Home.css";
import developer from "../images/developer_2.png";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <section className="home page" data-aos="fade-up">
      <div className="home-flex">
        <div className="left-content" data-aos="fade-right" data-aos-delay="150">
          <p>Hello, my name is</p>
          <h1>Hashir Ahmed</h1>
          <h2>
            <TypeAnimation
              sequence={["Engineer", 1200, "Developer", 1200, "Versatile", 1200, "Gamer", 1200]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </h2>
          <a href="Resume HA.pdf">Download CV</a>
        </div>
        <div className="right-content" data-aos="zoom-in" data-aos-delay="250">
          <img src={developer} alt="Developer illustration" />
        </div>
      </div>
    </section>
  );
}

export default Home;
