import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2')
    //window so that the variable(gapi) is within the window scope inside my browser
    //create-react-app will understand the varaible(gapi) is available on window scope
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
