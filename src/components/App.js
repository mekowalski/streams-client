import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      Page One
      <a href='/pagetwo'>Click Page2</a>
    </div>
  )
}

const PageTwo = () => {
  return (
    <div>
      Page Two
      <a href='/pageone'>Click Page1</a>
    </div>
  )
}

const App = () => {
  return (
    <div>
      Welcome to the Streams App!
      <div>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={PageOne}/>
            <Route path='/pagetwo' component={PageTwo} />
          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
