import './Card.css';

const Card = ({ 
  children, 
  icon, 
  title, 
  description, 
  hover = true,
  className = '',
  ...props 
}) => {
  const cardClasses = [
    'card',
    hover && 'card-hover',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...props}>
      {icon && (
        <div className="card-icon">
          {icon}
        </div>
      )}
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {children}
    </div>
  );
};

export default Card;