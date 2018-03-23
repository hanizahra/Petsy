import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PetCarousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import ShareButton from 'react-social-share-buttons';


class PetResult extends Component {

	constructor(props) {
		super(props);
		
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
		let newBreed = [];
		let options = [];
		let photos = [];
		let photo = [];
		if (this.props.pet) {
			animal = this.props.pet.animal['$t'];
			phone = this.props.pet.contact.phone['$t'];
			address1 = this.props.pet.contact.address1['$t'];
			address2 = this.props.pet.contact.address2['$t'];
			city = this.props.pet.contact.city['$t'];
			email = this.props.pet.contact.email['$t'];
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
			
			description = this.props.pet.description['$t'];
			id = this.props.pet.id['$t'];
			lastUpdate = this.props.pet.lastUpdate['$t']
			mix = this.props.pet.mix['$t'];
			name = this.props.pet.name['$t'];
		

			if (typeof this.props.pet.options.option === 'object' && this.props.pet.options.option.length > 0) {
					this.props.pet.options.option.forEach(opt => {
						altered.push(opt['$t'])
					})
					options = altered.map(function(el, id) {
						return (<li key = {id} > {el} </li>)
					})
				

			} else {
				options = 'none'
			} 

			sex = this.props.pet.sex['$t'];
			age = this.props.pet.age['$t'];
			shelterId = this.props.pet.shelterId['$t'];
			shelterPetId = this.props.pet.shelterPetId['$t'];
			size = this.props.pet.size['$t'];
			status = this.props.pet.status['$t']


			// if (typeof this.props.pet.media.photos === 'object' && this.props.pet.media.photos.photo.length > 0) {
			// 		// this.props.pet.media.photos.photo.forEach(opt => 
			// 		// {
			// 		// 	photos.push(opt['$t'])
			// 		// })
			// 		let photos = this.props.pet.media.photos.photo;
			// 		photo = photos.map(function(el, id) {
			// 			if(el['@size'] === 'x'){
			// 				return (<li key = {id} > <img src={el['$t']} /> </li>)
			// 			}
			// 		})

			// } else {
			// 	photo = 'none';
			// }
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






export default PetResult;