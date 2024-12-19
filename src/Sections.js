import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import portada from './assets/portada.jpg'
import cv from './assets/CV-FFJA.pdf'

const Sections = () => {
  const downloadCV = () => { 
    const link = document.createElement('a'); 
    link.href = cv; 
    link.download = 'JesusFlores.pdf'; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
  };

  const skills = [
    { name: "HTML", icon: "fab fa-html5", level: 70 },
    { name: "CSS", icon: "fab fa-css3-alt", level: 70 },
    { name: "JavaScript", icon: "fab fa-js", level: 55 },
    { name: "Bootstrap", icon: "fab fa-bootstrap", level: 60 },
    { name: "Python" , icon: "fab fa-python", level: 60},
    { name: "React", icon: "fab fa-react", level: 40 },
  ];

  const projects = [
    {
      name: "Portfolio Personal",
      description: "Un sitio web responsivo para mostrar mis habilidades y proyectos.",
      link: "https://jesus.flores.es",
    },
    {
      name: "Bienes Raices",
      description: "Aplicación de bienes raices realizado en un curso de Udemy.",
      link: "https://github.com/Jesus-A-Flores/PROYECT_web_SIS-.2420",
    },
    {
      name: "Complejo deportivo",
      description: "En desarrollo",
      link: "",
    },
  ];
  //formulario de contacto

  const [nombre,setNombre] = useState('');
  const [email,setEmail] = useState('');
  const [mensaje,setMensaje] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID="service_sr2fktr";// Reemplaza con tu Service ID
    const templateId="template_vzjv46n" // Reemplaza con tu Template ID
    const publicKey="Pb8QwErS9hgpuJZ3x" // Reemplaza con tu Public Key

    const templateparams = {
      from_name: nombre,
      from_email: email,
      to_name: "jesus",
      message: mensaje,
    };

    emailjs.send(serviceID,templateId,templateparams,publicKey)
      .then((result) => {
        console.log('Email sent succesfully!',result);
        setNombre('');
        setEmail('');
        setMensaje('');
      })
      .catch((err) => {
        console.error('Error sending email:', err);
      });
  };
  return (
    <div className='contenido'>
        <section id="SobreMi">
          <h1>Sobre Mi</h1>
          <div className='contenido-sobremi'>
            <div className='sobremi'>
              <p>
                <span>!Hola!, Soy Jesus, </span>desarrollador web en formación. Actualmente estoy cursando mis estudios en la Facultad Nacional de Ingeniería (FNI).
              </p>
              <p>
                Soy una persona con una gran pasión por el aprendizaje continuo y la resolución de problemas. Me encanta enfrentar nuevos desafíos y encontrar soluciones creativas y eficientes. Aunque aún estoy en el proceso de completar mi formación, estoy muy emocionado por las oportunidades de aprendizaje y crecimiento que el futuro me depara.
              </p>
            </div>
            <div className='imagen'>
                <img src={portada} alt='portada'/>
            </div>
          </div>
          <button class="btn btn-primary" onClick={downloadCV}><i class="bi bi-download"></i> CV</button>
        </section>
        <section id="Habilidades" className="skills-section">
          <h1>Habilidades</h1>
          <div className="container">
            <div className="row">
              {skills.map((skill, index) => (
                <div className="col-md-6 skill-box" key={index}>
                  <div className="skill-title">
                    <i className={skill.icon}></i> {skill.name}
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${skill.level}%` }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {skill.level}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="projects-section">
          <h1>Proyectos</h1>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Ver Proyecto
                </a>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="contact-section">
          <h1>Contacto</h1>
          <form onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="user_name">Nombre</label>
              <input 
                type="text" name="user_name" id="user_name" required 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">Correo Electrónico</label>
              <input 
                type="email" name="user_email" id="user_email" required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea 
                name="message" id="message" rows="5" required
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" value="Send">
              Enviar
            </button>
          </form>
        </section>
    </div>
  )
}

export default Sections