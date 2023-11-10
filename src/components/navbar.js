import React, { useState } from 'react';
import './navbar.css';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import FriendsPanel from '../pannels/FriendsPanel';

const Navbar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isFriendsPanelOpen, setFriendsPanelOpen] = useState(false);

  const openLogin = () => {
    console.log("Opening Login");
    setLoginOpen(true);
  };

  const closeLogin = () => setLoginOpen(false);

  const openSignup = () => {
    console.log("Opening Signup");
    setSignupOpen(true);
  };

  const closeSignup = () => setSignupOpen(false);

  return (
    <nav>
      <ul className="left-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/team">Team</a>
        </li>
        <li className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <i className="fas fa-search search-icon"></i>
        </li>
      </ul>
      <ul className="right-links">
        <li>
          <a href="/publications">Publications</a>
        </li>
        <li>
          <a href="/friends" onClick={() => setFriendsPanelOpen(!isFriendsPanelOpen)}>
            F
          </a>
        </li>
        <li className="login-link">
          <a href="/login" onClick={openLogin}>
            Login
          </a>
          {isLoginOpen && (
            <div className="modal">
              <div className="modal-content">
                <Login closeLogin={closeLogin} />
              </div>
            </div>
          )}
        </li>
        <li className="signup-link">
          <a href="/signup" onClick={openSignup}>
            Sign Up
          </a>
          {isSignupOpen && (
            <div className="modal">
              <div className="modal-content">
                <Signup closeSignup={closeSignup} />
              </div>
            </div>
          )}
        </li>
      </ul>
      <FriendsPanel closePanel={() => setFriendsPanelOpen(false)} />
    </nav>
  );
};

export default Navbar;






