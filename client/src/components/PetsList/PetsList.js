import React, { Component } from 'react';
import Pet from '../Pet/Pet'
import apiServices from '../../apiServices/apiServices'

class PetsList extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      apiData: null
    };
  };
  componentDidMount() {
   	apiServices.getAllPets()
    	.then( pets => {
      	this.setState({
        	apiDataLoaded: true,
        	apiData: pets.data.petsData.petsList
      	})
    })
    .catch( err => {
      console.log('noooo', err)
    });
  };

  renderPets() {
    console.log('loaded data from julius\' kick ass server', this.state)
        return this.state.apiData.map( (el, i) => {
          return <Pet key={el.id} pets={el} />
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