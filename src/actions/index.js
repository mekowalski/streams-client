import streams from '../apis/streams';
import {
  SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM
} from './types';

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

export const createStream = (formValues) => {
  return async (dispatch) => {
    const response = await streams.post('/streams', formValues)

    dispatch({ type: CREATE_STREAM, payload: response.data })
  }
}

//trying action creator for most simple/common action type: getting a list of records
export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get('/streams')

    dispatch({ type: FETCH_STREAMS, payload:response.data })
  }
}

//action creators for the single record
//will want to pass in an id for the single stream to fetch
export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`)

    dispatch({ type: FETCH_STREAM, payload: response.data })
  }
}
