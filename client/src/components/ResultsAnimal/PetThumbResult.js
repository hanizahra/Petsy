import React, { Component } from 'react';
import { Grid, Row, Col, Image, Thumbnail, Button} from 'react-bootstrap';
import apiServices from '../../apiServices/apiServices';


class PetThumbResult extends Component {

	constructor(props) {
	super(props);
		
	this.addToPetsList = this.addToPetsList.bind(this)
	}
	showPetProfile = (petId) => {
		this.props.showPetProfile(petId);
	}

	addToPetsList() {
		console.log('about to be added===>', this.props)
		apiServices.addToPetsList(this.props.pet)
		alert('pet added to your favorites')
      	console.log('added to your kick ass database! ===>', this.state.pet)
	}

	render () {
		let breeds = [];
		let newBreed = [];
		let options = [];
		let photos = [];
		let photo = [];
		let animal;
		let phone;
		let address1;
		let address2
		let city;
		let email;
		let state;
		let zipcode;
		let breed = [];
		let description;
		let id;
		let lastUpdate;
		let mix;
		let name;
		let altered = [];
		let sex;
		let age;
		let shelterId;
		let shelterPetId;
		let size;
		let status;
		let thumbnail = '';
		let renderedThumb = '';

		if (typeof this.props.pet != 'undefined') {
			animal = this.props.pet.animal['$t'];
			city = this.props.pet.contact.city['$t'];
			state = this.props.pet.contact.state['$t'];
			zipcode = this.props.pet.contact.zip['$t'];
			
			if (this.props.pet.breeds.breed.length > 0) {
					this.props.pet.breeds.breed.forEach(opt => {
						
						breed.push(opt['$t'])
						
					})
					newBreed = breed.map(function(el, id) {
						return (<li key = {id} > {el} </li>)
					})
				

			} else {
				newBreed = this.props.pet.breeds.breed['$t']
			} 
			
			id = this.props.pet.id['$t'];
			lastUpdate = this.props.pet.lastUpdate['$t']
			name = this.props.pet.name['$t'];
			sex = this.props.pet.sex['$t'];
			age = this.props.pet.age['$t'];
			status = this.props.pet.status['$t']

			
			if (typeof this.props.pet.media.photos === 'object' && this.props.pet.media.photos.photo.length > 0) {
					
				let photos = this.props.pet.media.photos.photo;
				let photoIdx = 0;
				let photoLen = photos.length;
				
				for(;photoIdx < photoLen; photoIdx++) {
					if(photos[photoIdx]['@size'] == 'pn') {
						thumbnail = photos[photoIdx]['$t'];
						renderedThumb = (
							<Col xs={6} md={4}>
						      <Thumbnail src={thumbnail} alt="242x200" responsive>
						        <p>{name}</p>
						        <p>
						          <Button bsStyle="primary">Go to</Button>&nbsp;
						          <Button bsStyle="default" onClick={this.addToPetsList}>Save</Button>
						        </p>
						      </Thumbnail>
						    </Col>)
						break;
					}
				}
			} 
		}
		
		return (
			<div className="pet-thumb-result" onClick={(evt) => this.showPetProfile(this.props.index)}>
				{/*<div><img src={thumbnail}/></div>
				<div>{name}</div>*/}
				<Grid>
				  <Row>
				    
				    {renderedThumb}
				   
				  </Row>
				</Grid>
			</div>
		)
		
	}
}






export default PetThumbResult;