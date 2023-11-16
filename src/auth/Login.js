import React, { useState } from 'react';
import './Login.css';
import firebase from '../bd/firebase'; // Import your Firebase configuration
import { useNavigate } from 'react-router-dom';

const Login = ({ closeLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sign in user with Firebase Authentication
      await firebase.auth().signInWithEmailAndPassword(email, password);

      // Redirect the user to their profile page
      navigate('/profile');

      // Close the login modal
      closeLogin();
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className="auth-modal">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {/* Your form fields */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Login</button>
      </form>
      <button onClick={closeLogin}>Close</button>
    </div>
  );
};

export default Login;




