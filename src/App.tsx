import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OfertaEducativa from './Components/OfertaEducativa';
import Conocenos from './Components/Conocenos';
import Header from './Components/header';
import Navbar from './Components/navbar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route index path="/" element={<Conocenos />} />
        <Route path="/oferta-educativa" element={<OfertaEducativa />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;