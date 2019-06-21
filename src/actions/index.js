export const signIn = () => {
  return {
    type: 'SIGN_IN'
  }
}

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}

//code currently not working
//these actions have a type property
//in every case, a string is assigned to the type
//type property needs to be exact same type specified in authReducer
