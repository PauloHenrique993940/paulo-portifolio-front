import React from 'react'
import '../styles/index.css' // For projects page specific styles

import disney from '../assets/disneyplus.png'
import eplay from '../assets/eplay.png'
import efood from '../assets/efood.png'


function Projects() {
  return (
    <section className="projects-section">
      <h2>Meus Projetos</h2>
      <div className="project-list">
        <div className="project-card">
          <img src={disney} alt="Projeto 1" />
          <h3>DisneyPlus</h3>
          <p>Breve descrição do projeto.</p>
          <div className="project-links">
            <a href="#" className="project-button">Repositório</a>
            <a href="#" className="project-button">Prévia</a>
          </div>
        </div>
        <div className="project-card">
          <img src={eplay} alt="Projeto 2" />
          <h3>Filmes e Séries</h3>
          <p>Breve descrição do projeto.</p>
          <div className="project-links">
            <a href="#" className="project-button">Repositório</a>
            <a href="#" className="project-button">Prévia</a>
          </div>
        </div>
        <div className="project-card">
          <img src={efood} alt="Projeto 2" />
          <h3>Efood</h3>
          <p>Breve descrição do projeto.</p>
          <div className="project-links">
            <a href="#" className="project-button">Repositório</a>
            <a href="#" className="project-button">Prévia</a>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Projects