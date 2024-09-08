import axios from 'axios'

export const getReverseGeolocation = async (latitude: string, longitude: string) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
      return response.data
    } catch (error) {
      console.error('Erro ao recuperar geolocalização:', error);
      return null;
    }
  };