import React from 'react';
import { Route, Routes } from 'react-router-dom';




import './App.css';
import { About } from './pages/about/about';

import { Home } from './pages/home/home';
import Login from './pages/login/login';
import Menu from './pages/menu/home';




const App = () => {

  return (
    <>
      <div className='container'>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />}
          />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
