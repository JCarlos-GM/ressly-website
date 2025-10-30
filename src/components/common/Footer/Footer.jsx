import './Footer.css';

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
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section footer-brand">
            <div className="footer-logo" onClick={handleScrollToTop}>
              <div className="logo-icon">R</div>
              <div className="logo-text">
                <h1>ressly</h1>
                <p>TODO EN ORDEN</p>
              </div>
            </div>
            <p className="footer-description">
              La plataforma más completa para la gestión de residencias estudiantiles y departamentos. 
              Simplificamos la administración para que puedas enfocarte en lo importante.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <span>📘</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span>📷</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span>
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
                <span className="download-icon">📱</span>
                <div className="download-text">
                  <span className="download-label">Descarga en</span>
                  <span className="download-store">Google Play</span>
                </div>
              </a>
              <a href="#" className="download-btn" onClick={(e) => e.preventDefault()}>
                <span className="download-icon">🍎</span>
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
                  ➤
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
              <span>↑</span>
              <span>Volver arriba</span>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="footer-trust">
          <div className="trust-badge">
            <span className="trust-icon">🔒</span>
            <span className="trust-text">SSL Seguro</span>
          </div>
          <div className="trust-badge">
            <span className="trust-icon">✓</span>
            <span className="trust-text">GDPR Compliant</span>
          </div>
          <div className="trust-badge">
            <span className="trust-icon">🇲🇽</span>
            <span className="trust-text">Hecho en México</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;