import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

//replace this with class-based component
//want to call action creator inside componentDidMount()
//attempt to fetch list of streams only once
class StreamList extends React.Component {
  render() {
    return (
      <div>
        this is the stream list
      </div>
    )
  }
}

export default connect(null, { fetchStreams })(StreamList)
