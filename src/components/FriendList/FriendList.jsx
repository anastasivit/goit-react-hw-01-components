import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <div className={styles['friend-list-container']}>
    <ul className={styles['friend-list']}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <div className={styles['friend-card']}>
            <span
              className={styles.status}
              style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
            ></span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
