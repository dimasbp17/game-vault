import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import MainLayout from './layouts/MainLayout';
import About from './pages/about/About';
import AllGames from './pages/all-games/AllGames';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/all-games"
              element={<AllGames />}
            />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
