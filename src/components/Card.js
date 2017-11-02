import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './App/App.css';

const Card = ({ currentView, member, house, getHouseMembers }) => {
  if (currentView === 'houses'){
    return (
      <div className='card' onClick={() => getHouseMembers(house.swornMembers)}>
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
    );
  } else if (currentView === 'members' && member) {
    return (
      <div className='card'>
        <h1>{member.name}</h1>
        <h2>Titles: {member.titles.map( title => {
          return title;
        })}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

};

Card.propTypes = {
  house: PropTypes.object,
  getHouseMembers: PropTypes.func,
  currentView: PropTypes.string,
  member: PropTypes.object
};

export default Card;
