// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import FriendsPanel from '../panels/FriendsPanel';
import Team from '../panels/Team';

const Navbar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isFriendsPanelOpen, setFriendsPanelOpen] = useState(false);
  const [isTeamPanelOpen, setTeamPanelOpen] = useState(false);

  const openLogin = () => {
    console.log("Opening Login");
    setLoginOpen(true);
  };

  const closeLogin = () => {
    console.log("Closing Login");
    setLoginOpen(false);
  };

  const openSignup = () => {
    console.log("Opening Signup");
    setSignupOpen(true);
  };

  const closeSignup = () => {
    console.log("Closing Signup");
    setSignupOpen(false);
  };

  const closeFriendsPanel = () => {
    console.log("Closing FriendsPanel");
    setFriendsPanelOpen(false);
  };

  console.log("isTeamPanelOpen:", isTeamPanelOpen);

  return (
    <nav>
      <ul className="left-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <div onClick={() => setTeamPanelOpen((prev) => !prev)}>
            <Link to="/team">Team</Link>
          </div>
          {isTeamPanelOpen && <Team closePanel={() => setTeamPanelOpen(false)} />}
        </li>
      </ul>
      <ul className="right-links">
        <li>
          <Link to="/publications">Publications</Link>
        </li>
        <li>
          <Link to="/friends" onClick={() => setFriendsPanelOpen(!isFriendsPanelOpen)}>
            F
          </Link>
        </li>
        <li className="login-link">
          <Link to="/login" onClick={openLogin}>
            Login
          </Link>
          {isLoginOpen && (
            <div className="modal">
              <div className="modal-content">
                <Login closeLogin={closeLogin} />
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
      </ul>
      {isFriendsPanelOpen && <FriendsPanel closeFriendsPanel={closeFriendsPanel} isOpen={isFriendsPanelOpen} />}
    </nav>
  );
};

export default Navbar;




