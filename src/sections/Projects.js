import Aos from "aos";
import React, { useEffect } from "react";
import "../styles/Projects.css";
import ProjectBox from "../components/ProjectBox";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import capstone from "../images/Capstone.png";
import scholarSpace from "../images/HomeLoggedIn.png";
import EduConnect from "../images/EduConnect.jpg";
import YYCAdventure from "../images/YYCAdventure.jpg";
import dbms from "../images/dbms.jpg";
import ml from "../images/ML.jpg";
import ml_playground from "../images/ML_playground.png";

function Projects() {
  useEffect(function () {
    Aos.init({
      duration: 5000,
    });
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1100 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1100, min: 830 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 830, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div id="Projects" className="projects">
      <h1>My Projects</h1>
      <div data-aos="fade-up">
        <div className="boxes">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            arrows={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            // keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            //itemClass="carousel-item-padding-40-px"
          >
            <ProjectBox
              title="Capstone Project 2023"
              img={capstone}
              link="https://github.com/HashirA123/Flexiform"
            />
            <ProjectBox
              title="ScholarSpace"
              img={scholarSpace}
              link="https://github.com/HashirA123/OLP_MERN"
            />
            <ProjectBox
              title="ML Playground (Docker image)"
              img={ml_playground}
              link="https://hub.docker.com/repository/docker/hashira123/ml_playground/general"
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
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
