import { create } from 'zustand';
import { getAllGames, getDetailGames } from '../services/gameApi';

const useGameStore = create((set) => ({
  allGames: [],
  gameDetail: null,
  nextPage: null,
  prevPage: null,
  countGame: null,
  loading: false,
  error: null,

  fetchAllGames: async (page) => {
    try {
      set({ loading: true, error: null });
      const data = await getAllGames(page);
      set({
        allGames: data.results,
        nextPage: data.next,
        prevPage: data.previous,
        countGame: data.count,
      });
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
