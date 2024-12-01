import React from 'react';
import { IconButton } from '@material-tailwind/react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const Pagination = ({ onPrevious, onNext, hasPrevious, hasNext }) => {
  return (
    <div className="flex justify-center w-full font-poppins">
      <div className="flex items-center justify-center mt-8 space-x-2">
        <IconButton
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="text-white bg-oren disabled:bg-gray-400"
          size="sm"
        >
          <MdArrowBackIos />
        </IconButton>

        <IconButton
          onClick={onNext}
          disabled={!hasNext}
          className="text-white bg-oren disabled:bg-gray-400"
          size="sm"
        >
          <MdArrowForwardIos />
        </IconButton>
      </div>
    </div>
  );
};

export default Pagination;
