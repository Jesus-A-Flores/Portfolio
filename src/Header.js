import React from 'react'
import portada from './assets/portada.jpg'
const Header = () => {
  return (
    <header className='header'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div>
              <h2><a className="revert" href="/">
                <img src={portada} alt='portada'/> Jesus Flores <i class="bi bi-braces"></i>
              </a></h2>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navegacion" id="navbarNav">
              <ul className="navbar-nav ms-3 justify-content-end flex-grow-1"> 
                <li className="nav-item">
                  <a className="nav-link" href="#SobreMi">Sobre Mi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Habilidades">Habilidades</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='#projects'>Proyectos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='#contact'>Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
  )
}

export default Header