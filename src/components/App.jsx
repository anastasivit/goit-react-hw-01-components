import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import friends from '../friends.json';

const App = () => {
  const user = {
    username: 'Petra Marica',
    tag: 'pmarica',
    location: 'Salvador, Brasil',
    avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats: {
      followers: 1000,
      views: 2000,
      likes: 3000,
    },
  };

  const statsData = [
    { id: 'id-1', label: '.docx', percentage: 22 },
    { id: 'id-2', label: '.pdf', percentage: 4 },
    { id: 'id-3', label: '.mp3', percentage: 17 },
    { id: 'id-4', label: '.psd', percentage: 47 },
    { id: 'id-5', label: '.pdf', percentage: 10 },
  ];

  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statsData} />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
