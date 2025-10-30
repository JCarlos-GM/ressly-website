import Button from '../../common/Button/Button';
import './CTA.css';

const CTA = ({ onRegisterClick }) => {
  return (
    <section className="cta">
      <div className="cta-background">
        <div className="cta-circle cta-circle-1"></div>
        <div className="cta-circle cta-circle-2"></div>
        <div className="cta-circle cta-circle-3"></div>
      </div>

      <div className="container cta-content">
        <div className="cta-badge">
          <span className="cta-badge-icon">🚀</span>
          <span>Únete a más de 100 residencias</span>
        </div>

        <h2 className="cta-title">¿Administras una residencia?</h2>
        
        <p className="cta-description">
          Regístrate y comienza a gestionar tu residencia de forma profesional. 
          <br />
          Sin costos iniciales, sin contratos largos.
        </p>

        <div className="cta-features">
          <div className="cta-feature">
            <span className="cta-feature-icon">✓</span>
            <span>30 días de prueba gratis</span>
          </div>
          <div className="cta-feature">
            <span className="cta-feature-icon">✓</span>
            <span>Sin tarjeta de crédito</span>
          </div>
          <div className="cta-feature">
            <span className="cta-feature-icon">✓</span>
            <span>Configuración en minutos</span>
          </div>
        </div>

        <div className="cta-buttons">
          <Button 
            variant="primary" 
            size="large"
            onClick={onRegisterClick}
            icon="🎯"
          >
            Registrarme como administrador
          </Button>
          <Button 
            variant="secondary" 
            size="large"
            onClick={() => {
              const element = document.getElementById('features');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Ver más características
          </Button>
        </div>

        <p className="cta-note">
          * Requiere código de invitación
        </p>

        {/* Trust Indicators */}
        <div className="cta-trust">
          <div className="trust-item">
            <span className="trust-icon">🔒</span>
            <span className="trust-text">Datos encriptados</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">⚡</span>
            <span className="trust-text">Soporte 24/7</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">💯</span>
            <span className="trust-text">100% en la nube</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;