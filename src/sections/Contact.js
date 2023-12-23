import React from "react";
import "../styles/Contact.css";
import ContactBox from "../components/ContactBox";

function Contact() {
  return (
    <div id="Contact" className="contact">
      <h1>Contact Me</h1>
      <div className="boxes">
        <ContactBox
          animation="fade-right"
          class="fas fa-envelope"
          name="Email"
          link="mailto:hashirahmed204@gmail.com"
        />
        <ContactBox
          animation="fade-up"
          class="fab fa-github"
          name="Github"
          link="https://github.com/HashirA123"
        />
        <ContactBox
          animation="fade-left"
          class="fab fa-linkedin"
          name="Linkedin"
          link="https://www.linkedin.com/in/hashirahmed204/"
        />
      </div>
    </div>
  );
}

export default Contact;
