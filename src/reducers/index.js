import { combineReducers } from 'redux';
import authReducer from './authReducer';

//assign to key on state object
export default combineReducers({
  auth: authReducer
})
