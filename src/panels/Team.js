// Team.js
import React, { useEffect, useState, useRef } from 'react';
import './Team.css';

const Team = ({ closePanel }) => {
  const [isPanelOpen, setPanelOpen] = useState(false);
  const teamPanelRef = useRef(null);

  useEffect(() => {
    const closePanelOnOutsideClick = (event) => {
      if (teamPanelRef.current && !teamPanelRef.current.contains(event.target)) {
        setPanelOpen(false);
        typeof closePanel === 'function' && closePanel();
      }
    };

    document.addEventListener('click', closePanelOnOutsideClick);

    return () => {
      document.removeEventListener('click', closePanelOnOutsideClick);
    };
  }, [closePanel]);

  const togglePanel = () => {
    setPanelOpen((prevState) => !prevState);
  };

  console.log("closePanel:", closePanel); // Add this line

  return (
    <div className={`team-panel ${isPanelOpen ? 'open' : ''}`} ref={teamPanelRef}>
      <button className="toggle-panel" onClick={togglePanel}>
        Toggle Panel
      </button>
    </div>
  );
};

export default Team;







