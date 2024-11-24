import React from 'react';
import stick from '../../../../public/assets/images/stick.png';

const Jumbotron = () => {
  return (
    <>
      <div className="grid w-full grid-cols-12 my-10 text-white">
        <div className="col-span-full lg:col-span-6">
          <h1 className="font-semibold text-oren">Made By Dimas</h1>
          <h1 className="my-5 text-5xl font-bold">Discover various games</h1>
          <h3 className="text-sm leading-7 text-justify mt-7">
            Discover a vast universe of games from around the world, spanning
            diverse genres, cultures, and styles. Whether you’re a fan of
            thrilling adventures, strategic challenges, or immersive
            storytelling, we’ve got something for everyone. Explore games across
            multiple platforms, including PC, consoles, mobile, and VR, and find
            information about your favorite titles, developers, and updates.
            Dive into the gaming world and uncover your next great adventure!
          </h3>
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
