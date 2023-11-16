// Signup.js
import React, { useState } from 'react';
import './Signup.css';
import { auth, firestore } from '../bd/firebase'; // Import auth and firestore

const Signup = ({ closeSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Create user in Firebase Authentication with email, password, and additional data (username)
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Add user data to Firestore (including username)
      await firestore.collection('users').doc(user.uid).set({
        email: user.email,
        username: username, // Add username to Firestore
        // Add more user data as needed
      });

      // Close the signup modal
      closeSignup();
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };

  return (
    <div className="auth-modal">
      <span className="close-btn" onClick={closeSignup}>×</span>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        {/* Your form fields */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;








