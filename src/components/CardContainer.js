import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './Card.js';

class CardContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>hi</h1>
      </div>
    );
  }
}

CardContainer.propTypes = {
  houseData: PropTypes.object
};

export default CardContainer;
