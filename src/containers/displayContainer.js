import { connect } from 'react-redux';
import Display from '../components/Display';

const mapStateToProps = state => ({
  operator: state.operator,
  numStringOne: state.numStringOne,
  numStringTwo: state.numStringTwo,
});

export default connect(mapStateToProps)(Display);
