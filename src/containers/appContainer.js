import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  view: state.itemReducer.view,
});

export default connect(mapStateToProps)(App);
