import { useState, useEffect } from 'react';
import { healthCheck, usuariosAPI } from './services/api';
import './App.css';

function App() {
  const [status, setStatus] = useState('Conectando...');
  const [apiInfo, setApiInfo] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Probar health check
        const health = await healthCheck();
        setApiInfo(health);
        setStatus('✅ API conectada correctamente');

        // Probar endpoint de usuarios
        const users = await usuariosAPI.getAll();
        setUsuarios(users);
        
        setLoading(false);
      } catch (error) {
        setStatus(`❌ Error: ${error.message}`);
        setLoading(false);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="App">
      <h1>Ressly Website</h1>
      
      <div style={{ textAlign: 'left', maxWidth: '800px', margin: '20px auto' }}>
        <h2>Estado de la API</h2>
        <p><strong>URL:</strong> {import.meta.env.VITE_API_URL}</p>
        <p><strong>Estado:</strong> {status}</p>
        
        {loading && <p>⏳ Cargando (puede tardar 30-60s si la API estaba dormida)...</p>}
        
        {apiInfo && (
          <div>
            <h3>Información de la API:</h3>
            <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px' }}>
              {JSON.stringify(apiInfo, null, 2)}
            </pre>
          </div>
        )}

        {usuarios.length > 0 && (
          <div>
            <h3>Usuarios ({usuarios.length}):</h3>
            <ul>
              {usuarios.map(user => (
                <li key={user.id}>
                  {user.nombre || user.name || JSON.stringify(user)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;