//in order to default state argument OR in order to initialize it, create an initializer
//caps because this is supposed to be a true constant object, never change the value of it
const INITIAL_STATE = {
  isSignedIn: null
}

//function gets called with default state object
//idea of default argument
//when app first goes, reducer gets called 1 time to initialize it
//switch statement, update/modify state object with spread syntax
//and update isSignedIn/isSignedOut properties as well
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, isSignedIn: true }
    case 'SIGN_OUT':
      return { ...state, isSignedOut: false}
    default:
      return state
  }
}
