import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import RandomAnimal from './components/RandomAnimal/RandomAnimal';

import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import PetsList from './components/PetsList/PetsList';
import Pet from './components/Pet/Pet';

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Particles className='particles'
          params={particlesOptions} />
          <Navigation />

          <Route exact path = '/' component={Homepage} />
          <Route path = '/randomanimal' component = {RandomAnimal} />
          <Route path='/petslist' component={PetsList} />
          <Route path='/pet' component={Pet} />
        </div>
      </Router>
    );
  }
}

export default App;