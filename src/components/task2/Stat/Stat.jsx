import React from 'react';
import PropTypes from 'prop-types';
import s from './Stat.module.css'

const Stat = ({ statistic }) => {
  return (
    <>
      <span className={s.label}>{statistic.label} </span>
      <span className={s.percentage}>{statistic.percentage}%</span>
    </>
  );
};



Stat.propTypes = {
  statistic: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default Stat;
