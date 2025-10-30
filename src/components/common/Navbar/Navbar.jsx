// src/components/common/Navbar/Navbar.jsx
import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './Navbar.css';

const Navbar = ({ onRegisterClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-content">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="logo-icon">R</div>
          <div className="logo-text">
            <h1>ressly</h1>
            <p>TODO EN ORDEN</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          <a href="#features" onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}>
            Características
          </a>
          <a href="#testimonials" onClick={(e) => { e.preventDefault(); handleNavClick('testimonials'); }}>
            Testimonios
          </a>
          <a href="#faq" onClick={(e) => { e.preventDefault(); handleNavClick('faq'); }}>
            FAQ
          </a>
          <Button variant="secondary" onClick={onRegisterClick}>
            Registrarme
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="navbar-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${isMobileMenuOpen ? 'navbar-mobile-open' : ''}`}>
        <a href="#features" onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}>
          Características
        </a>
        <a href="#testimonials" onClick={(e) => { e.preventDefault(); handleNavClick('testimonials'); }}>
          Testimonios
        </a>
        <a href="#faq" onClick={(e) => { e.preventDefault(); handleNavClick('faq'); }}>
          FAQ
        </a>
        <Button 
          variant="primary" 
          fullWidth 
          onClick={() => {
            onRegisterClick();
            setIsMobileMenuOpen(false);
          }}
        >
          Registrarme
        </Button>
      </div>
    </header>
  );
};

export default Navbar;