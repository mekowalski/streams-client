import React from 'react';
import { Field, reduxForm } from 'redux-form';

//now that reduxForm is hooked up, this component is now going to be passed a ton of additional props
//props that weren't passed before
class StreamCreate extends React.Component {
  render() {
    console.log(this.props)
    //props object has massive amount of properties thanks to the reduxForm helper
    //up to me to pick out which props are relevant to build the form
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
