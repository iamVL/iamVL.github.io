import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import About from "./About/About"
import Projects from "./Projects/Projects"
import Education from "./Education/Education"

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  // close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="App">
      <div className={`floating-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          {/* Hamburger Button */}
          <button 
            className="hamburger-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>

          {/* Navigation Links */}
          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className="nav-item">About</Link>
            <Link to="/projects" className="nav-item">Projects</Link>
            {/* <Link to="/media" className="nav-item">Media</Link> */}
            <Link to="/teaching" className="nav-item">Teaching</Link>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div className="page-container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/media" element={<Media />} /> */}
          <Route path="/teaching" element={<Education />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;