import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  //3. define renderList()
  //4. mapp over streams and return some JSX for each stream
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id}>
          <i className='large middle aligned icon camera' /> //camera  icon, useless but something
          <div className='content'>
            {stream.title}
            <div className='description'>
              {stream.description}
            </div>
          </div>
        </div>
      )
    })
  }

  //component will now have a prop called this.props.streams which will be an array of all streams
  //test with console.log() which does return the array of stream objects
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

export default connect(mapStateToProps, { fetchStreams })(StreamList)
