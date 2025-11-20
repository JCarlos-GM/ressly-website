// src/components/sections/Hero/Hero.jsx
import { useState, useEffect } from 'react';
import Button from '../../common/Button/Button';
import { CreditCard, MessageCircle, BarChart3, Apple, Download, Monitor } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [userOS, setUserOS] = useState('android');

  // Capturas de pantalla de tu app
  const screens = [
    {
      id: 1,
      image: '/images/screens/dashboard.png',
      title: 'Dashboard',
      description: 'Vista general de tu residencia'
    },
    {
      id: 2,
      image: '/images/screens/payments.png',
      title: 'Pagos',
      description: 'Gestiona tus pagos fácilmente'
    },
    {
      id: 3,
      image: '/images/screens/acces.png',
      title: 'Accesos',
      description: 'Control de accesos en tiempo real'
    },
    {
      id: 4,
      image: '/images/screens/reservations.png',
      title: 'Reservas',
      description: 'Reserva áreas comunes'
    },
    {
      id: 5,
      image: '/images/screens/profile.png',
      title: 'Perfil',
      description: 'Personaliza tu información'
    }
  ];

  // Detectar sistema operativo
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setUserOS('ios');
    }
  }, []);

  // Auto-cambio de pantallas (Carrusel)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [screens.length]);

  // --- FUNCIÓN DE DESCARGA CORREGIDA SEGÚN TU IMAGEN ---
  const handleDownload = () => {
    if (userOS === 'ios') {
      // Si es iOS, redirige a la App Store (o pon tu link real cuando lo tengas)
      window.open('https://apps.apple.com/app/ressly/id123456789', '_blank', 'noopener,noreferrer');
    } else {
      // Si es Android/PC, descarga el APK directamente
      const link = document.createElement('a');
      
      // Ruta basada en tu carpeta: public/app/ressly-app.apk
      // En el navegador, 'public' es la raíz '/'
      link.href = '/app/ressly-app.apk'; 
      
      link.download = 'Ressly.apk'; // Nombre limpio para el usuario al guardar
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleAccessPanel = () => {
    window.open('https://admin.ressly.com.mx/', '_self', 'noopener,noreferrer');
  };

  return (
    <section className="hero" aria-label="Sección principal">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-badge">
            <span className="badge-icon"></span>
            Gratis para residentes
          </span>
          <h1 className="hero-title">
            Transforma la gestión de tu{' '}
            <span className="gradient-text">residencia</span>
          </h1>
          <p className="hero-description">
            Ressly simplifica la administración, comunicación y pagos de tu residencia. 
            Todo en una sola plataforma, accesible desde cualquier dispositivo.
          </p>
          
          {/* Features destacados */}
          <div className="hero-features">
            <div className="feature-item">
              <CreditCard className="feature-icon" size={18} strokeWidth={2.5} />
              <span>Pagos seguros</span>
            </div>
            <div className="feature-item">
              <MessageCircle className="feature-icon" size={18} strokeWidth={2.5} />
              <span>Chat integrado</span>
            </div>
            <div className="feature-item">
              <BarChart3 className="feature-icon" size={18} strokeWidth={2.5} />
              <span>Reportes en tiempo real</span>
            </div>
          </div>

          <div className="hero-buttons">
            <Button 
              variant="primary" 
              size="large"
              icon={userOS === 'ios' ? <Apple size={20} /> : <Download size={20} />}
              onClick={handleDownload}
            >
              {userOS === 'ios' ? 'Descargar en App Store' : 'Descargar App Android'}
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              icon={<Monitor size={20} />}
              onClick={handleAccessPanel}
            >
              Panel administrativo
            </Button>
          </div>
        </div>

        {/* Mockup del dispositivo */}
        <div className="hero-mockup-container">
          <div className="phone-mockup">
            {/* Marco del teléfono */}
            <div className="phone-frame">
              {/* Notch superior */}
              <div className="phone-notch"></div>
              
              {/* Pantalla */}
              <div className="phone-screen">
                {screens.map((screen, index) => (
                  <div
                    key={screen.id}
                    className={`screen-slide ${index === currentScreen ? 'active' : ''}`}
                  >
                    <img 
                      src={screen.image} 
                      alt={screen.title}
                      className="screen-image"
                    />
                  </div>
                ))}
                
                {/* Overlay con gradiente */}
                <div className="screen-overlay"></div>
              </div>

              {/* Botón home */}
              <div className="phone-home-button"></div>
            </div>

            {/* Efectos decorativos */}
            <div className="phone-glow"></div>
            <div className="floating-elements">
              <CreditCard className="floating-element" style={{'--delay': '0s'}} size={32} />
              <BarChart3 className="floating-element" style={{'--delay': '1s'}} size={32} />
              <MessageCircle className="floating-element" style={{'--delay': '2s'}} size={32} />
            </div>
          </div>

          {/* Indicadores de pantalla */}
          <div className="screen-indicators">
            {screens.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentScreen ? 'active' : ''}`}
                onClick={() => setCurrentScreen(index)}
                aria-label={`Ver pantalla ${index + 1}`}
              />
            ))}
          </div>

          {/* Info de la pantalla actual */}
          <div className="screen-info">
            <h3>{screens[currentScreen].title}</h3>
            <p>{screens[currentScreen].description}</p>
          </div>
        </div>
      </div>

      {/* Formas decorativas de fondo */}
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;