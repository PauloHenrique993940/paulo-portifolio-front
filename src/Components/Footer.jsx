import React from 'react';
import '../styles/index.css'; // Assuming footer styles will be in index.css or a dedicated footer.css

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Danielle Silva. Todos os direitos reservados.</p>
      {/* You can add more links or information here, e.g., privacy policy, terms */}
      {/* <div className="footer-links">
        <a href="/politica-de-privacidade">Política de Privacidade</a>
        <a href="/termos-de-uso">Termos de Uso</a>
      </div> */}
    </footer>
  );
}

export default Footer;