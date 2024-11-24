import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import MainLayout from './layouts/MainLayout';
import About from './pages/about/About';

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
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
