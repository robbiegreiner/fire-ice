import { connect } from 'react-redux';
import CardContainer from '../components/CardContainer';
import {  } from '../actions/actions';



const mapStateToProps = store => ({
  houseData: store.houseData
});

const mapDispatchToProps = dispatch => ({
  // getBrewery: (id) => {
  //   dispatch(fetchBrewery(id));
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
