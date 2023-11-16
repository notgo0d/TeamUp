// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Update this configuration with your own Firebase project details
const firebaseConfig = {
    apiKey: 'AIzaSyDdsfwQvZw1VYBmvIUqokT79bdOf87NE3Q',
    authDomain: 'teamup-bfe0d.firebaseapp.com',
    projectId: 'teamup-bfe0d',
    storageBucket: 'teamup-bfe0d.appspot.com',
    messagingSenderId: '708503680216',
    appId: '1:708503680216:web:YOUR_APP_ID',
  };
  
  export default firebaseConfig;
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app); // Initialize Firestore
  
  export { auth, firestore, app as firebase };

