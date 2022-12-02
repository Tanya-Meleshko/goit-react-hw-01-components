import React from 'react'
import PropTypes from 'prop-types'
import FriendListItem from '../FriendListItem/FriendListItem'
import s from './FriendList.module.css'

const FriendList = ({friends}) => {
  return (
      <ul className={s.friendList}>
          {friends.map(friend => (
            <li className={s.item} key={friend.id}>
                  <FriendListItem
                      avatar={friend.avatar}
                      name={friend.name}
                      isOnline={friend.isOnline}>
                    </FriendListItem>
              </li>
          ))}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired
  ).isRequired
}

export default FriendList