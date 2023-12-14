import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Languages from "./components/Languages/Languages";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import "./App.css";

function App() {
  const [showArrowIcon, setShowArrowIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Ocultar el ícono cuando se llega al final de la página
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setShowArrowIcon(false);
      } else {
        setShowArrowIcon(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Languages />
      <Projects />
      <SocialIcons />
      {/* Icono flotante de flecha para hacer scroll */}
      <div
        className={`arrow-icon ${showArrowIcon ? "" : "hidden"}`}
        onClick={scrollToBottom}
      >
        <FaArrowDown />
      </div>
    </div>
  );
}

export default App;
