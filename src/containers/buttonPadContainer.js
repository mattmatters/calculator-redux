import { connect } from 'react-redux';
import ButtonPad from '../components/ButtonPad';
import { equals, clear, appendChar, setOperator } from '../actions';

const mapDispatchToProps = dispatch => ({
  equals: () => dispatch(equals()),
  clear: () => dispatch(clear()),
  appendChar: char => dispatch(appendChar(char)),
  setOperator: operator => dispatch(setOperator(operator)),
});

export default connect(undefined, mapDispatchToProps)(ButtonPad);
