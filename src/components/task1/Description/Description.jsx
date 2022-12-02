import React from 'react';
import PropTypes from 'prop-types';
import s from './Description.module.css'

const Description = ({ username, tag, location, avatar }) => {
  return (
    <div>
      <img className={s.avatar} src={avatar} alt="User avatar" />
      <div className={s.description}>
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
    </div>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Description;
