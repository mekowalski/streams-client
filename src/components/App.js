import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      Page One
      <Link to='/pagetwo'>Click Page2</Link>
    </div>
  )
}

const PageTwo = () => {
  return (
    <div>
      Page Two
      <Link to='/pageone'>Click Page1</Link>
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
