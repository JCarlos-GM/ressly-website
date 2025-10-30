import { useState } from 'react';
import Navbar from './components/common/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import Features from './components/sections/Features/Features';
import Carousel from './components/sections/Carousel/Carousel';
import Testimonials from './components/sections/Testimonials/Testimonials';
import CTA from './components/sections/CTA/CTA';
import FAQ from './components/sections/FAQ/FAQ';  // ← Agregar
import './styles/globals.css';

function App() {
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setShowRegister(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar onRegisterClick={handleRegisterClick} />
      
      {!showRegister ? (
        <main>
          <Hero />
          <Features />
          <Carousel />
          <Testimonials />
          <CTA onRegisterClick={handleRegisterClick} />
          <FAQ />  {/* ← Agregar */}
        </main>
      ) : (
        <main>
          <div style={{ paddingTop: '100px', textAlign: 'center' }}>
            <h2>Página de Registro (En construcción)</h2>
            <button onClick={handleBackToHome}>Volver al inicio</button>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;