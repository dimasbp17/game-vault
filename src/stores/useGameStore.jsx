import { create } from 'zustand';
import { getAllGames } from '../services/api';

const useGameStore = create((set) => ({
  games: [],
  loading: false,
  error: null,

  fetchGames: async () => {
    set({ loading: true, error: null });
    try {
      const games = await getAllGames();
      set({ games, loading: false });
      console.log('Fetched games:', games);
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useGameStore;
