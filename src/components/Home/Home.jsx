import React from "react";
import "./Home.css";
import foto from "./rostroP.jpg";
import cv from "../Navbar/AGUSTINASOLABERRIETACV(1).pdf";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <section id="inicio" className="text-center home-section">
      <div className="name-container">
        <h1 className="name-animation">Agustina Solaberrieta</h1>
      </div>
      <div className="image-container">
        <img src={foto} alt="Mi perfil" className="profile-image" />
      </div>
      <p className="role">Desarrollador full stack</p>
      <p className="portfolio-description">
        Desarrolladora Full Stack recién graduada de Soy Henry, especializada en
        JavaScript, React, Node.js y MySQL.
        <br /> Destacada en Frontend, ofrezco soluciones visuales y funcionales
        de alta calidad. <br />
        Mi objetivo es contribuir a proyectos desafiantes, aplicando y ampliando
        mis habilidades en desarrollo web.
        <br /> Emocionada por explorar las últimas tendencias y crear
        experiencias excepcionales. 🚀🌐
      </p>
      <a
        href={cv}
        // target="_blank"
        download="AgustinaSolaberrieta.pdf"
        className="download-button"
      >
        Curriculum <FaDownload />
      </a>
    </section>
  );
};

export default Home;
