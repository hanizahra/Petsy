import React, { Component } from 'react';
import Pet from './Pet';
import apiServices from '../../apiServices/apiServices';
import { Redirect } from 'react-router-dom';

class PetsList extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      apiDataPets: null,
    }
  };
  componentDidMount() {
   	apiServices.getAllPets()
      .then( pets => {
      console.log('component did mount fr PetsList',pets)
      	this.setState({
        	apiDataLoaded: true,
          apiDataPets: pets.data.petsData.petsList,
      	})
    })
    .catch( err => {
      console.log('noooo', err)
    });
  };
  renderPets() {
    console.log('loaded data from julius\' kick ass server', this.state)
    return this.state.apiDataPets.map( (el, i) => {
      return <Pet key={el.id} pets={el} petID={i} />
    })
  }
  render() {
    return(
        <div>
          {this.state.apiDataLoaded ? this.renderPets() : ''}
        </div>
      )
  }
}

export default PetsList;