import { combineReducers } from 'redux';
import itemReducer from '../reducers/itemReducer';

const reducers = combineReducers({
  itemReducer,
});

export default reducers;
