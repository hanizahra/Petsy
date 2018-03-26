import React, { Component } from 'react';
import apiServices from '../../apiServices/apiServices'
import Comments from '../Comments/Comments'

import Facebook from '../Social/Facebook';
import Twitter from '../Social/Twitter';

import ShareButton from 'react-social-share-buttons';
import { Redirect } from 'react-router-dom';


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
		console.log('state fr petsingle', this.state)
		return(
			<div>
			<h1>Yo Pet Single</h1>
			<p><strong>Pet's Name: </strong>{pet.name}</p>
			<p><strong>Type: </strong>{pet.animal}</p>
			<p><strong>Breed: </strong>{pet.breed}</p>
			<p><strong>Hybrid: </strong>{pet.mixed}</p>
			<p><strong>Description: </strong>{pet.description}</p>
			<p><strong>Owner's Address: </strong>{pet.owner_address}</p>
			<p><strong>City: </strong>{pet.owner_city}</p>
			<p><strong>State: </strong>{pet.owner_state}</p>
			<p><strong>Email: </strong>{pet.owner_email}</p>
			<p><strong>Id: </strong>{pet.id}</p>
			<Comments petId={this.props.match.params.id}/>
          	<button onClick={this.deletePet}>Delete Pet</button>

          	<footer><p><Facebook /> 
                <Twitter /></p></footer>

          	{this.state.fireRedirect ? <Redirect to='/petslist' /> : ''}
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

export default PetSingle;