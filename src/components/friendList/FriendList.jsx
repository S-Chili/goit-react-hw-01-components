import React from 'react';
import './FriendList.css';
import FriendListItem from './FriendListItem'
import PropTypes from 'prop-types';


function FriendList({ friends }) {
    return (
        <ul className="friend-list">
      {friends.map(({ id, ...friendProps }) => (
        <FriendListItem key={id} {...friendProps} />
      ))}
    </ul>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default FriendList;