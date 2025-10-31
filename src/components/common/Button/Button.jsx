/**
 * Descripción:
 * Componente de botón reutilizable de React.
 * Gestiona variantes de estilo, tamaños, estados de carga y deshabilitado
 * importando los estilos de Button.css.
 */

import { forwardRef } from 'react';
import './Button.css';

// Usamos forwardRef para permitir que los componentes padres
// obtengan una referencia (ref) al elemento <button> nativo subyacente.
const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled = false,
  fullWidth = false,
  icon,
  onClick,
  type = 'button',
  className = '', // Permite añadir clases personalizadas desde fuera
  ...props // Recoge cualquier otra prop nativa de HTML (ej. aria-label)
}, ref) => {

  // Construye dinámicamente la lista de clases CSS
  const buttonClasses = [
    'btn', // Clase base
    `btn-${variant}`, // Variante (ej. 'btn-primary')
    `btn-${size}`,     // Tamaño (ej. 'btn-medium')
    fullWidth && 'btn-full-width', // Clase condicional si fullWidth es true
    isLoading && 'btn-loading',  // Clase condicional si isLoading es true
    className
  ].filter(Boolean).join(' '); // .filter(Boolean) limpia valores falsy (como 'false' o 'null')

  return (
    <button
      ref={ref} // Asigna la ref reenviada al elemento <button>
      type={type}
      className={buttonClasses}
      onClick={onClick}
      // Un botón cargando también debe estar deshabilitado
      disabled={disabled || isLoading}
      {...props} // Pasa las props extra (como aria-label) al botón
    >
      {/* Renderizado condicional: muestra spinner o contenido normal */}
      {isLoading ? (
        <>
          {/* El spinner definido en el CSS */}
          <span className="btn-spinner" />
          {/* Texto alternativo mientras carga (se oculta por CSS) */}
          Cargando... 
        </>
      ) : (
        <>
          {/* Muestra el ícono solo si se proporciona */}
          {icon && <span className="btn-icon">{icon}</span>}
          {/* 'children' es el contenido principal (ej. el texto) del botón */}
          {children}
        </>
      )}
    </button>
  );
});

// Asigna un nombre de visualización para mejorar la depuración en React DevTools
Button.displayName = 'Button';

export default Button;