import React, { Component } from 'react';


class PetThumbResult extends Component {

	constructor(props) {
		super(props);
		
	}

	showPetProfile = (petId) => {
		this.props.showPetProfile(petId);
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
					if(photos[photoIdx]['@size'] == 't') {
						thumbnail = photos[photoIdx]['$t'];
						break;
					}
				}
			} 
		}
		
		return (
			<div className="pet-thumb-result" onClick={(evt) => this.showPetProfile(this.props.index)}>
				<div><img src={thumbnail}/></div>
				<div>{name}</div>
			</div>)
		
	}
}






export default PetThumbResult;