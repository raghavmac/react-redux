import { combineReducers } from 'redux';
import users from './users';
import suggestions from './suggestions';

const reducers = combineReducers({
  users,
  suggestions,
});

export default reducers;
