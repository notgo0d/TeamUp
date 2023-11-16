// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import FriendsPanel from '../panels/FriendsPanel';
import Team from '../panels/Team';
import Profile from '../auth/Profile'; // Import the Profile component

const Navbar = () => {
  const [isLoginOpen, setLoginOpen] = useState(true); // Show Login by default
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isFriendsPanelOpen, setFriendsPanelOpen] = useState(false);
  const [isTeamPanelOpen, setTeamPanelOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null); // State to store user data

  useEffect(() => {
    // Simulate user login
    // Commenting out to start the page without a user
    // setLoggedIn(true);
  }, []);

  const openLogin = () => {
    console.log("Opening Login");
    setLoginOpen(true);
    setSignupOpen(false);
  };

  const closeLogin = () => {
    console.log("Closing Login");
    setLoginOpen(false);
  };

  const openSignup = () => {
    console.log("Opening Signup");
    setSignupOpen(true);
    setLoginOpen(false);
  };

  const closeSignup = () => {
    console.log("Closing Signup");
    setSignupOpen(false);
  };

  const closeFriendsPanel = () => {
    console.log("Closing FriendsPanel");
    setFriendsPanelOpen(false);
  };

  const toggleProfile = () => {
    console.log("Toggling Profile");
    setProfileOpen(!isProfileOpen);
  };

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUserData(user);
    closeLogin();
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserData(null);
  };

  return (
    <nav>
      <ul className="left-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn && (
          <li>
            <div onClick={() => setTeamPanelOpen((prev) => !prev)}>
              <Link to="/team">Team</Link>
            </div>
            {isTeamPanelOpen && <Team closePanel={() => setTeamPanelOpen(false)} />}
          </li>
        )}
      </ul>
      <ul className="right-links">
        <li>
          <Link to="/publications">Publications</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/friends" onClick={() => setFriendsPanelOpen(!isFriendsPanelOpen)}>
                F
              </Link>
            </li>
            <li className="login-link">
              {userData ? (
                <div onClick={toggleProfile}>
                  <Link to="#">{userData.username}</Link>
                  {isProfileOpen && <Profile />}
                </div>
              ) : (
                <Link to="#" onClick={toggleProfile}>
                  User
                </Link>
              )}
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="login-link">
              <Link to="/login" onClick={openLogin}>
                Login
              </Link>
              {isLoginOpen && (
                <div className="modal">
                  <div className="modal-content">
                    <Login closeLogin={closeLogin} onLogin={handleLogin} />
                  </div>
                </div>
              )}
            </li>
            <li className="signup-link">
              <Link to="/signup" onClick={openSignup}>
                Sign Up
              </Link>
              {isSignupOpen && (
                <div className="modal">
                  <div className="modal-content">
                    <Signup closeSignup={closeSignup} />
                  </div>
                </div>
              )}
            </li>
          </>
        )}
      </ul>
      {isFriendsPanelOpen && <FriendsPanel closeFriendsPanel={closeFriendsPanel} isOpen={isFriendsPanelOpen} />}
    </nav>
  );
};

export default Navbar;





