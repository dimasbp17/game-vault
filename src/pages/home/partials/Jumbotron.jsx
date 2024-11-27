import React from 'react';
import stick from '../../../../public/assets/images/stick.png';
import ButtonCustom from '../../../components/ButtonCustom';

const Jumbotron = () => {
  return (
    <>
      <div className="grid w-full grid-cols-12 my-10 text-white">
        <div className="flex flex-col justify-between col-span-full lg:col-span-6">
          <h1 className="font-semibold text-oren">
            Made by Dimas Bagus Prasetyo
          </h1>
          <h1 className="text-5xl font-bold">Discover various games</h1>
          <h3 className="text-sm leading-7 text-justify">
            Discover a vast universe of games from around the world, spanning
            diverse genres, cultures, and styles. Whether you’re a fan of
            thrilling adventures, strategic challenges, or immersive
            storytelling, we’ve got something for everyone. Explore games across
            multiple platforms, including PC, consoles, mobile, and VR, and find
            information about your favorite titles, developers, and updates.
            Dive into the gaming world and uncover your next great adventure!
          </h3>
          <ButtonCustom
            className="px-4 py-3 w-fit cut-corner hover:bg-amber-700"
            variant="primary"
          >
            Explore Games
          </ButtonCustom>
        </div>
        <div className="flex items-center justify-center py-10 pl-10 col-span-full lg:col-span-6">
          <img
            src={stick}
            alt="Stick"
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
