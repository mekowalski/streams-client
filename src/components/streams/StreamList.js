import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  //3. define renderList()
  //4. map over streams and return some JSX for each stream
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id}>
          <i className='large middle aligned icon play circle' />
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

//5. call renderList() inside render()
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className='ui celled list'>
          {this.renderList()}
        </div>
      </div>
    )
  }
}
//YES THIS IS WORKING WELL!!!



//1. define mapStateToProps(): call with state
//2. map over streams object into an array with Object.values()
const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)
