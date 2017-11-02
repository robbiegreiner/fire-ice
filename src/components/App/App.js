import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fakeAction, fetchHouses } from '../../actions/index';
import CardContainer from '../CardContainer';


class App extends Component {

  componentDidMount() {
    this.props.getHouseData();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.houseData !== this.state.houseData
  // }



  render() {
    // if (this.props.houseData.name){
      return (
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to Westeros</h2>
          </div>
          <div className='Display-info'>
            <CardContainer houseData={this.props.houseData}/>
          </div>
        </div>
      );
    // } else {
    //   return (
    //     <div>
    //       <h1>loading</h1>
    //     </div>
    //   );
    // }

  }
}

const mapStateToProps = store => ({
  houseData: store.houseData
});

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
