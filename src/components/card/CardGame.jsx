import { Card } from '@material-tailwind/react';
import React from 'react';
import { IoIosRocket } from 'react-icons/io';
import { IoGameController, IoStar } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CardGame = ({ link, image, alt, title, release, genre, rating }) => {
  return (
    <>
      <Link to={link}>
        <Card className="w-full text-white bg-[#333333] hover:bg-gradient-to-b hover:from-oren hover:to-oren/10 duration-300">
          <img
            src={image}
            alt={alt}
            className="rounded-xl h-[100px] md:h-[150px] object-cover object-top"
          />
          <div className="p-3 space-y-1.5">
            <h1 className="text-lg font-semibold truncate">{title}</h1>
            <h3 className="flex flex-col text-xs md:flex-row md:items-center md:justify-between">
              <span className="flex items-center gap-1 text-[11px] text-gray-500">
                <IoIosRocket /> Release date
              </span>
              <span>{release}</span>
            </h3>
            <h3 className="flex flex-col text-xs md:flex-row md:items-center md:justify-between">
              <span className="flex items-center gap-1 text-[11px] text-gray-500">
                <IoGameController /> Genre
              </span>
              <span>{genre}</span>
            </h3>
            <h3 className="flex flex-col text-xs md:flex-row md:items-center md:justify-between">
              <span className="flex items-center gap-1 text-[11px] text-gray-500">
                <IoStar /> Rating
              </span>
              <span>{rating}</span>
            </h3>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default CardGame;
