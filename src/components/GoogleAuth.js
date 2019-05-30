import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1069443773373-jk72j3l7ov6ad9snjob9fm6hiphf065d.apps.googleusercontent.com',
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
