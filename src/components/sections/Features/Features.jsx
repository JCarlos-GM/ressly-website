import Card from '../../common/Card/Card';
import './Features.css';

const featuresData = [
  {
    icon: '👥',
    title: 'Gestión de Residentes',
    description: 'Registro automático, perfiles completos y control de acceso en tiempo real. Administra información de contacto, historial de pagos y datos de emergencia.'
  },
  {
    icon: '💬',
    title: 'Comunicación Instantánea',
    description: 'Notificaciones push, avisos generales y chat directo con administración. Mantén informada a toda la comunidad al instante.'
  },
  {
    icon: '💳',
    title: 'Control de Pagos',
    description: 'Seguimiento de rentas, pagos en línea seguros y recordatorios automáticos. Múltiples métodos de pago con encriptación bancaria.'
  },
  {
    icon: '🔧',
    title: 'Reportes y Mantenimiento',
    description: 'Los residentes reportan incidencias y tú las gestionas desde el panel. Asigna prioridades, técnicos y da seguimiento en tiempo real.'
  },
  {
    icon: '🚗',
    title: 'Gestión de Vehículos',
    description: 'Registro de vehículos, control de estacionamiento y asignación de lugares. Genera gafetes digitales y controla el acceso vehicular.'
  },
  {
    icon: '👋',
    title: 'Control de Visitas',
    description: 'Sistema de pre-registro de visitas, códigos QR de acceso temporal y notificaciones automáticas. Seguridad mejorada para tu residencia.'
  },
  {
    icon: '🐾',
    title: 'Registro de Mascotas',
    description: 'Perfiles completos de mascotas con fotos, vacunas y datos del veterinario. Facilita el control y cumplimiento de reglamentos.'
  },
  {
    icon: '🏊',
    title: 'Reservación de Áreas',
    description: 'Gestiona salones de eventos, gimnasio, alberca y áreas comunes. Sistema de reservaciones con calendario inteligente y pagos integrados.'
  },
  {
    icon: '🪙',
    title: 'Sistema de Tokens',
    description: 'Crea tokens digitales para servicios adicionales como lavandería, agua purificada o amenidades. Control total del consumo.'
  },
  {
    icon: '🗳️',
    title: 'Votaciones Digitales',
    description: 'Organiza votaciones seguras para decisiones de la comunidad. Resultados en tiempo real con verificación de identidad.'
  },
  {
    icon: '📊',
    title: 'Reportes y Estadísticas',
    description: 'Dashboard completo con métricas de ocupación, ingresos, incidencias y más. Exporta reportes en PDF o Excel.'
  },
  {
    icon: '🔒',
    title: 'Seguridad y Privacidad',
    description: 'Encriptación de datos, accesos controlados por roles y cumplimiento con GDPR. Tu información siempre protegida.'
  }
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Todo lo que necesitas, en un solo lugar</h2>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;