// src/components/sections/Hero/Hero.jsx
import Button from '../../common/Button/Button';
import './Hero.css';

const Hero = () => {
  const handleDownload = () => {
    // Aquí irá la lógica de descarga
    console.log('Descargando app...');
  };

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-badge">Gratis para residentes</span>
          <h2 className="hero-title">
            Transforma la gestión de tu residencia
          </h2>
          <p className="hero-description">
            Ressly simplifica la administración, comunicación y pagos de tu residencia. 
            Todo en una sola plataforma, accesible desde cualquier dispositivo.
          </p>
          <div className="hero-buttons">
            <Button 
              variant="primary" 
              size="large"
              icon="📥"
              onClick={handleDownload}
            >
              Descargar para Android
            </Button>
          </div>
        </div>

        <div className="hero-mockup-container">
          <div className="hero-mockup">
            <div className="mockup-icon">📱</div>
            <h3>Ressly App</h3>
            <p>Gestión inteligente</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;