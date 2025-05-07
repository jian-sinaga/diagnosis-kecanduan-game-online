import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Informasi from './pages/Informasi';
import Diagnosis from './pages/Diagnosis';
import HasilDiagnosis from './pages/HasilDiagnosis';
import Kontak from './pages/Kontak';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/diagnosis" element={<Diagnosis
