import React, { useEffect } from 'react';
import Jumbotron from './partials/Jumbotron';
import useGameStore from '../../stores/useGameStore';
import CardGame from '../../components/card/CardGame';

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
      <div className="grid grid-cols-4">
        <CardGame />
      </div>
    </>
  );
};

export default Home;
