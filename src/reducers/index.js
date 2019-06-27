import { combineReducers } from 'redux';
//helpful differentiation of other reducers, frequently rename the named export when pulled into file
//rename via: as
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  //required to wire up the Reducer to a key of form
  form: formReducer
})
