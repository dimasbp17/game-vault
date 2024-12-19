import { Spinner } from '@material-tailwind/react';
import React from 'react';

const Loading = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-80">
        <Spinner color="deep-orange" />
        <h3 className="text-lg">Loading...</h3>
      </div>
    </>
  );
};

export default Loading;
