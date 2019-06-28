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

  //helper method will hold a decent amount out logic to show message and render out error message with
  //appropriate className and syling
  renderError({ error, touched }) {//destructure error and touched from meta
    if (touched && error) { //if user has touched form and there's an error message
      return ( //return error message to show user
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      )
    }
  }
  //currently error messages are being shown because by default Semantic UI hides error messages
  //display: none, CSS hiding message from user

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field name='description' component={this.renderInput} label='Enter Description' />
        <button className='ui button primary'>Submit</button>
      </form>
    )
  }
}
//form needs a classname with error in order to show error messages

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
  validate
})(StreamCreate)
