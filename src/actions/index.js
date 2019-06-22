import { SIGN_IN, SIGN_OUT } from './types';

//need to make sure the action creator receives the user ID as an argument
//also pass to a Reducer, by assigning ID to action object as a Payload property
export const signIn = () => {
  return {
    type: SIGN_IN
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}
