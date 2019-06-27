import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput(formProps) {
    return (
      <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    )
  }
  //2 console logs because 2 separate inputs are showing, causing renderInput to be called twice
  //take formProps, take input property out of it, and hook up the relevant properties to text input (L7)

  render() {
    return (
      <form>
        <Field name='title' component={this.renderInput} />
        <Field name='description' component={this.renderInput} />
      </form>
    )
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)
//RF is now handling text inputs for the 2 fields via: taking props out of formProps and passing them to
//input element for onChange and value props
