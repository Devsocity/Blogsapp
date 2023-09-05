import { useState } from 'react';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import { RouterProvider } from 'react-router-dom';
import { Router } from './router/Router.jsx';
import './App.css';

function App() {
  return (
    <div className='bg-slate-50 min-h-screen'>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
