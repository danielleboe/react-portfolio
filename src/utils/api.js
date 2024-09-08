// src/utils/api.js or any component making API requests
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5100'; // Fallback for local development

export const fetchData = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/some-endpoint`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
