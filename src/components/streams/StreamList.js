import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

//replace this with class-based component
//want to call action creator inside componentDidMount()
//attempt to fetch list of streams only once
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  render() {
    return (
      <div>
        this is the stream list
      </div>
    )
  }
}
//at this point, just looking to call action creator
//then user redux devtools to see actual list of streams appear inside actual Redux State

export default connect(null, { fetchStreams })(StreamList)
