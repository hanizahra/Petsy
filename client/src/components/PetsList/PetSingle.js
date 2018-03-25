import React, { Component } from 'react';
import apiServices from '../../apiServices/apiServices'
import Comments from '../Comments/Comments'

class PetSingle extends Component {
	constructor(){
		super();
		this.state= {
			apiDataLoaded: false,
			apiData: '',
			fireRedirect: false
		}
		this.deletePet = this.deletePet.bind(this)
	}
	componentDidMount() {
		console.log('component did mount petsingle --->', this.props.match.params.id)
		apiServices.getOnePet(this.props.match.params.id)
		.then(pet => {
			console.log('getOnePet is here--->',pet)
			this.setState({
				apiDataLoaded: true,
				apiData: pet.data.dataShowOne.pet
			})
		})
	}
	deletePet() {
    console.log('deleting ===>', this.params.match.id)
    apiServices.deletePet(this.props.match.params.id)
	.then((comment) => {
    	this.setState({
      		fireRedirect: true
    	});
  	})
  	.catch((err) => {
        console.log('noo', err)
    })
}
	render() {
		let pet = this.state.apiData
		return(
			<div>
			<h1>Yo Pet Single</h1>
			<p><strong>Pet's Name: </strong>{pet.name}</p>
			<p><strong>Type: </strong>{pet.animal}</p>
			<p><strong>Breed: </strong>{pet.breed}</p>
			<p><strong>Hybrid: </strong>{pet.mixed}</p>
			<p><strong>Description: </strong>{pet.description}</p>
			<p><strong>Owner's Address: </strong>{pet.owner_address}</p>
			<p><strong>City: </strong>{pet.owner_city}</p>
			<p><strong>State: </strong>{pet.owner_state}</p>
			<p><strong>Email: </strong>{pet.owner_email}</p>
			<p><strong>Id: </strong>{pet.id}</p>
			<Comments petId={this.props.match.params.id}/>
          	<button onClick={this.deletePet}>Delete Pet</button>
          	
			</div>
		)
	}
}

export default PetSingle;