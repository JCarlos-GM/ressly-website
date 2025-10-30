const API_URL = import.meta.env.VITE_API_URL;

// Función base para peticiones
const fetchAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error en ${options.method || 'GET'} ${endpoint}:`, error);
    throw error;
  }
};

// ========== USUARIOS ==========
export const usuariosAPI = {
  // Obtener todos los usuarios
  getAll: () => fetchAPI('/api/usuarios'),

  // Obtener usuario por ID
  getById: (id) => fetchAPI(`/api/usuarios/${id}`),

  // Crear nuevo usuario
  create: (userData) => fetchAPI('/api/usuarios', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),

  // Actualizar usuario
  update: (id, userData) => fetchAPI(`/api/usuarios/${id}`, {
    method: 'PUT',
    body: JSON.stringify(userData),
  }),

  // Eliminar usuario
  delete: (id) => fetchAPI(`/api/usuarios/${id}`, {
    method: 'DELETE',
  }),
};

// ========== REGISTRO ==========
export const registerAPI = {
  // Validar código de invitación
  validateCode: (invitationCode) => fetchAPI('/api/register/validate-code', {
    method: 'POST',
    body: JSON.stringify({ invitationCode }),
  }),

  // Registrar residente con fotos
  registerResident: async (formData) => {
    try {
      const response = await fetch(`${API_URL}/api/register/resident`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error en el registro');
      }

      return await response.json();
    } catch (error) {
      console.error('Error en registerResident:', error);
      throw error;
    }
  },
};

// ========== HEALTH CHECK ==========
export const healthCheck = () => fetchAPI('/');