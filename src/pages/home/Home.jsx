import React, { useEffect } from 'react';
import Jumbotron from './partials/Jumbotron';
import useGameStore from '../../stores/useGameStore';
import CardGame from '../../components/card/CardGame';
import ButtonCustom from '../../components/ButtonCustom';
import { Link } from 'react-router-dom';

const Home = () => {
  const { allGames, fetchAllGames, loading, error } = useGameStore();

  useEffect(() => {
    fetchAllGames(1);
  }, [fetchAllGames]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <>
      <div>
        <Jumbotron />
      </div>
      <div className="my-20">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-3xl font-bold text-white">All Games</h1>
          <Link to={'/all-games'}>
            <ButtonCustom
              className="px-4 py-2 w-fit hover:bg-amber-700"
              variant="primary"
            >
              See All
            </ButtonCustom>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {allGames.map((game) => (
            <CardGame
              key={game.id}
              title={game.name}
              image={game.background_image}
              alt={game.name}
              release={formatDate(game.released)}
              genre={
                game.genres?.length
                  ? game.genres
                      .slice(0, 2)
                      .map((genre) => genre.name)
                      .join(', ')
                  : 'Unknown'
              }
              rating={game.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
