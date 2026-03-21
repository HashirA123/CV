import React from "react";
import "../styles/Contact.css";
import ContactBox from "../components/ContactBox";

function Contact() {
  return (
    <section className="contact page">
      <h1 data-aos="fade-up">Contact Me</h1>
      <p className="contact-copy" data-aos="fade-up" data-aos-delay="80">
        I'd love to hear about opportunities, collaborations, or interesting ideas.
      </p>
      <div className="boxes">
        <ContactBox animation="fade-up" iconClass="fas fa-envelope" name="Email" link="mailto:hashirahmed204@gmail.com" />
        <ContactBox animation="fade-up" iconClass="fab fa-github" name="GitHub" link="https://github.com/HashirA123" />
        <ContactBox
          animation="fade-up"
          iconClass="fab fa-linkedin"
          name="LinkedIn"
          link="https://www.linkedin.com/in/hashirahmed204/"
        />
      </div>
    </section>
  );
}

export default Contact;
