import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './Components/Homepage';
import RandomAnimal from './Components/RandomAnimal';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/randomanimal'>Random Animal</Link></li>
            </ul>
          </nav>

          <Route exact path = '/' component={Homepage} />
          <Route path = '/randomanimal' component = {RandomAnimal} />
        </div>
      </Router>
    );
  }
}

export default App;