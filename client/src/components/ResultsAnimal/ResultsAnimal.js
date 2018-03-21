import React, { Component } from 'react';
import PetResult from './PetResult';
import PetThumbResult from './PetThumbResult'


class ResultsAnimal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pets: [],
			locationArg: '11215',
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
		const ResultsAnimalUrl = 'http://api.petfinder.com/pet.find?key=afd0c202e8bb93fc9c52f49d4a226b04&shelterid=&output=full&format=json&location=' + this.state.locationArg + '&count=' + this.state.numResults + '&size=' + this.state.sizeResults + '&sex=' + this.state.animalSex + '&animal=' + this.state.animalType;
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
					<form onSubmit={this.handleFormSubmit}>
						
						<input type='text' placeholder='City, State, or Zipcode' value={this.state.locationArg} onChange={this.setLocationArg}/>
						<select placeholder='animalType' value={this.state.animalType} onChange={this.setAnimalType}>
							<option selected='selected'>Type</option> 
							<option value={'cat'}>Cat</option>
							<option value={'dog'}>Dog</option>
							<option value={'smallfurry'}>Small Furry</option>
							<option value={'bird'}>Bird</option>
							<option value={'reptile'}>Reptile</option>
							<option value={'horse'}>Horse</option>
							<option value={'barnyard'}>Barnyard</option>
						</select>
						<select placeholder='sizeResults' value={this.state.sizeResults} onChange={this.setSizeResults}>
							<option selected='selected'>Size</option>
							<option value={'S'}>Small</option>
							<option value={'M'}>Medium</option>
							<option value={'L'}>Large</option>
							<option value={'XL'}>Extra</option>
						</select>
						<select placeholder='sexResults' value={this.state.animalSex} onChange={this.setAnimalSex}>
							<option selected='selected'>Sex</option>
							<option value={'F'}>Female</option>
							<option value={'M'}>Male</option>
						</select>
						<select placeholder='numResults' value={this.state.numResults} onChange={this.setNumResults}>
							<option selected='selected'>Results Per Page</option>
							{resultOptions}
						</select>
						<button onClick={this.newAnimal}>Submit</button>
						
						
						
					</form>
					<div className="pet-thumb-results-container">
						{petThumbResults}
					</div>
				</div>
			);
		}
		else {
			return (
				<div>
					<a href="#" onClick={this.backToResults}>Go Back</a>
					<PetResult pet={this.state.pets[this.state.showProfile]}/>
				</div>);
		}

	}
}






export default ResultsAnimal