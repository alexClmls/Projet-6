import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Error from '../Error';
import Rental from '../../pages/Rental';

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:id" element={<Rental />} />
        <Route path='/a-propos' element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
  );
};

export default AppRouter;
