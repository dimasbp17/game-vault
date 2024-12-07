import React from 'react';
import Footer from '../components/Footer';
import NavbarHeader from '../components/NavbarHeader';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-biru">
      <NavbarHeader />
      <main className="flex-grow px-4 md:px-10 lg:px-20">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
