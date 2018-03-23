import React, {Component} from 'react';
import apiServices from '../../apiServices/apiServices';
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
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
  return (
        <div>
          <h2>Name:{this.props.pets.name}</h2>
          <Link to={`/petsingle/${this.props.pets.id}`}>See more</Link>
          <p>Type:{this.props.pets.animal}</p>
          <p>Breed:{this.props.pets.breed}</p>
          {this.state.fireRedirect ? <Redirect to='/petsList' /> : ''}
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
export default Pet;

/*
          <BrowserRouter>
          <div>
            <Link to='/petsingle'> <p> see more </p> </Link>
            <Route path='/petsingle' component={() => (<PetSingle pet={this.props} /> )}/>
          </div>
          </BrowserRouter>

          */