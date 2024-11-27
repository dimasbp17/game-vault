import { IconButton, MobileNav } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../public/assets/images/logo.png';
import Search from './Search';

const NavbarHeader = () => {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 mt-5 text-white lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-16">
      <Link
        to={'/'}
        className={`flex items-center ${
          location.pathname === '/' ? 'border-b-2 border-oren' : ''
        }`}
      >
        Home
      </Link>
      <Link
        to={'/about'}
        className={`flex items-center ${
          location.pathname === '/about' ? 'border-b-2 border-oren' : ''
        }`}
      >
        About
      </Link>
      <Link
        to={'/game'}
        className={`flex items-center ${
          location.pathname === '/game' ? 'border-b-2 border-oren' : ''
        }`}
      >
        Game
      </Link>
    </ul>
  );

  return (
    <>
      <div className="w-full">
        <div className="sticky top-0 z-10 max-w-full px-4 pt-4 rounded-none bg-biru lg:px-10 lg:py-5 bg-none">
          <div className="flex items-center justify-between text-blue-gray-900">
            <img
              src={logo}
              alt="Logo"
              className="w-24 lg:w-32"
            />
            <div className="">
              <Search />
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden mr-4 lg:block">{navList}</div>

              <IconButton
                variant="text"
                className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <IoClose
                    size={25}
                    className="text-white"
                  />
                ) : (
                  <IoMenu
                    size={25}
                    className="text-white"
                  />
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>{navList}</MobileNav>
        </div>
      </div>
    </>
  );
};

export default NavbarHeader;
