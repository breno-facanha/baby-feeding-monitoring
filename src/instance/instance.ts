import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3020',
  timeout: 5000, // Increased timeout for better reliability
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor for adding auth tokens if needed
instance.interceptors.request.use(
  (config) => {
    // Add auth token here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common error cases
    if (error.response?.status === 500) {
      console.error('Erro no servidor:', error.response.data);
    } else if (error.response?.status === 404) {
      console.error('Rota não encontrada:', error.config?.url);
    } else if (!error.response) {
      console.error('Erro de conexão:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default instance;