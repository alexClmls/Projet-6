import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/home';
import About from '../../pages/About/about';
import Error from '../Error/error';
import Rental from '../../pages/Rental/rental';
import { useLocation } from 'react-router-dom';
import pathToRegexp from 'path-to-regexp';

const AppRouter = () => {
  const location = useLocation();

  let wrapperClass = '';

  if (location.pathname === '/') {
    wrapperClass = 'home-page';
  } else if (location.pathname === '/a-propos') {
    wrapperClass = 'about-page';
  } else {
    // objet matchOptions pour le modèle de l'URL de la page Rental
    const matchOptions = {
      path: '/location/:id',
    };

    // regexp à partir de matchOptions
    const pageRentalRegExp = pathToRegexp(matchOptions.path);

    // vérifie si l'URL correspond à la page Rental
    if (pageRentalRegExp.test(location.pathname)) {
      wrapperClass = 'rental-page';
    } else {
      wrapperClass = 'error-page';
    }
  }

  return (
    <div className={wrapperClass}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:id" element={<Rental />} />
        <Route path='/a-propos' element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AppRouter;

