import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-about">
          <h2>Acerca de Mí</h2>
          <p>
            Soy Jesus Flores, desarrollador web en formación. ¡Gracias por visitar mi página!
          </p>
        </div>
        <div className="footer-links">
          <h2>Enlaces Rápidos</h2>
          <ul>
            <li>
              <a href="#SobreMi">Sobre Mí</a>
            </li>
            <li>
              <a href="#Habilidades">Habilidades</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h2>Sígueme</h2>
          <div className="social-icons">
            <a href="www.linkedin.com/in/jesus-flores-flores-60b349304" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Jesus-A-Flores" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Jesus Flores. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
