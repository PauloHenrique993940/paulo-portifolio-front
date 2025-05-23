import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import SocialLinks from './Components/SocialLinks'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
// import Contact from './pages/Contact'; // Uncomment if you add a Contact page
import './styles/index.css' // Import global styles

function App() {
  return (
    <div className="app-container">
      <Header />
      <SocialLinks />
      <main className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
          {/* <Route path="/contato" element={<Contact />} /> Uncomment if you add a Contact page */}
        </Routes>
      </main>
      {/* You might want a Footer component here if needed */}
    </div>
  )
}

export default App

