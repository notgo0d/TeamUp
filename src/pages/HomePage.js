// Home.js
import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component

const HomePage = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar in the Home component */}
      <h2>Welcome to the Home Page!</h2>
      {/* Add your home content here */}
    </div>
  );
};

export default HomePage;

