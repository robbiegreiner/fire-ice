import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './Card.js';
import './App/App.css';

class CardContainer extends Component {
  constructor() {
    super();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.houseData !== this.props.houseData
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props !== nextProps) {
  //     console.log(nextProps);
  //   }
  // }

  renderCards = () => this.props.houseData.map( house =>{
    return <Card
      key={house.name}
      house={house}/>;
  })

  render() {
    if (this.props.houseData) {
      return (
        <div className="card-container">
          {this.renderCards()}
        </div>
      );
    } else {
      return (
        <div>
          <h1>loading</h1>
        </div>
      );
    }

  }
}

CardContainer.propTypes = {
  houseData: PropTypes.object
};

export default CardContainer;
