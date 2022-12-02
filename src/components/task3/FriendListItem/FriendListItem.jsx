import React from 'react'
import PropTypes from 'prop-types'
import s from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusColor = isOnline ? 'rgb(21, 185, 43)' : 'rgb(253, 54, 54)'

  return (
      <>
      <span className={s.status} style={{
        backgroundColor: statusColor
          }}></span>
          <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={s.name}>{ name}</p>
      </>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}


export default FriendListItem