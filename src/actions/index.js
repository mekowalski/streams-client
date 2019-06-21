//want to eventually have 2 action creators: signIn() and signOut()
//very straighforward, only called either after user has successfully logged in/out through GAPI library

//eventually have reducer that will see an action type SIGN_IN, it will probably have internal boolean flag
//to update sign in status to true
export const signIn = () => {
  return {
    type: 'SIGN_IN'
  }
}

//same idea with sign out
export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}
