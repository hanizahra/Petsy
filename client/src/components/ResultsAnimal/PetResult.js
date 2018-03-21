import React, { Component } from 'react';



class PetResult extends Component {

	constructor(props) {
		super(props);
		
	}

	componentDidMount() {
		
	}

	

	render () {

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
		let breeds = [];
		// let breedsObj;
		let newBreed = [];
		let options = [];
		let photos = [];
		let photo = [];
		if (this.props.pet) {
			// console.log('animal --> ', this.props.pet.animal['$t']);
			animal = this.props.pet.animal['$t'];
			// console.log('contact: phone --> ', this.props.pet.contact.phone['$t']);
			phone = this.props.pet.contact.phone['$t'];
			// console.log('contact: address1 --> ', this.props.pet.contact.address1['$t']);
			address1 = this.props.pet.contact.address1['$t'];
			// console.log('contact: address2 --> ', this.props.pet.contact.address2['$t']);
			address2 = this.props.pet.contact.address2['$t'];
			// console.log('contact: city --> ', this.props.pet.contact.city['$t']);
			city = this.props.pet.contact.city['$t'];
			// console.log('contact: email --> ', this.props.pet.contact.email['$t']);
			email = this.props.pet.contact.email['$t'];
			// console.log('contact: state --> ', this.props.pet.contact.state['$t']);
			state = this.props.pet.contact.state['$t'];
			// console.log('contact: zipcode --> ', this.props.pet.contact.zip['$t']);
			zipcode = this.props.pet.contact.zip['$t'];
			// console.log('contact: breeds --> ', this.props.pet.breeds.breed['$t']);
			// breed = this.props.pet.breeds.breed['$t']
			if (this.props.pet.breeds.breed.length > 0) {
					this.props.pet.breeds.breed.forEach(opt => {
						// console.log('***breed*** --> ' + opt['$t'])
						breed.push(opt['$t'])
						// console.log('hellllooooooo is this working?', breed)
					})
					// console.log('still in scope?', breed)
					newBreed = breed.map(function(el, id) {
						return (<li key = {id} > {el} </li>)
					})
					// console.log('this is newBreed', newBreed);
					// console.log('this is newBreed --> ' + newBreed)

			} else {
				newBreed = this.props.pet.breeds.breed['$t']
			} 
			



			// console.log('Description --> ', this.props.pet.description['$t']);
			description = this.props.pet.description['$t'];
			// console.log('ID --> ', this.props.pet.id['$t']);
			id = this.props.pet.id['$t'];
			// console.log('last update --> ', this.props.pet.lastUpdate['$t']);
			lastUpdate = this.props.pet.lastUpdate['$t']
			// console.log('mix --> ', this.props.pet.mix['$t']);
			mix = this.props.pet.mix['$t'];
			// console.log('name --> ', this.props.pet.name['$t']);
			name = this.props.pet.name['$t'];
		

			if (typeof this.props.pet.options.option === 'object' && this.props.pet.options.option.length > 0) {
					this.props.pet.options.option.forEach(opt => {
						// console.log('***altered*** --> ' + opt['$t'])
						altered.push(opt['$t'])
						// console.log('hellllooooooo is this working?', altered)
					})
					// console.log('still in scope?', altered)
					options = altered.map(function(el, id) {
						return (<li key = {id} > {el} </li>)
					})
					// console.log('this is options', options);
					// console.log('this is options --> ' + options)q

			} else {
				options = 'none'
			} 





			// console.log('sex --> ', this.props.pet.sex['$t']);
			sex = this.props.pet.sex['$t'];
			// console.log('age --> ', this.props.pet.age['$t']);
			age = this.props.pet.age['$t'];
			// console.log('shelterId --> ', this.props.pet.shelterId['$t']);
			shelterId = this.props.pet.shelterId['$t'];
			// console.log('shelterPetId --> ', this.props.pet.shelterPetId['$t']);
			shelterPetId = this.props.pet.shelterPetId['$t'];
			// console.log('size --> ', this.props.pet.size['$t']);
			size = this.props.pet.size['$t'];
			// console.log('status --> ', this.props.pet.status['$t']);
			status = this.props.pet.status['$t']


			if (typeof this.props.pet.media.photos === 'object' && this.props.pet.media.photos.photo.length > 0) {
					// this.props.pet.media.photos.photo.forEach(opt => 
					// {
					// 	photos.push(opt['$t'])
					// })
					let photos = this.props.pet.media.photos.photo;
					photo = photos.map(function(el, id) {
						if(el['@size'] === 'x'){
							return (<li key = {id} > <img src={el['$t']} /> </li>)
						}
					})

			} else {
				photo = 'none';
			}
		}

		
		return (
			<div>
				<h1>Results: </h1>
				<div className = 'animal-class'>
					<h3>Animal Information</h3>
					<p>Name: {name} </p>
					Breed: <ul> {newBreed} </ul>
					<p>Animal: {animal} </p>
					<p>Sex: {sex} </p>
					<p>Age: {age} </p>
					<p>Mix: {mix} </p>
					<p>Size: {size} </p>
					<p>Shelter ID: {shelterId} </p>
					<p>Shelter Pet ID: {shelterPetId} </p>
					Altered: <ul> {options} </ul>
					<p>Description: {description} </p>
					Photos: <ul style={{listStyleType: "none" }}> {photo} </ul>
					<p>ID: {id} </p>
					<p>Status: {status} </p>
					<p>Last Update: {lastUpdate} </p>
				</div>
				<div className = 'owner-class'>
					<h3>Owner Information</h3>
					<p>Address1: {address1} </p>
					<p>Address2: {address2} </p>
					<p>City: {city} </p>
					<p>Email: {email} </p>
					<p>State: {state} </p>
					<p>Zipcode: {zipcode} </p>	
					<p>Phone: {phone} </p>

				</div>
				<button onClick={this.newAnimal}>New Pet</button>
				<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-text="Whats shaking? This pets tail! What you think?" data-hashtags="petsy" data-show-count="false">Tweet</a>
				<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script><br/>
			</div>
			)
	}
}






export default PetResult;