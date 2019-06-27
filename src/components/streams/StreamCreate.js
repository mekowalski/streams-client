import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  //2. anytime Field component called renderInput() it also passed in a set of properties
  //3. the properties were passed along to the Text Input (<input />tag)
  renderInput(formProps) {
    return (
      <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    )
  }

  render() {
    return (
      <form>
      //1. these 2 Fields components to renderInput()
        <Field name='title' component={this.renderInput} />
        <Field name='description' component={this.renderInput} />
      </form>
    )
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)
