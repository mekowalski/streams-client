import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <div>
      Welcome to the Streams App!
      <div>
        <BrowserRouter>
          <div>

          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
