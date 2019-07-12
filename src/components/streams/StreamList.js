import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

const StreamList = () => {
  return (
    <div>
      here is the StreamList page
    </div>
  )
}

export default connect(null, { fetchStreams })(StreamList)
