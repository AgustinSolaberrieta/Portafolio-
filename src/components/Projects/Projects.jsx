import React, { useState } from "react";
import "./Projects.css";
import drivers from "./Proyectos/drivers.png";
import black from "./Proyectos/blackgroup.png";
import rick from "./Proyectos/rickandmorty.png";
import { FaCode, FaGithub } from "react-icons/fa";

const Projects = () => {
  const allProjects = [
    {
      image: drivers,
      title: "Drivers",
      subtitle:
        "Aplicación que usa una API de conductores de Fórmula 1 para crear y visualizar información. Permite ordenar y filtrar por escudería, diferenciando entre conductores creados y existentes.                                                             .",
      gitLink: "https://github.com/AgustinSolaberrieta/Pi-copia",
      vista:
        "https://www.linkedin.com/feed/update/urn:li:activity:7132334748592484353/",
    },
    {
      image: black,
      title: "Black Group Desing",
      subtitle:
        "Ecommerce de muebles y Diseño de ambiente. Aplicación de venta, compras a través de Mercado Pago, inicio de sesión a través de Google View del usuario y Dashboard del administrador, etcétera",
      gitLink: "https://github.com/bgdesign23/Front",
      vista: "https://lnkd.in/dYkwkNYs ",
    },
    {
      image: rick,
      title: "Rick and Morty",
      subtitle:
        "Aplicación que utiliza una API externa de personajes de Rick and Morty. Permite ver información grupal e individual, buscar por ID, y ofrece opciones de orden y filtrado",
      gitLink: "https://github.com/AgustinSolaberrieta/Rick_and_morty",
      vista:
        "https://www.linkedin.com/feed/update/urn:li:activity:7127681487298048001/",
    },
    // ... Agrega más proyectos terminados y en curso aquí
  ];

  const filteredProjects = allProjects;

  return (
    <section id="proyectos" className="text-center">
      <h2>Proyectos</h2>
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <a key={index}>
            <div className="project-box">
              <img src={project.image} alt={project.name} />

              <div className="project-subtitle">{project.subtitle}</div>
            </div>{" "}
            <div className="project-title">{project.title}</div>
            <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="project-logo" />
            </a>
            <a href={project.vista} target="_blank" rel="noopener noreferrer">
              <FaCode className="project-logo2" />
            </a>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
