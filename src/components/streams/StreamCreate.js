import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  render() {
    return (
      <form>
        <Field name='title' />
        <Field name='description' />
      </form>
    )
  }
}
//Field name property of label that will be managed: title and description

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)
