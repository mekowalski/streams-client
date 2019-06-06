import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1069443773373-jk72j3l7ov6ad9snjob9fm6hiphf065d.apps.googleusercontent.com',
        scope: 'email'
      })
      //modify to update auth state
      .then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        //set up event listener
        //1. reference that auth object
        //2. call listen() from `isSignedIn` prototype
        //3. pass in the callback()
        this.auth.isSignedIn.listen(this.onAuthChange) //this is an additional method/listener
      })
    })
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div> i dont know if i am signed in </div>
    }
    else if (this.state.isSignedIn) {
      return <div> i am signed in </div>
    }
    else {
      return <div> i am not signed in </div>
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
