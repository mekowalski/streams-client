import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

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

//1. define mapStateToProps(): call with state
//2. map over streams object into an array with Object.values()
const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) }
}

export default connect(null, { fetchStreams })(StreamList)
