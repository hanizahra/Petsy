import React, { Component } from 'react';
import apiServices from '../../apiServices/apiServices'
import Comments from '../Comments/Comments'
import ShareButton from 'react-social-share-buttons';
import { Well, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import SingleCarousel from './SingleCarousel';
import Facebook from '../Social/Facebook';
import Twitter from '../Social/Twitter';

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

    apiServices.deletePet(this.props.match.params.id)
	.then((comment) => {
    	this.setState({
      		fireRedirect: true
    	});
		console.log('deleted a thing', this.state)
  	})
  	.catch((err) => {
        console.log('noo', err)
    })
}
	render() {
		let pet = this.state.apiData
		// let petPic = JSON.parse(pet)
		console.log('state fr petsingle', this.state)
		console.log('this is pet---> ', pet)
		console.log('this is this.state.apiData', this.state.apiData.photos)
		// console.log('this is pet parsed', petPic)
		
		if(this.state.apiDataLoaded)
		{
			console.log('name', pet.name, typeof pet.name);
			let name = JSON.parse(pet.name)['$t'];
			let animal = JSON.parse(pet.animal)['$t'];
			let breed = JSON.parse(pet.breed)['breed']['$t'];
			let mixed = JSON.parse(pet.mixed)['$t'];
			let description = JSON.parse(pet.description)['$t'];
			let owner_address = JSON.parse(pet.owner_address)['$t'];
			let city = JSON.parse(pet.owner_city)['$t'];
			let state = JSON.parse(pet.owner_state)['$t'];
			let email = JSON.parse(pet.owner_email)['$t'];
			let photos = JSON.parse(pet.photos)['photo'];
			console.log('these are the photos', photos)


			return(
				<div>
					<SingleCarousel photos={photos} />
					<Well className='single-well'>
						<p><strong>Pet's Name: </strong>{name}</p>
						<p><strong>Animal: </strong>{animal}</p>
						<p><strong>Breed: </strong>{breed}</p>
						<p><strong>Mixed: </strong>{mixed}</p>
						<p><strong>Description: </strong>{description}</p>
						<p><strong>Owner's Address: </strong>{owner_address}</p>
						<p><strong>City: </strong>{city}</p>
						<p><strong>State: </strong>{state}</p>
						<p><strong>Email: </strong>{email}</p>
						<p><strong>Id: </strong>{pet.id}</p>
						<Comments petId={this.props.match.params.id}/>
			          	<ButtonToolbar>
						    <Button bsStyle="danger" onClick={this.deletePet}>Delete Pet</Button>
						</ButtonToolbar>
			          	
			          	{this.state.fireRedirect ? <Redirect to='/petslist' /> : ''}
		          	</Well>
		          	<footer><p><Facebook />
               		<Twitter /></p></footer>  
				</div>
			)
		}
		else
		{
			return (<div>Loading...</div>);
		}
	}
}

export default PetSingle;