import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
import Header from './components/Header'
// import Error from './components/Error'
// import Rental from './pages/Rental'

import "./index.css"
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div id='wrapper'>
        <Header />
        <AppRouter />
      </div> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)