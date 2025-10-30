import { useState } from 'react';
import Navbar from './components/common/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import Features from './components/sections/Features/Features';
import Carousel from './components/sections/Carousel/Carousel';
import Testimonials from './components/sections/Testimonials/Testimonials';
import CTA from './components/sections/CTA/CTA';
import FAQ from './components/sections/FAQ/FAQ';
import Footer from './components/common/Footer/Footer';
import Register from './pages/Register/Register'; 
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
        <>
          <main>
            <Hero />
            <Features />
            <Carousel />
            <Testimonials />
            <CTA onRegisterClick={handleRegisterClick} />
            <FAQ />
          </main>
          <Footer />
        </>
      ) : (
        <Register onBackToHome={handleBackToHome} /> 
      )}
    </div>
  );
}

export default App;