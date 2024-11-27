import { Card } from '@material-tailwind/react';
import React from 'react';
import game from '../../../public/assets/images/game.png';

const CardGame = () => {
  return (
    <>
      <Card className="w-full text-white bg-[#333333]">
        <img
          src={game}
          alt=""
          className="rounded-xl h-[150px] object-cover"
        />
        <div className="p-3">
          <h1 className="font-semibold ">Nama Game</h1>
        </div>
      </Card>
    </>
  );
};

export default CardGame;
