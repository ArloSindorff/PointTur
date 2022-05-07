import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './Pages/Home/home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Roteiro } from './Pages/Roteiro/roteiro';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Roteiro />} path='/Roteiro' />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


