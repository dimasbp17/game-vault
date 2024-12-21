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
        <div className="relative -mx-20">
          <div
            className="relative w-full h-screen px-20 bg-center bg-cover"
            style={{
              backgroundImage: `linear-gradient(to top, #39289F, rgba(0, 0, 0, 0.5)), url(${gameDetail?.background_image})`,
            }}
          >
            <h1 className="text-5xl font-bold">{gameDetail?.name}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: gameDetail?.description }}
              className="text-justify"
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailGame;
