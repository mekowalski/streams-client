import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1069443773373-jk72j3l7ov6ad9snjob9fm6hiphf065d.apps.googleusercontent.com',
        scope: 'email'
      })
      .then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  renderAuthButton() {
    //1st if statement is probably not appropriate, should maybe return nothing is user doesn't know their
    //sign in/out status
    if (this.state.isSignedIn === null) {
      return null
    }
    //if user is signed in, show a button to Sign Out
    //HECK YA! AMAZE-BALLS
    else if (this.state.isSignedIn) {
      return (
        <button className='ui red google button'>
          <i className='google icon' />
          Sign Out
        </button>
      )
    }
    //if user is signed out, show a button to Sign In with Google
    //SWEET, THIS ALSO WORKS, NEITHER BUTTONS WORK CORRECTLY YET
    else {
      return (
        <button className='ui green google button'>
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

export default GoogleAuth
