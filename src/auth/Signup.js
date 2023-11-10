import React from 'react';
import './Signup.css'; // Create a new CSS file for the Signup component

const Signup = ({ closeSignup }) => {
  return (
    <div className="auth-modal">
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={closeSignup}>Close</button>
    </div>
  );
};

export default Signup;

