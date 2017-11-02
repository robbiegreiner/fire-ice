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

  renderCards = () => this.props.houseData.map( house =>{
    return <Card
      currentView={this.props.currentView}
      getHouseMembers={this.props.getHouseMembers}
      key={house.name}
      house={house}/>;
  })

  renderMembers = () => this.props.members.map( member =>{
    return <Card
      currentView={this.props.currentView}
      key={member.name}
      member={member}/>;
  })

  render() {
    if (this.props.currentView === 'houses', this.props.houseData) {
      return (
        <div className="card-container">
          {this.renderCards()}
        </div>
      );
    } else if (this.props.currentView === 'members') {
      return (
        <div>
          <h1>loading</h1>
        </div>
      );
    }

  }
}

const mapStateToProps = store => ({
  houseData: store.houseData,
  members: store.members,
  currentView: store.currentView
});

const mapDispatchToProps = dispatch => ({
  getHouseMembers: (membersURLs) => {
    dispatch(fetchMembers(membersURLs));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

CardContainer.propTypes = {
  houseData: PropTypes.object,
  getHouseMembers: PropTypes.func,
  members: PropTypes.array,
  currentView: PropTypes.string
};
