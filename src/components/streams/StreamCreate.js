import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput() {
    return (
      <input />
    )
  }

  render() {
    return (
      <form>
        <Field name='title' component={this.renderInput} />
        <Field name='description' component={this.renderInput} />
      </form>
    )
  }
}
//Field name property of label that will be managed: title and description

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)
