
const getApiBaseUrl = () => {
  
  if (typeof window !== 'undefined') {
    const currentHost = window.location.hostname;
    const currentPort = window.location.port;
    
    if (currentHost !== 'localhost' && currentHost !== '127.0.0.1') {
      return `http://${currentHost}:3000`;
    }
  }
  
  return 'http://localhost:3000';
};

export const API_BASE_URL = getApiBaseUrl();