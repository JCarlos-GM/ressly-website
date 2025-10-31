// src/components/sections/Features/Features.jsx
import { useState } from 'react';
import Card from '../../common/Card/Card';
import { 
  Users, 
  MessageCircle, 
  CreditCard, 
  Wrench, 
  Car, 
  UserPlus,
  PawPrint,
  Waves,
  Coins,
  Vote,
  BarChart3,
  Shield
} from 'lucide-react';
import './Features.css';

const featuresData = {
  principales: [
    {
      icon: Users,
      title: 'Gestión de Residentes',
      description: 'Registro automático, perfiles completos y control de acceso en tiempo real.'
    },
    {
      icon: MessageCircle,
      title: 'Comunicación Instantánea',
      description: 'Notificaciones push, avisos generales y chat directo con administración.'
    },
    {
      icon: CreditCard,
      title: 'Control de Pagos',
      description: 'Seguimiento de rentas, pagos en línea seguros y recordatorios automáticos.'
    },
    {
      icon: Wrench,
      title: 'Reportes y Mantenimiento',
      description: 'Gestiona incidencias, asigna prioridades y da seguimiento en tiempo real.'
    },
    {
      icon: Car,
      title: 'Gestión de Vehículos',
      description: 'Control de estacionamiento, registro y asignación de lugares.'
    },
    {
      icon: Shield,
      title: 'Seguridad y Privacidad',
      description: 'Encriptación de datos, accesos controlados y cumplimiento con GDPR.'
    }
  ],
  adicionales: [
    {
      icon: UserPlus,
      title: 'Control de Visitas',
      description: 'Pre-registro de visitas, códigos QR temporales y notificaciones automáticas.'
    },
    {
      icon: PawPrint,
      title: 'Registro de Mascotas',
      description: 'Perfiles completos con fotos, vacunas y datos del veterinario.'
    },
    {
      icon: Waves,
      title: 'Reservación de Áreas',
      description: 'Gestiona áreas comunes con calendario inteligente y pagos integrados.'
    },
    {
      icon: Coins,
      title: 'Sistema de Tokens',
      description: 'Tokens digitales para servicios adicionales con control de consumo.'
    },
    {
      icon: Vote,
      title: 'Votaciones Digitales',
      description: 'Votaciones seguras con resultados en tiempo real y verificación.'
    },
    {
      icon: BarChart3,
      title: 'Reportes y Estadísticas',
      description: 'Dashboard completo con métricas y exportación de reportes.'
    }
  ]
};

const Features = () => {
  const [activeTab, setActiveTab] = useState('principales');

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Todo lo que necesitas, en un solo lugar</h2>
        <p className="features-subtitle">
          Simplifica la gestión de tu residencia con nuestras herramientas inteligentes
        </p>

        {/* Tabs */}
        <div className="features-tabs">
          <button
            className={`tab-button ${activeTab === 'principales' ? 'active' : ''}`}
            onClick={() => setActiveTab('principales')}
          >
            <span className="tab-icon">⭐</span>
            Características Principales
          </button>
          <button
            className={`tab-button ${activeTab === 'adicionales' ? 'active' : ''}`}
            onClick={() => setActiveTab('adicionales')}
          >
            <span className="tab-icon">✨</span>
            Funciones Adicionales
          </button>
        </div>

        {/* Grid de Features */}
        <div className="features-grid">
          {featuresData[activeTab].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                icon={<IconComponent size={28} strokeWidth={2} />}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;