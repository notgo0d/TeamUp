import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Competitive from './components/Competitive'; 
import Casual from './components/Casual';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Competitive /> {/* Add the Competitive section */}
      <Casual /> {/* Add the Casual section */}
    </div>
  );
}

export default App;


