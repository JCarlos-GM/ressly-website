/**
 * Descripción:
 * Componente genérico de "tarjeta" (Card).
 * Permite renderizar contenido flexible (título, ícono, descripción)
 * y también contenido personalizado a través de 'children'.
 * Importa los estilos de Card.css.
 */

import './Card.css';

const Card = ({
  children, // Contenido extra o personalizado que se pasa dentro de la tarjeta
  icon,
  title,
  description,
  hover = true, // El efecto hover está activado por defecto
  className = '', // Clases personalizadas
  ...props // Resto de props (ej. onClick, id)
}) => {

  // Construye las clases CSS dinámicamente
  const cardClasses = [
    'card', // Clase base
    hover && 'card-hover', // Añade 'card-hover' solo si hover es true
    className
  ].filter(Boolean).join(' '); // Limpia valores 'false' o 'null'

  return (
    // Pasa las props extra (ej. onClick) al div contenedor
    <div className={cardClasses} {...props}>
      
      {/* Renderizado condicional: solo muestra el ícono si se proporciona */}
      {icon && (
        <div className="card-icon">
          {icon}
        </div>
      )}

      {/* Renderizado condicional: solo muestra el título si se proporciona */}
      {title && <h3 className="card-title">{title}</h3>}
      
      {/* Renderizado condicional: solo muestra la descripción si se proporciona */}
      {description && <p className="card-description">{description}</p>}
      
      {/* Muestra cualquier otro elemento hijo (children) pasado al componente */}
      {children}
    </div>
  );
};

export default Card;