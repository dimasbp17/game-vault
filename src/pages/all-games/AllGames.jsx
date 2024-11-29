import React, { useEffect } from 'react';
import useGameStore from '../../stores/useGameStore';
import CardGame from '../../components/card/CardGame';

const AllGames = () => {
  const { allGames, fetchAllGames, loading, error } = useGameStore();
  useEffect(() => {
    fetchAllGames();
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
      <div className="my-10">
        <h1 className="mb-5 text-3xl font-bold text-white">All Games</h1>
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

export default AllGames;
