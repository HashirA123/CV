import React from "react";
import "../styles/Footer.css";

function Footer() {
  var date = new Date();
  return (
    <div className="footer">
      <div className="author">
        <p>Created by Hashir Ahmed</p>
      </div>
      <div className="">
        <p className="copyright">
          <i className="far fa-copyright"></i> {date.getFullYear()} All rights
          reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
