import React, { Component } from 'react';
import Pet from '../Pet/Pet'
import apiServices from '../../apiServices/apiServices'

class PetsList extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      apiDataPets: null,
      apiDataComments: null,
    }
  };
  componentDidMount() {
   	apiServices.getAllPets()
    	.then( pets => {
      	this.setState({
        	apiDataLoaded: true,
          apiDataPets: pets.data.petsData.petsList
      	})
    })
    .catch( err => {
      console.log('noooo', err)
    });
  };
  renderPets() {
    console.log('loaded data from julius\' kick ass server', this.state)
        return this.state.apiDataPets.map( (el, i) => {
          return <Pet key={el.id} pets={el} petID={i} deletePet={this.deletePet}/>
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