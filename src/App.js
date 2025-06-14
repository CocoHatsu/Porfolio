import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import {link} from 'react-scroll'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bei" element={<About />} />
      </Routes>
    </BrowserRouter>



  );
}

  


export default App;
