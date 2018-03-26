import React, {Component} from 'react';
import apiServices from '../../apiServices/apiServices';
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
import { Well, Thumbnail } from 'react-bootstrap';
import ShareButton from 'react-social-share-buttons';
import Comments from '../Comments/Comments';
import PetSingle from './PetSingle';

class Pet extends Component {
constructor(props){
	super(props)
	this.state = {
      	fireRedirect: false,
        apiPetData: this.props
	}
	this.deletePet = this.deletePet.bind(this)
}
componentDidMount() {
  console.log('componentDidMount pet -->', this.props)
}
deletePet() {
    console.log('deleting ===>', this.props.pets.id)
    apiServices.deletePet(this.props.pets.id)
	  .then((comment) => {
    	this.setState({
      		fireRedirect: true
    	});
  	})
  	.catch((err) => {
        console.log('noo', err)
    })
}
render() {
  console.log('this is props', this.props.pets.photos)
  return (
        <div className='pet-list'>
          <Well className='pet-list-well'>
            <h2>Name:{this.props.pets.name}</h2>
            <Link className="seeMore" to={`/petsingle/${this.props.pets.id}`}>See more</Link>
            <p>Type:{this.props.pets.animal}</p>
            <p>Breed:{this.props.pets.breed}</p>
          </Well>
          {this.state.fireRedirect ? <Redirect to='/petsList' /> : ''}
          <ShareButton
                compact
                socialMedia={'facebook'}
                url={"https://brian-martinez-portfolio.herokuapp.com/index.html"}
                media={"https://brianmartinezjtm.com"}
                text="adopt this cat"
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
export default Pet;