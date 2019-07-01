import streams from '../apis/streams'; //used to make request over to API
import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

//called with a list of values entered into Form, as argument
//define async action creator, making use of redux-thunk
//return arrow () with dispatch as 1st argument
export const createStream = (formValues) => {
  return (dispatch) => {

  }
}
