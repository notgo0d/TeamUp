// App.js
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Competitive from './components/Competitive';
import Casual from './components/Casual';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/competitive" element={<Competitive />} />
        <Route path="/casual" element={<Casual />} />
      </Routes>
    </div>
  );
}

export default App;













