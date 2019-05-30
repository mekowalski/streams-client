import React from 'react';

class GoogleAuth extends React.Component {
  //initialize state object when component class is created
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({ //this executes an asynchronous request/operation in order to init client
        clientId: '1069443773373-jk72j3l7ov6ad9snjob9fm6hiphf065d.apps.googleusercontent.com',
        scope: 'email'
        //want a notice when initialization is all done
        //chain on .then statement
      })
      .then(() => {
        //1. ref to auth object and save ref on component class
        this.auth = window.gapi.auth2.getAuthInstance()
        //2. figure out if user is currently signed in
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      })
    })
  }

  render() {
    return (
      <div>
        G O O G L E A U T H
      </div>
    )
  }
}

export default GoogleAuth
