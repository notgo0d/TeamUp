// Profile.js
import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../bd/firebase'; // Import auth and firestore from your Firebase configuration

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
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

  const fetchUserData = async () => {
    if (!user) {
      // User is not logged in
      console.log('User is not logged in');
      return;
    }

    try {
      // Fetch user data from Firestore
      const userSnapshot = await firestore.collection('users').doc(user.uid).get();
      const userData = userSnapshot.data();
      console.log('User Data:', userData);
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

  if (!user) {
    // User is not logged in
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h2>Welcome, {user.email}!</h2>
      <button onClick={fetchUserData}>Fetch Profile Data</button>
      {/* Display user profile data here */}
    </div>
  );
};

export default Profile;

