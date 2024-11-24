import React from 'react';

const ButtonCustom = ({ children, className = '', variant }) => {
  const baseStyles =
    'px-4 py-3 font-medium text-sm focus:outline-none transition duration-200 shadow-lg';

  const variants = {
    primary: 'bg-oren text-white',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  };

  return (
    <>
      <button
        type="button"
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonCustom;
