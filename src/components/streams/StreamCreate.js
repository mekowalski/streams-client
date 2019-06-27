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

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)
//reduxForm returns a function that is immediately called with StreamCreate
//reduxForm takes in a sinlge object, the object has a lot of configuration within
//string name for generally whatever the Form purpose is
