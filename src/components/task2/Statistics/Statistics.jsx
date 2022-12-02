import React from 'react';
import Stat from '../Stat/Stat';
import PropTypes from 'prop-types';
import s from './Statistics.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title &&
        <h2 className={s.title}>{title}</h2> 
      }
      
      <ul className={s.statList} >
        {stats.map(stat => (
          <li className={s.item} key={stat.id} style={
        {
          backgroundColor: getRandomHexColor(),
        }
      }>
            <Stat statistic={stat}></Stat>
          </li>
        ))}
      </ul>
    </section>
  );
};




Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
