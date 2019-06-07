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

  //both helpers will want to access 'auth' instance (this.auth)
  //these aren't necessary, it's a bit more extra work, but it helps make this component clear to others
  //when called () aren't put on after the methods
  //that means the method is called the instance a component is rendered, which isn't the behavior needed
  onSignIn = () => {
    this.auth.signIn()
  }

  onSignOut = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null
    }
    else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className='ui red google button'>
          <i className='google icon' />
          Sign Out
        </button>
      )
    }
    else {
      return (
        <button onClick={this.onSignIn} className='ui green google button'>
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
