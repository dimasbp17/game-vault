import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

export const getAllGames = async () => {
  try {
    const allGames = await axios.get(`${baseUrl}/games?key=${apiKey}`);
    return allGames.data.results;
  } catch (error) {
    console.error('Error fetch game:', error);
  }
};
