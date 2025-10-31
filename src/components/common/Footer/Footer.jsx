// src/components/common/Footer/Footer.jsx

import React from 'react';
// 1. Importa tu archivo CSS normal
import './Footer.css';

// 2. Importa los íconos de lucide-react que vas a usar
import {
  Facebook, Twitter, Instagram, Linkedin, // Para redes sociales
  Smartphone, Apple, // Para botones de descarga
  Send, // Para newsletter
  ArrowUp, // Para botón "Volver arriba"
  Lock, CheckCircle, MapPin // Para Trust Badges (Lock, CheckCircle, MapPin para "Hecho en México")
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // 3. Usa los nombres de clase como strings (como siempre lo has hecho)
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section footer-brand">
            
            {/* --- CAMBIO AQUÍ --- */}
            {/* Se eliminó el div "logo-text" que contenía el H1 y el P */}
            <div className="footer-logo" onClick={handleScrollToTop}>
              <img 
                src="/images/logo_ressly_white.svg" 
                alt="Ressly Logo" 
                className="logo-image" 
              />
            </div>
            {/* --- FIN DEL CAMBIO --- */}

            <p className="footer-description">
              La plataforma más completa para la gestión de residencias estudiantiles y departamentos. 
              Simplificamos la administración para que puedas enfocarte en lo importante.
            </p>
            <div className="footer-social">
              {/* CAMBIO: Íconos de Lucide para Redes Sociales */}
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-section">
            <h4 className="footer-title">Producto</h4>
            <ul className="footer-links">
              <li>
                <a href="#features" onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}>
                  Características
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Precios
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => { e.preventDefault(); handleNavClick('faq'); }}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Actualizaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h4 className="footer-title">Empresa</h4>
            <ul className="footer-links">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Prensa
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="footer-section">
            <h4 className="footer-title">Recursos</h4>
            <ul className="footer-links">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Guías
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  API
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Estado del servicio
                </a>
              </li>
            </ul>
          </div>

          {/* Download Section */}
          <div className="footer-section">
            <h4 className="footer-title">Descargas</h4>
            <div className="footer-downloads">
              <a href="#" className="download-btn" onClick={(e) => e.preventDefault()}>
                {/* CAMBIO: Ícono de Lucide para Android */}
                <span className="download-icon">
                  <Smartphone size={24} /> 
                </span>
                <div className="download-text">
                  <span className="download-label">Descarga en</span>
                  <span className="download-store">Google Play</span>
                </div>
              </a>
              <a href="#" className="download-btn" onClick={(e) => e.preventDefault()}>
                {/* CAMBIO: Ícono de Lucide para Apple */}
                <span className="download-icon">
                  <Apple size={24} />
                </span>
                <div className="download-text">
                  <span className="download-label">Descarga en</span>
                  <span className="download-store">App Store</span>
                </div>
              </a>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter">
              <h4 className="newsletter-title">Newsletter</h4>
              <p className="newsletter-text">Recibe las últimas novedades</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  {/* CAMBIO: Ícono de Lucide para el botón de enviar */}
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copyright">
              © {currentYear} Ressly. Todos los derechos reservados.
            </p>
            <div className="footer-legal">
              <a href="#" onClick={(e) => e.preventDefault()}>
                Términos y Condiciones
              </a>
              <span className="separator">•</span>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Política de Privacidad
              </a>
              <span className="separator">•</span>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Cookies
              </a>
            </div>
          </div>

          <div className="footer-bottom-right">
            <button className="back-to-top" onClick={handleScrollToTop}>
              {/* CAMBIO: Ícono de Lucide para "Volver arriba" */}
              <ArrowUp size={18} />
              <span>Volver arriba</span>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="footer-trust">
          <div className="trust-badge">
            {/* CAMBIO: Ícono de Lucide para SSL Seguro */}
            <span className="trust-icon">
              <Lock size={20} />
            </span>
            <span className="trust-text">SSL Seguro</span>
          </div>
          <div className="trust-badge">
            {/* CAMBIO: Ícono de Lucide para GDPR */}
            <span className="trust-icon">
              <CheckCircle size={20} />
            </span>
            <span className="trust-text">GDPR Compliant</span>
          </div>
          <div className="trust-badge">
            {/* CAMBIO: Ícono de Lucide para "Hecho en México" */}
            <span className="trust-icon">
              <MapPin size={20} />
            </span>
            <span className="trust-text">Hecho en México</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;