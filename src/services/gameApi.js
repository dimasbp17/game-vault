import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

export const getAllGames = async (page = 1) => {
  try {
    const allGames = await axios.get(
      `${baseUrl}/games?key=${apiKey}&page=${page}`
    );
    return allGames.data;
  } catch (error) {
    console.error('Error fetch game:', error);
  }
};

export const getDetailGames = async (slug) => {
  try {
    const detailGames = await axios.get(
      `${baseUrl}/games/${slug}?key=${apiKey}`
    );
    return detailGames.data;
  } catch (error) {
    console.error('Error fetch detail game:', error);
  }
};
