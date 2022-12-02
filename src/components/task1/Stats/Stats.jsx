import React from 'react';
import PropTypes from 'prop-types';
import s from './Stats.module.css'

const Stats = ({ stats }) => {
  return (
    <ul className={s.stats}>
      <li className={s.listItem}>
        <span className={s.label}>Followers </span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li className={s.listItem}>
        <span className={s.label}>Views </span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li className={s.listItem}>
        <span className={s.label}>Likes </span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};


Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

export default Stats;
