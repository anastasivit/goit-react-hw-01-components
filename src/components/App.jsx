import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

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

  const friends = [
    {
      avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
      name: 'Mango',
      isOnline: true,
      id: 1812,
    },
    {
      avatar: 'https://cdn-icons-png.flaticon.com/512/616/616438.png',
      name: 'Kiwi',
      isOnline: false,
      id: 1137,
    },
    {
      avatar: 'https://cdn-icons-png.flaticon.com/512/1623/1623681.png',
      name: 'Ajax',
      isOnline: true,
      id: 1213,
    },
    {
      avatar: 'https://cdn-icons-png.flaticon.com/512/2977/2977285.png',
      name: 'Jay',
      isOnline: true,
      id: 1714,
    },
    {
      avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998749.png',
      name: 'Poly',
      isOnline: false,
      id: 1284,
    },
  ];

  const transactions = [
    {
      id: '1e0700a2-5183-4291-85cc-2065a036a683',
      type: 'invoice',
      amount: '964.82',
      currency: 'LRD',
    },
    {
      id: 'a30f821b-4d25-4ff0-abdd-e340b3f0dd2b',
      type: 'payment',
      amount: '686.50',
      currency: 'WST',
    },
    // Додайте інші транзакції тут
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
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
