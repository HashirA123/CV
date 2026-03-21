import React from "react";
import "../styles/Projects.css";
import ProjectBox from "../components/ProjectBox";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import capstone from "../images/Capstone.png";
import scholarSpace from "../images/HomeLoggedIn.png";
import adSkipper from "../images/Ad_Skipper.png";
import eduConnect from "../images/EduConnect.jpg";
import yycAdventure from "../images/YYCAdventure.jpg";
import dbms from "../images/dbms.jpg";
import ml from "../images/ML.jpg";
import mlPlayground from "../images/ML_playground.png";

function Projects() {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1100 }, items: 3, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1100, min: 768 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <section className="projects page">
      <h1 data-aos="fade-up">My Projects</h1>
      <p className="text" data-aos="fade-up" data-aos-delay="100">
        A few selected projects spanning full-stack development, data systems, and machine learning.
      </p>
      <div className="boxes" data-aos="fade-up" data-aos-delay="160">
        <Carousel
          swipeable
          draggable
          showDots
          arrows
          responsive={responsive}
          ssr
          infinite
          autoPlay
          autoPlaySpeed={3500}
          pauseOnHover
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
        >
          <ProjectBox title="Capstone Project 2023" img={capstone} link="https://github.com/HashirA123/Flexiform" />
          <ProjectBox title="ScholarSpace" img={scholarSpace} link="https://github.com/HashirA123/OLP_MERN" />
          <ProjectBox
            title="ML Playground (Docker image)"
            img={mlPlayground}
            link="https://hub.docker.com/repository/docker/hashira123/ml_playground/general"
          />
          <ProjectBox title="Youtube Auto Ad-Skipper" img={adSkipper} link="https://github.com/HashirA123/Ad-Skipper" />
          <ProjectBox title="ViVi-Art-Gallery DBMS" img={dbms} link="https://github.com/HashirA123/ViVi-Art-Gallery-DBMS" />
          <ProjectBox title="Diabetes Medication Prediction" img={ml} link="https://github.com/HashirA123/diabetes-medication" />
          <ProjectBox title="CalgaryHacks 2020" img={yycAdventure} link="https://devpost.com/software/yyc-adventures" />
          <ProjectBox title="CalgaryHacks 2021" img={eduConnect} link="https://devpost.com/software/educonnect-vu8xic" />
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
