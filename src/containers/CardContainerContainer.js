import { connect } from 'react-redux';
import CardContainer from '../components/CardContainer';
import { fetchMembers } from '../actions/actions';



const mapStateToProps = store => ({
  houseData: store.houseData
});

const mapDispatchToProps = dispatch => ({
  getHouseMembers: (membersURLs) => {
    dispatch(fetchMembers(membersURLs));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
