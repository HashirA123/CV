import Aos from "aos";
import React, { useEffect } from "react";
import "../styles/Projects.css";
import ProjectBox from "../components/ProjectBox";
import "aos/dist/aos.css";

import capstone from "../images/Capstone.png";
import EduConnect from "../images/EduConnect.jpg";
import YYCAdventure from "../images/YYCAdventure.jpg";
import dbms from "../images/dbms.jpg";
import ml from "../images/ML.jpg";

function Projects() {
  useEffect(function () {
    Aos.init({
      duration: 5000,
    });
  }, []);
  return (
    <div id="Projects" className="projects">
      <h1>My Projects</h1>
      <div data-aos="fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox
              title="Capstone Project 2023"
              img={capstone}
              link="https://github.com/HashirA123/Flexiform"
            />
            <ProjectBox
              title="ViVi-Art-Gallery DBMS"
              img={dbms}
              link="https://github.com/HashirA123/ViVi-Art-Gallery-DBMS"
            />
            <ProjectBox
              title="Diabetes Medication Prediction"
              img={ml}
              link="https://github.com/HashirA123/diabetes-medication"
            />
            <ProjectBox
              title="CalgaryHacks 2020"
              img={YYCAdventure}
              link="https://devpost.com/software/yyc-adventures"
            />
            <ProjectBox
              title="CalgaryHacks 2021"
              img={EduConnect}
              link="https://devpost.com/software/educonnect-vu8xic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
