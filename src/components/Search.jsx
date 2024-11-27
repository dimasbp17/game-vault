import React from 'react';
import { IoMdSearch } from 'react-icons/io';

const Search = () => {
  return (
    <>
      <div className="relative flex items-center w-full ">
        <div className="absolute px-3 text-white">
          <IoMdSearch />
        </div>
        <input
          type="search"
          className="text-sm lg:w-[600px] duration-200 px-8  py-2 rounded-full focus:border focus:bg-white hover:bg-white focus:border-gray-300 bg-white/20 focus:outline-none"
          placeholder="Search game..."
        />
      </div>
    </>
  );
};

export default Search;
