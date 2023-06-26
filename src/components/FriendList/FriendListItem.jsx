import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({ friend }) => (
  <li className={styles.item}>
    <div className={styles['friend-card']}>
      <span
        className={`${styles.status} ${
          friend.isOnline ? styles.online : styles.offline
        }`}
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
);

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
