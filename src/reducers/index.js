import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  //required to wire up the Reducer to a key of form
  form: reducer
})
