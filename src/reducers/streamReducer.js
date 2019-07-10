import _ from 'lodash';
import {
  FETCH_STREAM, FETCH_STREAMS, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM
} from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
      //return new object(...state), take all KV pairs from State object
      //(..._.mapKeys(action.payload, 'id'))
      //action.payload is the list of streams from API and create an object using mapKeys()
      //'id' will be the keys for each object

      //mapKeys() returns a big object, take all the KV pais from object
      //and add it into the new created object (..._.mapKeys())
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_STREAM:
      return _.omit(state, action.payload)

    default:
      return state
  }
}
