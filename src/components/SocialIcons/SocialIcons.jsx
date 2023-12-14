import React from "react";
import "./SocialIcons.css"; // Asegúrate de tener tus estilos definidos

import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialIcons = () => {
  return (
    <section id="redes" className="text-center">
      <h2>Si queres que trabajemos juntos contactate por:</h2>
      <div className="social-icons-container">
        <div className="social-icon-box">
          <a
            href="https://wa.me/541132312736"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="social-icon" />
          </a>
        </div>
        <div className="social-icon-box">
          <a
            href="mailto:agustinasolaberrieta08@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail className="social-icon" />
          </a>
        </div>
        <div className="social-icon-box">
          <a
            href="https://www.linkedin.com/in/agustina-solaberrieta-146b74277/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
        </div>
        <div className="social-icon-box">
          <a
            href="https://github.com/AgustinSolaberrieta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialIcons;
