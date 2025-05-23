import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/index.css' // For header specific styles

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link  to="/home" >HOME</Link>
          </li>
          <li>
            <Link to="/sobre">SOBRE</Link>
          </li>
          <li>
            <Link to="/projetos">PROJETOS</Link>
          </li>
          {/* <li><Link to="/contato">CONTATO</Link></li> Uncomment if you add a Contact page */}
        </ul>
      </nav>
    </header>
  )
}

export default Header