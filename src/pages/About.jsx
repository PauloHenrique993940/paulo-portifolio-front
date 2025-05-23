import React from 'react';
import '../styles/index.css'; // Make sure this is linked to your main CSS file
import ProfileImage from '../assets/perfil1.jpeg'; // Assuming you'll place your image here

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <p className="greeting">Olá,</p>
          <h1 className="name-intro">meu nome é Paulo Henrique</h1>

          <p className="paragraph-margin">
            Sou desenvolvedor Front-End e agora estudando Desenvolvimento Web
            Full-Stack
          </p>

          <p className="paragraph-margin">
            Possuo experiência sólida em <span className="highlight">JavaScript</span>, <span className="highlight">Vue.JS</span>, <span className="highlight">ReactJS</span>, <span className="highlight">TypeScript</span>,  e <span className="highlight">Sass/CSS</span>. Estou constantemente aprimorando minha habilidade em criar
            interfaces de usuário elegantes e funcionais, muitas vezes utilizando o <span className="highlight">Figma</span> para
            criar wireframes e protótipos. Além disso, estou familiarizado com ferramentas
            essenciais como <span className="highlight">Node.js</span>,<span className="highlight">Tailwind.CSS</span>, <span className="highlight">Bootstrap</span>, <span className="highlight">MUI</span>, <span className="highlight">Jest</span>, <span className="highlight">Cypress</span>, <span className="highlight">SQL</span>  para
            desenvolvimento de aplicativos robustos.
          </p>

          <p className="paragraph-margin">
            Estou sempre buscando expandir meu conjunto de habilidades e atualmente
            estou sempre estudando React para aperfoçoar cada vex +  as ferramentas ao meu arsenal de desenvolvimento.
          </p>

          <p className="paragraph-margin">
            Estamos abertos a oportunidades de colaboração, desafios emocionantes e novas
            conexões na indústria de tecnologia.
          </p>

          <p className="call-to-action">
            Sinta-se à vontade para me chamar para conversar!
          </p>
          <div className="divider-line"></div>
        </div>

        <div className="about-image-container">
          <img src={ProfileImage} alt="Danielle Silva - Profile" className="profile-image" />
        </div>
      </div>
    </section>
  );
}

export default About;