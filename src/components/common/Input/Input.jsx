import { useState, forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(({
  label,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  required = false,
  placeholder,
  icon,
  disabled = false,
  maxLength,
  className = '',
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const inputClasses = [
    'input-field',
    icon && 'has-icon',
    error && 'has-error',
    isFocused && 'is-focused',
    disabled && 'is-disabled',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="input-group">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      
      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        
        <input
          ref={ref}
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          className={inputClasses}
          required={required}
          {...props}
        />

        {type === 'password' && value && (
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex="-1"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>

      {error && (
        <span className="input-error">
          <span className="error-icon">⚠️</span>
          {error}
        </span>
      )}

      {helperText && !error && (
        <span className="input-helper">{helperText}</span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;