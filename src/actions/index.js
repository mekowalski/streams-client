import streams from '../apis/streams';
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

//Need to get a handle of response that comes back once a form is submitted
export const createStream = (formValues) => {
  return async (dispatch) => {
    const response = await streams.post('/streams', formValues)
  }
}
