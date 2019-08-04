import { combineReducers } from 'redux';
import playersReducer from './playersReducer';
import gameReducer from './gameReducer';

export default combineReducers({
  playersReducer,
  gameReducer,
});
