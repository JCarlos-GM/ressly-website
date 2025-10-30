import { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    id: 1,
    question: '¿Cuánto cuesta Ressly?',
    answer: 'Ressly es completamente gratuito para residentes. Los administradores tienen planes desde $299 MXN/mes según el tamaño de la residencia. Ofrecemos 30 días de prueba gratuita sin necesidad de tarjeta de crédito.',
    category: 'pricing'
  },
  {
    id: 2,
    question: '¿Necesito instalar algo en mi computadora?',
    answer: 'No. Ressly funciona desde cualquier navegador web moderno (Chrome, Firefox, Safari, Edge). Los residentes pueden descargar la app móvil desde Google Play o App Store para mayor comodidad.',
    category: 'technical'
  },
  {
    id: 3,
    question: '¿Qué pasa si cambio de residencia?',
    answer: 'Tu cuenta se mantiene activa. Solo necesitas cambiar de comunidad dentro de la misma app. Puedes estar registrado en múltiples residencias si es necesario, por ejemplo, si administras varios edificios.',
    category: 'account'
  },
  {
    id: 4,
    question: '¿Es seguro el manejo de pagos?',
    answer: 'Sí, absolutamente. Usamos encriptación de nivel bancario SSL/TLS 256-bit y cumplimos con todos los estándares PCI-DSS. No almacenamos información de tarjetas de crédito en nuestros servidores. Todos los pagos son procesados por proveedores certificados.',
    category: 'security'
  },
  {
    id: 5,
    question: '¿Puedo probar antes de contratar?',
    answer: 'Sí. Ofrecemos 30 días de prueba gratuita con todas las funcionalidades completas. No se requiere tarjeta de crédito para iniciar la prueba. Al finalizar, puedes elegir el plan que mejor se adapte a tus necesidades.',
    category: 'pricing'
  },
  {
    id: 6,
    question: '¿Qué pasa con mis datos si cancelo mi suscripción?',
    answer: 'Tus datos se mantienen almacenados de forma segura por 90 días después de la cancelación. Durante este periodo puedes reactivar tu cuenta en cualquier momento. Después de 90 días, los datos se eliminan permanentemente, excepto la información requerida por ley.',
    category: 'account'
  },
  {
    id: 7,
    question: '¿Ofrecen capacitación para usar la plataforma?',
    answer: 'Sí, incluimos capacitación gratuita para administradores mediante videollamada. También tenemos una extensa base de conocimientos con tutoriales en video, guías paso a paso y webinars mensuales gratuitos.',
    category: 'support'
  },
  {
    id: 8,
    question: '¿Puedo personalizar la apariencia de la app?',
    answer: 'Sí, en los planes Premium y Enterprise puedes personalizar el logo, colores corporativos, y agregar tu propia identidad de marca. También puedes configurar subdominios personalizados.',
    category: 'features'
  },
  {
    id: 9,
    question: '¿Qué tipo de soporte técnico incluyen?',
    answer: 'Todos los planes incluyen soporte por email con respuesta en menos de 24 horas. Los planes Premium incluyen soporte por chat en vivo 9am-6pm. El plan Enterprise incluye soporte telefónico 24/7 y un gestor de cuenta dedicado.',
    category: 'support'
  },
  {
    id: 10,
    question: '¿Puedo exportar mis datos?',
    answer: 'Sí, puedes exportar todos tus datos en cualquier momento en formato Excel (XLSX) o CSV. Incluimos reportes de residentes, pagos, incidencias, reservaciones y todas las métricas de tu residencia.',
    category: 'features'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    { id: 'all', label: 'Todas', icon: '📋' },
    { id: 'pricing', label: 'Precios', icon: '💰' },
    { id: 'technical', label: 'Técnicas', icon: '⚙️' },
    { id: 'security', label: 'Seguridad', icon: '🔒' },
    { id: 'features', label: 'Funciones', icon: '✨' },
    { id: 'support', label: 'Soporte', icon: '💬' },
    { id: 'account', label: 'Cuenta', icon: '👤' }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-header">
          <h2 className="section-title">Preguntas frecuentes</h2>
          <p className="faq-subtitle">
            Todo lo que necesitas saber sobre Ressly. ¿No encuentras tu respuesta? 
            <a href="#contact" className="faq-contact-link"> Contáctanos</a>
          </p>
        </div>

        {/* Category Filter */}
        <div className="faq-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`faq-category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="faq-list">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div 
                key={faq.id} 
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className={`faq-icon ${openIndex === index ? 'rotated' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="faq-empty">
              <p>No hay preguntas en esta categoría</p>
            </div>
          )}
        </div>

        {/* CTA at bottom */}
        <div className="faq-cta">
          <h3>¿Todavía tienes preguntas?</h3>
          <p>Nuestro equipo está listo para ayudarte</p>
          <div className="faq-cta-buttons">
            <a href="mailto:soporte@ressly.com" className="faq-cta-btn primary">
              📧 Enviar un email
            </a>
            <a href="#" className="faq-cta-btn secondary">
              💬 Chat en vivo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;