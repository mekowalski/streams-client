import React from 'react';

class GoogleAuth extends React.Component {
  //overall this initializes the library, it doesn't go through the OAuth process
  componentDidMount() {
    //1. after successfully loading up client library
    window.gapi.load('client:auth2', () => {
      //2. initialize app with clientId that was generated
      window.gapi.client.init({
        clientId: '1069443773373-jk72j3l7ov6ad9snjob9fm6hiphf065d.apps.googleusercontent.com',
        //3. in addition to clientId, specifiy scopes, whcih parts of user account this app wants access to
        scope: 'email'
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
