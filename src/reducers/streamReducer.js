import {
  FETCH_STREAM, FETCH_STREAMS, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM
} from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
      //return an empty State object, again take the ID of the stream that was created
      //and assign it a value of the newly created stream
      //they end up being identical because the payload is taken from the action
      //and added as a new KV pair on the State object

    default:
      return state
  }
}
