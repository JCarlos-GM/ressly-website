// src/components/sections/CTA/CTA.jsx
import { useState, useEffect } from 'react';
import Button from '../../common/Button/Button';
import { 
  Rocket, 
  CheckCircle2, 
  Shield, 
  Zap, 
  Cloud,
  Download,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import './CTA.css';

const CTA = ({ onRegisterClick }) => {
  const [userOS, setUserOS] = useState('android');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setUserOS('ios');
    }
  }, []);

  const handleDownload = () => {
    const urls = {
      android: 'https://play.google.com/store/apps/details?id=com.ressly.app',
      ios: 'https://apps.apple.com/app/ressly/id123456789'
    };
    window.open(urls[userOS], '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="cta">
      <div className="cta-background">
        <div className="cta-circle cta-circle-1"></div>
        <div className="cta-circle cta-circle-2"></div>
        <div className="cta-circle cta-circle-3"></div>
      </div>

      <div className="container cta-content">
        <div className="cta-badge">
          <Rocket className="cta-badge-icon" size={20} strokeWidth={2.5} />
          <span>Únete a más de 100 residencias</span>
        </div>

        <h2 className="cta-title">
          Comienza a gestionar tu residencia{' '}
          <span className="cta-title-highlight">de forma inteligente</span>
        </h2>
        
        <p className="cta-description">
          Descarga la app móvil o accede al panel web para administradores.
          <br />
          Sin costos iniciales, sin contratos largos.
        </p>

        <div className="cta-features">
          <div className="cta-feature">
            <CheckCircle2 className="cta-feature-icon" size={20} strokeWidth={2.5} />
            <span>30 días de prueba gratis</span>
          </div>
          <div className="cta-feature">
            <CheckCircle2 className="cta-feature-icon" size={20} strokeWidth={2.5} />
            <span>Sin tarjeta de crédito</span>
          </div>
          <div className="cta-feature">
            <CheckCircle2 className="cta-feature-icon" size={20} strokeWidth={2.5} />
            <span>Configuración en minutos</span>
          </div>
        </div>

        <div className="cta-buttons">
          <Button 
            variant="primary" 
            size="large"
            onClick={handleDownload}
            icon={<Download size={20} />}
          >
            Descargar app móvil
          </Button>
          <Button 
            variant="secondary" 
            size="large"
            onClick={onRegisterClick}
            icon={<ArrowRight size={20} />}
          >
            Acceder como administrador
          </Button>
        </div>

        <p className="cta-note">
          <Sparkles size={14} className="cta-note-icon" />
          Gratis para residentes · Panel web para administradores
        </p>

        {/* Trust Indicators */}
        <div className="cta-trust">
          <div className="trust-item">
            <Shield className="trust-icon" size={24} strokeWidth={2} />
            <span className="trust-text">Datos encriptados</span>
          </div>
          <div className="trust-item">
            <Zap className="trust-icon" size={24} strokeWidth={2} />
            <span className="trust-text">Soporte 24/7</span>
          </div>
          <div className="trust-item">
            <Cloud className="trust-icon" size={24} strokeWidth={2} />
            <span className="trust-text">100% en la nube</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;