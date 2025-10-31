// src/components/sections/Carousel/Carousel.jsx
import { useState, useEffect, useCallback } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  Car, 
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import './Carousel.css';

const slidesData = [
  {
    id: 1,
    title: 'Dashboard Principal',
    description: 'Vista general de tu residencia con métricas en tiempo real',
    icon: LayoutDashboard,
    gradient: 'linear-gradient(135deg, var(--teal-500) 0%, var(--teal-700) 100%)'
  },
  {
    id: 2,
    title: 'Gestión de Residentes',
    description: 'Control completo de usuarios y perfiles',
    icon: Users,
    gradient: 'linear-gradient(135deg, var(--teal-700) 0%, var(--teal-accent) 100%)'
  },
  {
    id: 3,
    title: 'Sistema de Pagos',
    description: 'Procesamiento seguro y trazabilidad de transacciones',
    icon: CreditCard,
    gradient: 'linear-gradient(135deg, var(--teal-500) 0%, #2C7A7B 100%)'
  },
  {
    id: 4,
    title: 'Control de Vehículos',
    description: 'Registro y gestión de acceso vehicular',
    icon: Car,
    gradient: 'linear-gradient(135deg, var(--teal-accent) 0%, var(--teal-700) 100%)'
  },
  {
    id: 5,
    title: 'Reservación de Áreas',
    description: 'Calendario inteligente para espacios comunes',
    icon: Calendar,
    gradient: 'linear-gradient(135deg, var(--teal-700) 0%, #234E52 100%)'
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
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

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
          role="region"
          aria-label="Carrusel de características"
        >
          {/* Slides */}
          <div className="carousel-track">
            {slidesData.map((slide, index) => {
              const IconComponent = slide.icon;
              return (
                <div
                  key={slide.id}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{
                    transform: `translateX(${(index - currentSlide) * 100}%)`
                  }}
                  aria-hidden={index !== currentSlide}
                >
                  <div 
                    className="slide-mockup"
                    style={{ background: slide.gradient }}
                  >
                    <div className="mockup-icon-wrapper">
                      <IconComponent 
                        className="mockup-icon" 
                        size={48} 
                        strokeWidth={2}
                      />
                    </div>
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className="carousel-button prev"
            onClick={prevSlide}
            aria-label="Slide anterior"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>
          <button 
            className="carousel-button next"
            onClick={nextSlide}
            aria-label="Slide siguiente"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>
          
          {/* Dots Indicators */}
          <div className="carousel-dots" role="tablist">
            {slidesData.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir al slide ${index + 1}`}
                aria-selected={index === currentSlide}
                role="tab"
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="carousel-progress" aria-hidden="true">
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