import { useState } from 'react';
import Input from '../../components/common/Input/Input';
import Button from '../../components/common/Button/Button';
import './Register.css';

import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Building, 
  DoorOpen, 
  Ticket, 
  Check, 
  Circle, 
  ArrowLeft,
  AlertTriangle 
} from 'lucide-react';

const Register = ({ onBackToHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    residenceName: '',
    address: '',
    rooms: '',
    residenceType: '',
    inviteCode: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: 'Muy débil',
    requirements: {
      length: false,
      uppercase: false,
      number: false,
      special: false
    }
  });

  const checkPasswordStrength = (password) => {
    const requirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    const score = Object.values(requirements).filter(Boolean).length;
    const labels = ['Muy débil', 'Débil', 'Media', 'Buena', 'Fuerte'];

    setPasswordStrength({
      score,
      label: labels[score],
      requirements
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido';
    }

    const phoneRegex = /^\+?\d{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Ingresa un número de teléfono válido';
    }

    if (!passwordStrength.requirements.length || 
        !passwordStrength.requirements.uppercase || 
        !passwordStrength.requirements.number || 
        !passwordStrength.requirements.special) {
      newErrors.password = 'La contraseña no cumple los requisitos mínimos';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (formData.residenceName.trim().length < 5) {
      newErrors.residenceName = 'El nombre debe tener al menos 5 caracteres';
    }

    if (formData.address.trim().length < 10) {
      newErrors.address = 'Ingresa una dirección completa';
    }

    const rooms = parseInt(formData.rooms);
    if (isNaN(rooms) || rooms < 5 || rooms > 500) {
      newErrors.rooms = 'Debe ser un número entre 5 y 500';
    }

    if (!formData.residenceType) {
      newErrors.residenceType = 'Selecciona un tipo de residencia';
    }

    if (formData.inviteCode.length !== 6) {
      newErrors.inviteCode = 'El código debe tener 6 caracteres';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los términos para continuar';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstError = Object.keys(errors)[0];
      const element = document.getElementsByName(firstError)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error:', error);
      setErrors({ submit: 'Ocurrió un error. Por favor intenta de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="register-page">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">
              <Check size={40} />
            </div>
            <h2>¡Bienvenido a Ressly!</h2>
            <p>
              Tu cuenta ha sido creada exitosamente. Te hemos enviado un correo de verificación a{' '}
              <strong>{formData.email}</strong>
            </p>
            <div className="success-next-steps">
              <h3>Próximos pasos:</h3>
              <ol>
                <li>Verifica tu correo electrónico</li>
                <li>Completa tu perfil de administrador</li>
                <li>Configura tu residencia</li>
                <li>Invita a tus primeros residentes</li>
              </ol>
            </div>
            <Button variant="primary" size="large" onClick={onBackToHome}>
              Ir al inicio
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="register-page">
      <div className="container">
        <div className="register-header">
          <Button variant="ghost" onClick={onBackToHome} icon={<ArrowLeft size={16} />}>
            Volver al inicio
          </Button>
          <h1>Comienza a gestionar tu residencia hoy</h1>
          <p>Crea tu cuenta de administrador en menos de 2 minutos</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3 className="form-section-title">Información Personal</h3>
            
            <Input
              label="Nombre completo"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Juan Pérez García"
              icon={<User size={18} />}
              required
            />

            <Input
              label="Correo electrónico"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="tu@correo.com"
              icon={<Mail size={18} />}
              required
            />

            <Input
              label="Teléfono"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="+52 444 123 4567"
              icon={<Phone size={18} />}
              required
            />

            <Input
              label="Contraseña"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="••••••••"
              icon={<Lock size={18} />}
              required
            />

            {formData.password && (
              <div className="password-strength">
                <div className="strength-bars">
                  {[1, 2, 3, 4].map((bar) => (
                    <div
                      key={bar}
                      className={`strength-bar ${bar <= passwordStrength.score ? 'active' : ''}`}
                    />
                  ))}
                </div>
                <p className="strength-label" style={{ 
                  color: passwordStrength.score < 2 ? 'var(--color-error)' : 
                         passwordStrength.score < 4 ? 'var(--color-warning)' : 'var(--color-success)'
                }}>
                  {passwordStrength.label}
                </p>
                <div className="password-requirements">
                  <div className={`requirement ${passwordStrength.requirements.length ? 'met' : ''}`}>
                    <span className="icon">
                      {passwordStrength.requirements.length ? <Check size={16} /> : <Circle size={16} />}
                    </span>
                    Al menos 8 caracteres
                  </div>
                  <div className={`requirement ${passwordStrength.requirements.uppercase ? 'met' : ''}`}>
                    <span className="icon">
                      {passwordStrength.requirements.uppercase ? <Check size={16} /> : <Circle size={16} />}
                    </span>
                    Una letra mayúscula
                  </div>
                  <div className={`requirement ${passwordStrength.requirements.number ? 'met' : ''}`}>
                    <span className="icon">
                      {passwordStrength.requirements.number ? <Check size={16} /> : <Circle size={16} />}
                    </span>
                    Un número
                  </div>
                  <div className={`requirement ${passwordStrength.requirements.special ? 'met' : ''}`}>
                    <span className="icon">
                      {passwordStrength.requirements.special ? <Check size={16} /> : <Circle size={16} />}
                    </span>
                    Un carácter especial
                  </div>
                </div>
              </div>
            )}

            <Input
              label="Confirmar contraseña"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder="••••••••"
              icon={<Lock size={18} />}
              required
            />
          </div>

          <div className="form-section">
            <h3 className="form-section-title">Información de la Residencia</h3>
            
            <Input
              label="Nombre de la residencia"
              name="residenceName"
              value={formData.residenceName}
              onChange={handleChange}
              error={errors.residenceName}
              placeholder="Residencia Estudiantil San Francisco"
              icon={<Building size={18} />}
              required
            />

            <div className="input-group">
              <label htmlFor="address" className="input-label">
                Dirección completa<span className="input-required">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Calle, número, colonia, código postal, ciudad, estado"
                className={`input-field textarea ${errors.address ? 'has-error' : ''}`}
                rows="3"
                required
              />
              {errors.address && (
                <span className="input-error">
                  <span className="error-icon"><AlertTriangle size={14} /></span>
                  {errors.address}
                </span>
              )}
            </div>

            <Input
              label="Número de habitaciones/unidades"
              type="number"
              name="rooms"
              value={formData.rooms}
              onChange={handleChange}
              error={errors.rooms}
              placeholder="50"
              min="5"
              max="500"
              helperText="Mínimo 5, máximo 500"
              icon={<DoorOpen size={18} />}
              required
            />

            <div className="input-group">
              <label htmlFor="residenceType" className="input-label">
                Tipo de residencia<span className="input-required">*</span>
              </label>
              <select
                id="residenceType"
                name="residenceType"
                value={formData.residenceType}
                onChange={handleChange}
                className={`input-field ${errors.residenceType ? 'has-error' : ''}`}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="estudiantil">Residencia estudiantil</option>
                <option value="universitaria">Residencia universitaria</option>
                <option value="departamentos">Departamentos amueblados</option>
                <option value="huespedes">Casa de huéspedes</option>
                <option value="otro">Otro</option>
              </select>
              {errors.residenceType && (
                <span className="input-error">
                  <span className="error-icon"><AlertTriangle size={14} /></span>
                  {errors.residenceType}
                </span>
              )}
            </div>
          </div>

          <div className="form-section">
            <h3 className="form-section-title">Código de Invitación</h3>
            
            <Input
              label="Código de invitación"
              name="inviteCode"
              value={formData.inviteCode}
              onChange={handleChange}
              error={errors.inviteCode}
              placeholder="XXXXXX"
              maxLength="6"
              helperText={
                <>
                  ¿No tienes código?{' '}
                  <a href="#" className="helper-link">
                    Solicítalo aquí
                  </a>
                </>
              }
              icon={<Ticket size={18} />}
              required
            />
          </div>

          <div className="form-section">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              <span>
                Acepto los{' '}
                <a href="#" className="link">
                  Términos y Condiciones
                </a>{' '}
                y la{' '}
                <a href="#" className="link">
                  Política de Privacidad
                </a>
              </span>
            </label>
            {errors.acceptTerms && (
              <span className="input-error">
                <span className="error-icon"><AlertTriangle size={14} /></span>
                {errors.acceptTerms}
              </span>
            )}
          </div>

          {errors.submit && (
            <div className="submit-error">
              <span className="error-icon"><AlertTriangle size={18} /></span>
              {errors.submit}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="large"
            fullWidth
            isLoading={isSubmitting}
          >
            {isSubmitting ? 'Creando cuenta...' : 'Crear cuenta'}
          </Button>

          <p className="form-footer">
            ¿Ya tienes cuenta?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); onBackToHome(); }} className="link">
              Inicia sesión
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
