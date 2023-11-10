// Update src/pannels/FriendsPanel.js
import React, { useEffect, useState } from 'react';
import './friends.css';

const FriendsPanel = ({ closePanel }) => {
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const friends = [
    { id: 1, name: 'John Doe', avatar: 'https://placekitten.com/40/40', status: 'connected' },
    { id: 2, name: 'Jane Doe', avatar: 'https://placekitten.com/41/41', status: 'offline' },
    { id: 3, name: 'Alice', avatar: 'https://placekitten.com/42/42', status: 'idle' },
    { id: 4, name: 'Bob', avatar: 'https://placekitten.com/43/43', status: 'in-game' },
  ];

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

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={`friends-panel ${isPanelOpen ? 'open' : ''}`}>
      <h2>
        Friends
        <input
          type="text"
          className="filter-input"
          placeholder="looking for a friend?"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </h2>
      <ul className="friend-list">
        {filteredFriends.map((friend) => (
          <li key={friend.id} className="friend-list-item">
            <img src={friend.avatar} alt={`${friend.name}'s avatar`} className="friend-avatar" />
            <div className="friend-info">
              <span className="friend-name">{friend.name}</span>
              <span className={`friend-status ${friend.status}`}>{friend.status}</span>
            </div>
            <span className="friend-invite">+</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsPanel;









