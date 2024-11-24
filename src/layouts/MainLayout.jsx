import React from 'react';
import Footer from '../components/Footer';
import NavbarHeader from '../components/NavbarHeader';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-biru">
      <NavbarHeader />
      <main className="container flex-grow px-4 mx-auto lg:px-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
