import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ house }) => {
  return (
    <Link to={'/'}>
      <div className='card'>
        <h1>{house.name}</h1>
        <h2>Founded: {house.founded}</h2>
        <h3>Seats: {house.seats.map( seat => {
          return seat;
        })}</h3>
        <h3>Titles: {house.titles.map( title => {
          return title;
        })}</h3>
        <h4>Coat of Arms: {house.coatOfArms}</h4>
        <h4>Ancestral Weapons: {house.ancestralWeapons.map( weapon => {
          return weapon;
        })}</h4>
        <h1>{house.words}</h1>
      </div>
    </Link>
  );
};

Card.propTypes = {
  house: PropTypes.object
};

export default Card;
