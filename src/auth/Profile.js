// Profile.js
import React, { useEffect, useState } from 'react';
import firebase from '../bd/firebase'; // Import your Firebase configuration

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe when the component unmounts
    };
  }, []);

  if (!user) {
    // User is not logged in
    return <p>Please log in to view your profile.</p>;
  }

  // Fetch user data from Firestore
  // Customize this based on your Firestore data structure
  const fetchUserData = async () => {
    try {
      const userSnapshot = await firebase.firestore().collection('users').doc(user.uid).get();
      const userData = userSnapshot.data();
      console.log('User Data:', userData);
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

  return (
    <div>
      <h2>Welcome, {user.email}!</h2>
      <button onClick={fetchUserData}>Fetch Profile Data</button>
      {/* Display user profile data here */}
    </div>
  );
};

export default Profile;
