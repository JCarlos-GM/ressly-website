import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Laura Martínez',
    position: 'Administradora',
    company: 'Residencia Universitaria San José',
    avatar: 'LM',
    quote: 'Ressly redujo en 60% el tiempo que dedicaba a gestión de pagos. Ahora puedo enfocarme en mejorar la experiencia de los estudiantes.',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    position: 'Director',
    company: 'Casa Estudiantil del Centro',
    avatar: 'CR',
    quote: 'La comunicación con más de 80 residentes era caótica. Con Ressly todos reciben información al instante.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Torres',
    position: 'Gerente',
    company: 'Residencias Plaza Universidad',
    avatar: 'AT',
    quote: 'Implementamos Ressly en 3 días. La curva de aprendizaje es prácticamente nula.',
    rating: 5
  },
  {
    id: 4,
    name: 'Miguel Ángel Pérez',
    position: 'Administrador',
    company: 'Residencia Estudiantil Los Pinos',
    avatar: 'MP',
    quote: 'El sistema de pagos en línea incrementó nuestra puntualidad de cobro en un 85%. Ya no tenemos que perseguir a los residentes.',
    rating: 5
  },
  {
    id: 5,
    name: 'Patricia González',
    position: 'Coordinadora',
    company: 'Departamentos Universitarios Norte',
    avatar: 'PG',
    quote: 'La función de reportes de mantenimiento es increíble. Los residentes reportan, nosotros asignamos y damos seguimiento sin caos.',
    rating: 5
  },
  {
    id: 6,
    name: 'Roberto Sánchez',
    position: 'Propietario',
    company: 'Casa de Huéspedes El Roble',
    avatar: 'RS',
    quote: 'El control de visitas y vehículos mejoró significativamente nuestra seguridad. Los residentes se sienten más protegidos.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">Residencias que confían en Ressly</h2>
        <p className="testimonials-subtitle">
          Más de 100 residencias ya transformaron su gestión con nuestra plataforma
        </p>
        
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              {/* Stars Rating */}
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <span key={index} className="star">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="testimonial-quote">"{testimonial.quote}"</p>

              {/* Author Info */}
              <div className="testimonial-author">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="quote-icon">❝</div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Residencias</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Residentes activos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Calificación promedio</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Tasa de satisfacción</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;