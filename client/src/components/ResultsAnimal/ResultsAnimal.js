import React, { Component } from 'react';
import PetResult from './PetResult';
import PetThumbResult from './PetThumbResult';
import PetCarousel from './Carousel';
import { Well, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button, Pager } from 'react-bootstrap';
import ShareButton from 'react-social-share-buttons';

class ResultsAnimal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pets: [],
			locationArg: '11211',
			numResults : '5',
			sizeResults : '',
			animalSex : '',
			animalType: '',
			showProfile: null,

	}

		this.newAnimal = this.newAnimal.bind(this)
		this.setLocationArg = this.setLocationArg.bind(this)
		this.setNumResults = this.setNumResults.bind(this)
		this.setSizeResults = this.setSizeResults.bind(this)
		this.setAnimalSex = this.setAnimalSex.bind(this)
		this.setAnimalType = this.setAnimalType.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		
	}

	componentDidMount() {
		this.newAnimal();
	}


	newAnimal() {
		const ResultsAnimalUrl = 'http://api.petfinder.com/pet.find?key=afd0c202e8bb93fc9c52f49d4a226b04&output=full&format=json&location=' + this.state.locationArg + '&count=' + this.state.numResults + '&size=' + this.state.sizeResults + '&sex=' + this.state.animalSex + '&animal=' + this.state.animalType;
		console.log('ResultsAnimalUrl: ', ResultsAnimalUrl);
		fetch(ResultsAnimalUrl)
			.then(response => {
				return response.json();
			})
			.then(json => {
				this.setState({
				 	pets: json['petfinder']['pets']['pet'] //JSON.stringify(json)
				})
				console.log(json['petfinder']['pets']['pet']);
			})
			.catch(err => {
				console.log(err.message)
			})
	}

	setLocationArg(evt) {
		this.setState({
			locationArg: evt.target.value
		});
	}

	setNumResults(evt) {
		console.log(evt.target.value);
		this.setState({
			numResults: evt.target.value
		})
	}

	setSizeResults(evt) {
		this.setState({
			sizeResults: evt.target.value
		})
	}

	setAnimalSex(evt) {
		evt.preventDefault();
		this.setState({
			animalSex : evt.target.value
		})
	}

	setAnimalType(evt) {
		evt.preventDefault();
		this.setState({
			animalType: evt.target.value
		})
	}



	handleFormSubmit(e) {
		e.preventDefault();
	}
	
	showPetProfile = (petId) =>
	{
		this.setState({showProfile: petId});
	}

	backToResults = (evt) =>
	{
		evt.preventDefault();
		this.setState({showProfile: null});
	}


	render () {

		let petThumbResults = [];
		

		if(this.state.showProfile === null)
		{
			if(this.state.pets.length > 0){
				petThumbResults = this.state.pets.map(function(pet, index){
					return(<PetThumbResult index={index} pet={pet} showPetProfile={this.showPetProfile}/>);
				}.bind(this));
			}
			let resultOptions = [];
			for(let i = 5;i<=100;i+=20){
				resultOptions.push(<option value={i}>{i}</option>)
			}
			return (
				<div>
					<Well>
						<h1>Find your pet!</h1>
					    <form inline>

					        <FormGroup controlId="formBasicText">
					          	<ControlLabel>Location</ControlLabel>
					          	<FormControl

						            type="text"
						            value={this.state.locationArg}
						            placeholder="City, State, or Zipcode"
						            onChange={this.setLocationArg}/>
					        	<FormControl.Feedback />
					    	</FormGroup>

					        <FormGroup controlId="formControlsSelect">
						      	<ControlLabel>Type</ControlLabel>
						      	<FormControl componentClass="select" 
							      	placeholder="type"
							      	value={this.state.animalType}
							      	onChange={this.setAnimalType}>
							        <option value="select">Select</option>
							        <option value="cat">Cat</option>
							        <option value="dog">Dog</option>
							        <option value="smallfurry">Small Furry</option>
							        <option value="bird">Bird</option>
							        <option value="reptile">Reptile</option>
							        <option value="horse">Horse</option>
							        <option value="barnyard">Barnyard</option>
						      	</FormControl>
						    </FormGroup>

						    


						    <FormGroup controlId="formControlsSelect">
						      	<ControlLabel>Size</ControlLabel>
						      	<FormControl componentClass="select" 
							      	placeholder="Size"
							      	value={this.state.sizeResults}
							      	onChange={this.setSizeResults}>
							        <option value="select">Select</option>
							        <option value="S">Small</option>
							        <option value="M">Medium</option>
							        <option value="L">Large</option>
							        <option value="XL">Extra Large</option>
						      	</FormControl>
						    </FormGroup>

						    <FormGroup controlId="formControlsSelect">
						      	<ControlLabel>Results</ControlLabel>
						      	<FormControl componentClass="select" 
							      	placeholder="type"
							      	value={this.state.numResults}
							      	onChange={this.setNumResults}>
							        <option selected='selected'>Results Per Page</option>
									{resultOptions}
						      	</FormControl>
						    </FormGroup>
						    <Button onClick={this.newAnimal}>Submit</Button>

						    <FormGroup value={this.state.animalSex} onChange={this.setAnimalSex}>
						      	<Radio name="radioGroup" inline value="F">
						        	Female
						      	</Radio>{' '}
						      	<Radio name="radioGroup" inline value="M">
						        	Male
						      	</Radio>{' '}
						    </FormGroup>

						</form>
					</Well>
					<div className="pet-thumb-results-container">
						{petThumbResults}
					</div>
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
			);
		}
		else {
			return (
				<div>
					<Pager>
					  	<Pager.Item previous onClick={this.backToResults}>
					    	&larr; Previous Page
					 	</Pager.Item>
					</Pager>
					<PetCarousel pet={this.state.pets[this.state.showProfile]}/>
					<PetResult pet={this.state.pets[this.state.showProfile]} newAnimal={this.newAnimal}/>
				</div>);
		}

	}
}






export default ResultsAnimal