//in order to default state argument OR in order to initialize it, create an initializer
const INITIAL_STATE = {
  isSignedIn: null
}

//function gets called with default state object
//idea of default argument
//when app first goes, reducer gets called 1 time to initialize it
export default (state = INITIAL_STATE, action) => {

}
