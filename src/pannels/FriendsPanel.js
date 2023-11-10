// src/pannels/FriendsPanel.js
import React, { useEffect, useState } from 'react';
import './friends.css';

const FriendsPanel = ({ closePanel }) => {
  const [isPanelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    console.log("FriendsPanel - Effect: Setting up event listener");

    const closePanelOnOutsideClick = (event) => {
      if (!event.target.closest('.friends-panel')) {
        console.log("FriendsPanel - Closing panel");
        setPanelOpen(false);
        closePanel();
      }
    };

    document.addEventListener('click', closePanelOnOutsideClick);

    return () => {
      console.log("FriendsPanel - Cleanup: Removing event listener");
      document.removeEventListener('click', closePanelOnOutsideClick);
    };
  }, [closePanel]);

  useEffect(() => {
    // Open the panel initially when mounted
    setPanelOpen(true);
  }, []);

  return (
    <div className={`friends-panel ${isPanelOpen ? 'open' : ''}`}>
      <h2>Friend List</h2>
    </div>
  );
};

export default FriendsPanel;






