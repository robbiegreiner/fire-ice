import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fakeAction, fetchHouses } from '../../actions/index';


class App extends Component {

  componentDidMount() {
    this.props.getHouseData();
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ fake }) => ({ fake });
const mapDispatchToProps = dispatch => ({
  fakeAction: () => dispatch(fakeAction()),

  getHouseData: () => {
    dispatch(fetchHouses());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired,
  getHouseData: PropTypes.func
};
