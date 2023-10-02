import React from 'react';

import { BrowserRouter, Route, Routes, } from 'react-router-dom'

import Navbar from './components/navbar/navbar'
import Feed from './components/feed/feed';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <section className="layout">
        <div className="sidebar"><Navbar></Navbar></div>
        <div className="body">
          <Routes>
            <Route path='/' element={<Feed />} /> 
            <Route path='/users' element={<Navbar />} /> 
            <Route path='/' element={<Feed />} /> 
            <Route path='/' element={<Feed />} /> 
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;




