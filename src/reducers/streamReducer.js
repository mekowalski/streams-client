import {
  FETCH_STREAM, FETCH_STREAMS, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM
} from '../actions/types';


export defautl (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }
      //any time an action of FETCH_STREAM is used, take all the properties(KV pairs) in the State object
      //add it to the new State object, dynamically add a new KV pair
      //key of stream's ID and value of the stream itself

    default:
      return state
  }
}
