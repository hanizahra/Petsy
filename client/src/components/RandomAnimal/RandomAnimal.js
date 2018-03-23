import React, { Component } from 'react';
import apiServices from '../../apiServices/apiServices';
import ShareButton from 'react-social-share-buttons';
class RandomAnimal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pet: null
		}
		this.newAnimal = this.newAnimal.bind(this)
		this.addToPetsList = this.addToPetsList.bind(this)
	}

	componentDidMount() {
		this.newAnimal()
	}

	newAnimal() {
		const randomAnimalUrl = 'http://api.petfinder.com/pet.getRandom?key=afd0c202e8bb93fc9c52f49d4a226b04&shelterid=&output=full&format=json';
		
		fetch(randomAnimalUrl)
			.then(response => {
				return response.json();
			})
			.then(json => {
				this.setState({
				 	pet: json['petfinder']['pet'] //JSON.stringify(json)
				})
				console.log('data from petfinder api====>',json['petfinder']['pet']);
			})
			.catch(err => {
				console.log(err.message)
			})
	}

	addToPetsList() {
		console.log('about to be added===>', this.state.pet)
		apiServices.addToPetsList(this.state.pet)
		alert('pet added to your favorites')
      	console.log('added to your kick ass database! ===>', this.state.pet)
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
		if (this.state.pet) {
			// console.log('animal --> ', this.state.pet.animal['$t']);
			animal = this.state.pet.animal['$t'];
			// console.log('contact: phone --> ', this.state.pet.contact.phone['$t']);
			phone = this.state.pet.contact.phone['$t'];
			// console.log('contact: address1 --> ', this.state.pet.contact.address1['$t']);
			address1 = this.state.pet.contact.address1['$t'];
			// console.log('contact: address2 --> ', this.state.pet.contact.address2['$t']);
			address2 = this.state.pet.contact.address2['$t'];
			// console.log('contact: city --> ', this.state.pet.contact.city['$t']);
			city = this.state.pet.contact.city['$t'];
			// console.log('contact: email --> ', this.state.pet.contact.email['$t']);
			email = this.state.pet.contact.email['$t'];
			// console.log('contact: state --> ', this.state.pet.contact.state['$t']);
			state = this.state.pet.contact.state['$t'];
			// console.log('contact: zipcode --> ', this.state.pet.contact.zip['$t']);
			zipcode = this.state.pet.contact.zip['$t'];
			// console.log('contact: breeds --> ', this.state.pet.breeds.breed['$t']);
			// breed = this.state.pet.breeds.breed['$t']
			if (this.state.pet.breeds.breed.length > 0) {
					this.state.pet.breeds.breed.forEach(opt => {
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
				newBreed = this.state.pet.breeds.breed['$t']
			} 
			



			// console.log('Description --> ', this.state.pet.description['$t']);
			description = this.state.pet.description['$t'];
			// console.log('ID --> ', this.state.pet.id['$t']);
			id = this.state.pet.id['$t'];
			// console.log('last update --> ', this.state.pet.lastUpdate['$t']);
			lastUpdate = this.state.pet.lastUpdate['$t']
			// console.log('mix --> ', this.state.pet.mix['$t']);
			mix = this.state.pet.mix['$t'];
			// console.log('name --> ', this.state.pet.name['$t']);
			name = this.state.pet.name['$t'];
		

			if (typeof this.state.pet.options.option === 'object' && this.state.pet.options.option.length > 0) {
					this.state.pet.options.option.forEach(opt => {
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





			// console.log('sex --> ', this.state.pet.sex['$t']);
			sex = this.state.pet.sex['$t'];
			// console.log('age --> ', this.state.pet.age['$t']);
			age = this.state.pet.age['$t'];
			// console.log('shelterId --> ', this.state.pet.shelterId['$t']);
			shelterId = this.state.pet.shelterId['$t'];
			// console.log('shelterPetId --> ', this.state.pet.shelterPetId['$t']);
			shelterPetId = this.state.pet.shelterPetId['$t'];
			// console.log('size --> ', this.state.pet.size['$t']);
			size = this.state.pet.size['$t'];
			// console.log('status --> ', this.state.pet.status['$t']);
			status = this.state.pet.status['$t']


			if (typeof this.state.pet.media.photos === 'object' && this.state.pet.media.photos.photo.length > 0) {
					this.state.pet.media.photos.photo.forEach(opt => {
						photos.push(opt['$t'])
					})
					photo = photos.map(function(el, id) {
						return (<li key = {id} > {el} </li>)
					})

			} else {
				photo = 'none';
			}
		}

		
		return (
			<div>
				<h1>Random animal up for adoption: </h1>
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
					Photos: <ul> {photo} </ul>
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
				<button onClick={this.addToPetsList}>Add to Favoritos</button>
				<ShareButton
                compact
                socialMedia={'facebook'}
                url={"https://brian-martinez-portfolio.herokuapp.com/index.html"}
                media={"https://brianmartinezjtm.com"}
                text="adobt this cat"
            /> <br/>
            
            <ShareButton
                compact
                socialMedia={'twitter'}
                url={"https://brian-martinez-portfolio.herokuapp.com/index.html"}
                media={"https://brianmartinezjtm.com"}
                text="adopt this dog"
            /> 
			</div>
			)
	}
}




export default RandomAnimal