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
  renderInput({ input, label }) {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
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

//defined outside class
//actual opportunity to validate Form Values
//inspect formValues object with an if statement
const validate = (formValues) => {
  //define errors message
  const errors = {}
  if (!formValues.title) {
    //only run if the user did NOT enter a title(basic validation)
    errors.title = 'You must enter a title'
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description, even if it is a short one'
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)
