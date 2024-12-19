import { Card } from '@material-tailwind/react';
import React from 'react';

const CardGameSkeleton = () => {
  return (
    <>
      {Array(20)
        .fill()
        .map((_, index) => (
          <Card
            className="w-full bg-white rounded-lg shadow-lg"
            key={index}
          >
            <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 rounded-xl h-[100px] md:h-[150px] animate-pulse"></div>
            <div className="p-3 space-y-1.5">
              <div className="w-32 h-6 mb-4 rounded bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
              <div className="flex justify-between">
                <div className="w-24 h-4 rounded bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
                <div className="w-20 h-4 rounded bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 rounded bg-gradient-to-r from-gray-200 to-gray-300 w-14 animate-pulse"></div>
                <div className="w-24 h-4 rounded bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
              </div>
              <div className="flex justify-between">
                <div className="w-16 h-4 rounded bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
                <div className="w-20 h-4 rounded bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
              </div>
            </div>
          </Card>
        ))}
    </>
  );
};

export default CardGameSkeleton;
