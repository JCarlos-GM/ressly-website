import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { Menu, X, Grid3x3, MessageSquare, HelpCircle } from 'lucide-react';
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

  // Cerrar menú al hacer scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-content">
          
          {/* --- CAMBIO AQUÍ --- */}
          {/* Logo */}
          <div 
            className="navbar-logo" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            {/* Reemplazamos el icono 'R' y el texto por el logo SVG */}
            <img 
              src="/images/logo_ressly_green.svg" 
              alt="Ressly Logo" 
              className="logo-image" 
            />
          </div>
          {/* --- FIN DEL CAMBIO --- */}


          {/* Desktop Navigation */}
          <nav className="navbar-nav">
            <a 
              href="#features" 
              onClick={(e) => { 
                e.preventDefault(); 
                handleNavClick('features'); 
              }}
            >
              <Grid3x3 size={18} />
              <span>Características</span>
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => { 
                e.preventDefault(); 
                handleNavClick('testimonials'); 
              }}
            >
              <MessageSquare size={18} />
              <span>Testimonios</span>
            </a>
            <a 
              href="#faq" 
              onClick={(e) => { 
                e.preventDefault(); 
                handleNavClick('faq'); 
              }}
            >
              <HelpCircle size={18} />
              <span>FAQ</span>
            </a>
            <Button variant="secondary" size="small" onClick={onRegisterClick}>
              Registrarme
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="navbar-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${isMobileMenuOpen ? 'navbar-mobile-open' : ''}`}>
        <nav className="navbar-mobile-nav">
          <a 
            href="#features" 
            onClick={(e) => { 
              e.preventDefault(); 
              handleNavClick('features'); 
            }}
          >
            <Grid3x3 size={20} />
            <span>Características</span>
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => { 
              e.preventDefault(); 
              handleNavClick('testimonials'); 
            }}
          >
            <MessageSquare size={20} />
            <span>Testimonios</span>
          </a>
          <a 
            href="#faq" 
            onClick={(e) => { 
              e.preventDefault(); 
              handleNavClick('faq'); 
            }}
          >
            <HelpCircle size={20} />
            <span>FAQ</span>
          </a>
          <div className="navbar-mobile-cta">
            <Button 
              variant="primary" 
              size="large"
              onClick={() => {
                onRegisterClick();
                setIsMobileMenuOpen(false);
              }}
            >
              Registrarme
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
