import React from "react";
import myFace from "../images/myFace.jpg";
import "../styles/Experience.css";

function Experience() {
  return (
    <section className="about page">
      <h1 data-aos="fade-up">About Me</h1>
      <div className="about-flex">
        <div className="left-content" data-aos="fade-right" data-aos-delay="120">
          <img src={myFace} alt="Hashir Ahmed portrait" />
        </div>
        <div className="right-content" data-aos="fade-left" data-aos-delay="220">
          <p>
            Hey there! I'm Hashir, a software engineer who enjoys crafting polished digital experiences.
            I work with Java, C/C++, C#, and Python to build software that is practical, reliable, and
            enjoyable to use.
          </p>
          <p>
            Beyond coding, I love solving real-world problems where creativity and engineering meet.
            I am currently looking for new graduate opportunities where I can keep learning and deliver
            meaningful impact.
          </p>
          <p>Please feel free to reach out — I'd be glad to connect.</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
