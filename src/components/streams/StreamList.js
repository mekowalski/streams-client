import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  //component will now have a prop called this.props.streams which will be an array of all streams
  //test with console.log() which does return the array of stream objects
  render() {
    console.log(this.props.streams)
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

export default connect(mapStateToProps, { fetchStreams })(StreamList)
