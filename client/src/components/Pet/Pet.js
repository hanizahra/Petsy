import React, {Component} from 'react';
import apiServices from '../../apiServices/apiServices'
import { Redirect } from 'react-router-dom';

import Comments from '../Comments/Comments'

class Pet extends Component {
constructor(props){
	super(props)
	this.state = {
      	fireRedirect: false
	}
	this.deletePet = this.deletePet.bind(this)
}
deletePet() {
    console.log('deleting ===>', this.props.pets.id)
    apiServices.deletePet(this.props.pets.id)
	.then( (icecream) => {
    	this.setState({
      		fireRedirect: true
    	});
  	})
  	.catch((err) => {
        console.log('noo', err)
    })
}
render() {
  return (
      <div>
        <h2>{this.props.pets.name}</h2>
        <p>{this.props.pets.animal}</p>
        <p>{this.props.pets.breed}</p>
        <p>{this.props.pets.photos}</p>
        <p>{this.props.pets.id}</p>
        <Comments petId={this.props.pets.id}/>
        <button onClick={this.deletePet}>Delete</button>
       	{this.state.fireRedirect ? <Redirect to='/petsList' /> : ''}
      </div>
    )
	}
}
export default Pet;