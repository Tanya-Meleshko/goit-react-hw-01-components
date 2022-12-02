import React from 'react';
import Description from '../Description/Description';
import Stats from '../Stats/Stats';
import PropTypes from 'prop-types';
import s from './Profile.module.css'

const Profile = ({ userInfo }) => {
  return (
    <div className={s.profile}>
      <Description
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
      ></Description>

      <Stats stats={userInfo.stats}></Stats>
    </div>
  );
};

Profile.propTypes = {
  userInfo: PropTypes.object,
};

export default Profile;
