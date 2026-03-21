import React from "react";
import "../styles/ContactBox.css";

function ContactBox({ animation, iconClass, name, link }) {
  return (
    <a className="box" data-aos={animation} href={link} target="_blank" rel="noopener noreferrer">
      <div className="center">
        <i className={iconClass}></i>
      </div>
      <div className="center">
        <p>{name}</p>
      </div>
    </a>
  );
}

export default ContactBox;
