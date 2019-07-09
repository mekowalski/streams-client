import _ from 'lodash';
import {
  FETCH_STREAM, FETCH_STREAMS, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM
} from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_STREAM:
      return _.omit(state, action.payload)
      //return omit with entire State object, and what key that needs to be deleted from the State object
      //in this case it's action.payload
      //don't need .id because when the action dispatches a type of DELETE_STREAM, the payload is the ID

    default:
      return state
  }
}
