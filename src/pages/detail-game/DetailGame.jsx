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
          <div>{gameDetail?.name}</div>
          <div>{gameDetail?.description}</div>
          <img
            src={gameDetail?.background_image}
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default DetailGame;
