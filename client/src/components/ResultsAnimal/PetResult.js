import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PetCarousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';

import Facebook from '../Social/Facebook';
import Twitter from '../Social/Twitter';

import {Button, Pager, Panel} from 'react-bootstrap';

import ResultsAnimal from './ResultsAnimal';



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
		}

		
		return (
			<div>
				<div className = 'animal-class'>

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

				<button onClick={this.newAnimal}>New Pet</button>
				<footer><p><Facebook /> 
                <Twitter /></p></footer>

				<Button href="/results">Search again!</Button>
				
			</div>
			)
	}
}






export default PetResult;