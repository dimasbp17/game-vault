import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import MainLayout from './layouts/MainLayout';

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
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
