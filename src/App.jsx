import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import About from './pages/about/About';
import AllGames from './pages/all-games/AllGames';
import DetailGame from './pages/detail-game/DetailGame';
import Home from './pages/home/Home';

const App = () => {
  return (
    <>
      <Router>
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
            <Route
              path="/game-detail/:slug"
              element={<DetailGame />}
            />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};

export default App;
