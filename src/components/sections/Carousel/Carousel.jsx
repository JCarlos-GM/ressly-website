import { useState, useEffect, useCallback } from 'react';
import './Carousel.css';

const slidesData = [
  {
    id: 1,
    title: 'Dashboard Principal',
    description: 'Vista general de tu residencia con métricas en tiempo real',
    icon: '📊',
    gradient: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'
  },
  {
    id: 2,
    title: 'Gestión de Residentes',
    description: 'Control completo de usuarios y perfiles',
    icon: '👥',
    gradient: 'linear-gradient(135deg, var(--secondary) 0%, var(--secondary-dark) 100%)'
  },
  {
    id: 3,
    title: 'Sistema de Pagos',
    description: 'Procesamiento seguro y trazabilidad de transacciones',
    icon: '💳',
    gradient: 'linear-gradient(135deg, var(--accent) 0%, #357ABD 100%)'
  },
  {
    id: 4,
    title: 'Control de Vehículos',
    description: 'Registro y gestión de acceso vehicular',
    icon: '🚗',
    gradient: 'linear-gradient(135deg, var(--success) 0%, #38A169 100%)'
  },
  {
    id: 5,
    title: 'Reservación de Áreas',
    description: 'Calendario inteligente para espacios comunes',
    icon: '📅',
    gradient: 'linear-gradient(135deg, #9F7AEA 0%, #805AD5 100%)'
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="carousel-section">
      <div className="container">
        <h2 className="section-title">Conoce nuestras interfaces</h2>
        <p className="carousel-subtitle">
          Descubre cómo Ressly facilita la gestión de tu residencia con interfaces intuitivas y fáciles de usar
        </p>
        
        <div 
          className="carousel-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Caption */}
          <div className="carousel-caption">
            <h3>{slidesData[currentSlide].title}</h3>
            <p>{slidesData[currentSlide].description}</p>
          </div>
          
          {/* Slides */}
          <div className="carousel-track">
            {slidesData.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`
                }}
              >
                <div 
                  className="slide-mockup"
                  style={{ background: slide.gradient }}
                >
                  <div className="mockup-icon">{slide.icon}</div>
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className="carousel-button prev"
            onClick={prevSlide}
            aria-label="Slide anterior"
          >
            ‹
          </button>
          <button 
            className="carousel-button next"
            onClick={nextSlide}
            aria-label="Slide siguiente"
          >
            ›
          </button>
          
          {/* Dots Indicators */}
          <div className="carousel-dots">
            {slidesData.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="carousel-progress">
            <div 
              className="carousel-progress-bar"
              style={{
                width: `${((currentSlide + 1) / slidesData.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;