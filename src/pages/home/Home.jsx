import React, { useEffect } from 'react';
import Jumbotron from './partials/Jumbotron';
import useGameStore from '../../stores/useGameStore';

const Home = () => {
  const { games, fetchAllGames, loading, error } = useGameStore();
  useEffect(() => {
    fetchAllGames();
  }, [fetchAllGames]);
  return (
    <>
      <div>
        <Jumbotron />
      </div>
    </>
  );
};

export default Home;
