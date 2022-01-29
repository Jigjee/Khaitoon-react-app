import React from "react";
import "./CallToAction.css";
import { FiCode } from "react-icons/fi";

function CallToAction() {
  return (
    <div className="cta-bg">
      <div className="overlay"></div>
      <div className="container">
        <div className="cta-text">
          <FiCode className="Ficode" />
          <h2>We're Khaitoon family</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur temporibus sint omnis maxime. Fugit error voluptatum at
            magni beatae pariatur tenetur laudantium itaque, deleniti molestias
            repudiandae nisi, culpa vero? Fugiat.
          </p>
          <a href="#" className="cta-btn">
            get to know us
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
