import React from 'react'
import '../styles/index.css' // For social links specific styles

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/paulohenriquefranca/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i> {/* Example: Font Awesome icon */}
      </a>
      <a href="https://github.com/PauloHenrique993940" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i> {/* Example: Font Awesome icon */}
      </a>
      <a href="mailto:paulohenriqueferreirafranca2@gmail.com" target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-envelope"></i> {/* Para Font Awesome 6+ */}

      </a>
    </div>
  )
}

export default SocialLinks