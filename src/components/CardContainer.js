import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './Card.js';
import { connect } from 'react-redux';
import './App/App.css';
import { fetchMembers } from '../actions/index';

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
      getHouseMembers={this.props.getHouseMembers}
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

const mapStateToProps = store => ({
  houseData: store.houseData
});

const mapDispatchToProps = dispatch => ({
  getHouseMembers: (membersURLs) => {
    dispatch(fetchMembers(membersURLs));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

CardContainer.propTypes = {
  houseData: PropTypes.object,
  getHouseMembers: PropTypes.func
};
