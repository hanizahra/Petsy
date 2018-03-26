import React, { Component } from 'react';
import apiServices from '../../apiServices/apiServices';
<<<<<<< HEAD
import Facebook from '../Social/Facebook';
import Twitter from '../Social/Twitter';
=======
import ShareButton from 'react-social-share-buttons';
import RandomCarousel from './RandomCarousel';
import { Panel, Button, ButtonGroup } from 'react-bootstrap';
>>>>>>> 577b00582943765e1c00c15009999600614829b6

class RandomAnimal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pet: null,
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
			animal = this.state.pet.animal['$t'];
			phone = this.state.pet.contact.phone['$t'];
			address1 = this.state.pet.contact.address1['$t'];
			address2 = this.state.pet.contact.address2['$t'];
			city = this.state.pet.contact.city['$t'];
			email = this.state.pet.contact.email['$t'];
			state = this.state.pet.contact.state['$t'];
			zipcode = this.state.pet.contact.zip['$t'];
			if (this.state.pet.breeds.breed.length > 0) {
					this.state.pet.breeds.breed.forEach(opt => {
						breed.push(opt['$t'])
					})
					newBreed = breed.map(function(el, id) {
						return (<li key = {id} > {el} </li>)
					})

			} else {
				newBreed = this.state.pet.breeds.breed['$t']
			} 
			
			description = this.state.pet.description['$t'];
			id = this.state.pet.id['$t'];
			lastUpdate = this.state.pet.lastUpdate['$t']
			mix = this.state.pet.mix['$t'];
			name = this.state.pet.name['$t'];
		

			if (typeof this.state.pet.options.option === 'object' && this.state.pet.options.option.length > 0) {
					this.state.pet.options.option.forEach(opt => {
						altered.push(opt['$t'])
					})
					options = altered.map(function(el, id) {
						return (<li key = {id} > {el} </li>)
					})

			} else {
				options = 'none'
			} 
			// console.log('sex --> ', this.state.pet.sex['$t']);
			sex = this.state.pet.sex['$t'];
			age = this.state.pet.age['$t'];
			shelterId = this.state.pet.shelterId['$t'];
			shelterPetId = this.state.pet.shelterPetId['$t'];
			size = this.state.pet.size['$t'];
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
				<div className = 'animal-class'>
					<RandomCarousel pet={this.state.pet}/>
					<Panel bsStyle="primary">
					    <Panel.Heading>
					      	<Panel.Title componentClass="h3">Animal Info</Panel.Title>
					    </Panel.Heading>
					    <Panel.Body>
					    	<p><b>Name:</b> {name} </p>
					    	<p><b>Breed:</b></p> <ul> {newBreed} </ul>
							<p><b>Animal:</b> {animal} </p>
							<p><b>Sex:</b> {sex} </p>
							<p><b>Age:</b> {age} </p>
							<p><b>Mix:</b> {mix} </p>
							<p><b>Size:</b> {size} </p>
							<p><b>Altered:</b></p> <ul> {options} </ul>
							<p><b>Description:</b> {description} </p>
							<p><b>Status:</b> {status} </p>
							<p><b>Posted:</b> {lastUpdate} </p>
					    </Panel.Body>
					 </Panel>
				</div>
				<div className = 'owner-class'>

					<Panel bsStyle="primary">
					    <Panel.Heading>
					      	<Panel.Title componentClass="h3">Owner Info</Panel.Title>
					    </Panel.Heading>
					    <Panel.Body>
							<p>{address1} </p>
							<p>{address2} </p>
							<p>{city} </p>
							<p>{email} </p>
							<p>{state} </p>
							<p>{zipcode} </p>	
							<p>{phone} </p>
					    </Panel.Body>
					 </Panel>
				</div>
<<<<<<< HEAD
				<button onClick={this.newAnimal}>New Pet</button>
				<button onClick={this.addToPetsList}>Add to Favoritos</button>
				<footer><p><Facebook /> 
                <Twitter /></p></footer>
=======
				<ButtonGroup>
				  	<Button onClick={this.newAnimal}>Feeling Lucky?</Button>
				  	<Button onClick={this.addToPetsList}><span class="glyphicon glyphicon-star" aria-hidden="true"></span> Save</Button>
				</ButtonGroup>
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
>>>>>>> 577b00582943765e1c00c15009999600614829b6
			</div>
			)
	}
}
export default RandomAnimal