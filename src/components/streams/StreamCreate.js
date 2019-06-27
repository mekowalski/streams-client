import React from 'react';
import { Field, reduxForm } from 'redux-from';

class StreamCreate extends React.Component {
  render() {
    return (
      <div>
      here is the stream create page
      </div>
    )
  }
}

export default reduxForm()(StreamCreate)
//reduxForm returns a function that is immediately called with StreamCreate
