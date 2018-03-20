import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Particles from 'react-particles-js'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import PetsList from './components/PetsList/PetsList'
import Pet from './components/Pet/Pet'

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
      <BrowserRouter>
        <div>
          <Particles className='particles'
          params={particlesOptions} />
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route path='/petslist' component={PetsList} />
          <Route path='/pet' component={Pet} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
