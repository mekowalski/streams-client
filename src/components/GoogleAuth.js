import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  //1. remove state default initialization
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1069443773373-jk72j3l7ov6ad9snjob9fm6hiphf065d.apps.googleusercontent.com',
        scope: 'email'
      })
      //2. need to make sure to dispatch initial action when finishing initializing library
      //to indicate whether or not user is signed in
      //call either sign in OR sign out
      .then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  //helper method: to update the authentication state (is user signed in/out)
  //now calling appropriate action creator anytime auth state changes according to GAPI library
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn()
    }
    else {
      this.props.signOut()
    }
  }

  //helper method: to sign the user in with the auth instance and property
  //these helper method names are a bit more descriptive for being called with either buttons are clicked
  //no functional change, just to communicate functionality to others viewing code
  onSignInClick = () => {
    this.auth.signIn()
  }

  //helper method: to sign the user out with the auth instance and property
  onSignOutClick = () => {
    this.auth.signOut()
  }

  //3. rather than reference state, update it to props
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null
    }
    else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className='ui red google button'>
          <i className='google icon' />
          Sign Out
        </button>
      )
    }
    else {
      return (
        <button onClick={this.onSignInClick} className='ui green google button'>
          <i className='google icon' />
          Sign In with Google
        </button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

//add mapStateToProps(), called with state object
//isSignedIn will be either: null, true or false
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
