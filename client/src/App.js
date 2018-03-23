import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Particles from 'react-particles-js';

import Homepage from './components/Homepage/Homepage';
import RandomAnimal from './components/RandomAnimal/RandomAnimal';
import ResultsAnimal from './components/ResultsAnimal/ResultsAnimal';
import Navigation from './components/Navigation/Navigation';
import PetsList from './components/PetsList/PetsList';
import Pet from './components/PetsList/Pet';
import PetSingle from "components/PetsList/PetSingle"
import Quiz from './components/Quiz/Quiz';

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
<<<<<<< HEAD
          <Container fluid className='mt-3'>
=======
          <Container fluid={true} className='mt-3'>
>>>>>>> 2f8a55d601e4123c38c1cd6f8a08437a5935c60e
            <Route exact path='/' component={Homepage} />
            <Route path='/randomanimal' component = {RandomAnimal} />
            <Route path='/results' component = {ResultsAnimal} />
            <Route path='/petslist' component={PetsList} />
            <Route path='/pet' component={Pet} />
            <Route exact path='/petsingle/:id' component={PetSingle} />
            <Route path='/quiz' component={Quiz} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
