// Login.js
import React from 'react';
import './Login.css'; // Create a new CSS file for the Login component

const Login = ({ closeLogin }) => {
  return (
    <div className="auth-modal">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button type="submit">Login</button>
      </form>
      <button onClick={closeLogin}>Close</button>
    </div>
  );
};

export default Login;
