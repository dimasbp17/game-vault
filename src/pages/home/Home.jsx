import React, { useEffect } from 'react';
import Jumbotron from './partials/Jumbotron';
import useGameStore from '../../stores/useGameStore';

const Home = () => {
  const { games, fetchGames, loading, error } = useGameStore();
  useEffect(() => {
    fetchGames();
  }, [fetchGames]);
  return (
    <>
      <div>
        <Jumbotron />
      </div>
    </>
  );
};

export default Home;
