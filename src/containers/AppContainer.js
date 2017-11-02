import { connect } from 'react-redux';
import App from '../components/App.js';
import { fakeAction, fetchHouses } from '../actions/actions';

const mapStateToProps = ({ fake }) => ({ fake });
const mapDispatchToProps = dispatch => ({
  fakeAction: () => dispatch(fakeAction()),

  getHouseData: () => {
    dispatch(fetchHouses());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
