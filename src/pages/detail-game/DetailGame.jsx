import React, { useEffect } from 'react';
import useGameStore from '../../stores/useGameStore';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';

const DetailGame = () => {
  const { slug } = useParams();
  const { gameDetail, fetchGameDetail, loading } = useGameStore();
  useEffect(() => {
    fetchGameDetail(slug);
  }, [slug, fetchGameDetail]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1 className="text-5xl font-bold">{gameDetail?.name}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: gameDetail?.description }}
            className="text-justify"
          ></div>
          <img
            src={gameDetail?.background_image}
            alt={gameDetail?.name}
            className="w-full h-[500px] object-cover"
          />
        </div>
      )}
    </>
  );
};

export default DetailGame;
