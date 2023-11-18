import Aos from "aos";
import React, { useEffect } from "react";
import myFace from "../images/myFace.jpg";
import "../styles/Experience.css";
import "aos/dist/aos.css";

function Experience() {
  useEffect(function () {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="About" className="about">
      <h1>About me</h1>
      <div className="about-flex" data-aos="fade-up">
        <div className="left-content">
          <img src={myFace} alt="" />
        </div>
        <div className="right-content">
          <p>
            {/* I am passionate about applying my skills and knowledge to solve
            real-world problems using machine learning and data analysis.
            Through my academic career, I have built a strong set of skills in
            various programming languages, most notably Java, C/C++, and many
            useful programming paradigms. I also have valuable experience when
            it comes to version control through GIT, and web development with
            JavaScript, PHP, and MySQL. Along with the academic skills, I am
            also building strong interpersonal and communication skills through
            volunteering in places like the Students Union at U of C. Though
            there may be skills that I have not yet learned or perfected, I am
            always up to new challenges, always seeking to better myself as a
            person and professional. Currently, I am an Associate Machine
            Learning Developer at AltaML, where I work with a team of experts to
            develop and deploy ML solutions for various clients and industries.
            I am always eager to learn new technologies and tools, and I am
            looking for new grad opportunities that will challenge me and help
            me grow as a developer. Please feel free to reach out! */}
            Hey there! I'm Hashir, a dynamic software engineer with a flair for
            crafting digital experiences. I dance through the coding realms,
            wielding languages like Java, C/C++, C#, and Python to create
            applications that not only work but spark joy.
          </p>
          <p>
            Beyond the code, I'm a problem-solving enthusiast on a journey where
            innovation meets real-world challenges!
          </p>
          <p>
            I am currently looking for new grad opportunities that will
            challenge me and help me grow as a developer. Please feel free to
            reach out!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
