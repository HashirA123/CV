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
            Hey there! I'm Hashir, a Machine Learning engineer, currently working with algorithmic recourse for AI.
            I primarily work with Python and related ML libraries like PyTorch, scikit-learn, and TensorFlow. 
            I also have experience with Java, C++, and JavaScript, and I enjoy exploring new technologies and frameworks.
          </p>
          <p>
            Beyond coding, I love solving real-world problems where creativity and engineering meet.
            I am always eager to learn new things and meet new people in the world of AI and software development.
          </p>
          <p>Please feel free to reach out — I'd be glad to connect.</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
