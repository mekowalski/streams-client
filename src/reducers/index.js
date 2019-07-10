import { combineReducers } from 'redux';
//helpful differentiation of other reducers, frequently rename the named export when pulled into file
//rename via: as
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
})
