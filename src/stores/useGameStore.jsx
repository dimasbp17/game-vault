import { create } from 'zustand';
import { getAllGames, getDetailGames } from '../services/gameApi';

const useGameStore = create((set) => ({
  allGames: [],
  gameDetail: null,
  loading: false,
  error: null,

  fetchAllGames: async () => {
    try {
      set({ loading: true, error: null });
      const allGames = await getAllGames();
      console.log('Fetched games:', allGames);
      set({ allGames });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  fetchGameDetail: async (id) => {
    try {
      set({ loading: true, error: null });
      const gameDetail = await getDetailGames(id);
      set({ gameDetail });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useGameStore;
