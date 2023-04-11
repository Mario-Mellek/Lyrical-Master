import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import Results from './pages/Results';
import Lyrics from './pages/Lyrics';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/results' element={<Results />}></Route>
        <Route path='/lyrics' element={<Lyrics />}></Route>
        <Route path='/credits' element={<AboutMe />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;