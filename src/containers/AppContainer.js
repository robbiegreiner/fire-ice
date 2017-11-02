import { connect } from 'react-redux';
import App from '../components/App';
import { fakeAction } from '../actions/actions';

const mapStateToProps = ({ fake }) => ({ fake });
const mapDispatchToProps = dispatch => ({ fakeAction:
  () => dispatch(fakeAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
