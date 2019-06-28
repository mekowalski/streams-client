import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  // renderInput(formProps, label) {
  //   return (
  //     <div className='field'>
  //       <label>{label}</label>
  //       <input
  //         onChange={formProps.input.onChange}
  //         value={formProps.input.value}
  //       />
  //     <div>
  //   )
  // }
  //i want to revert back to this method layout eventually

  //meta is from the Object of the Fields components
  //meta also will hold an attribute for 'error' with the attached message from validate()
  //meta.errors will be used to display the error messages on the screen
  renderInput({ input, label, meta }) {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field name='description' component={this.renderInput} label='Enter Description' />
        <button className='ui button primary'>Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description, even if it is a short one'
  }
  return errors
}

export default reduxForm({
  form: 'streamCreate',
  validate //validate is the validate() that was created
})(StreamCreate)
