import React, {Component} from 'react';
import apiServices from '../../apiServices/apiServices';
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
import { Well, Thumbnail, Button} from 'react-bootstrap';
import ShareButton from 'react-social-share-buttons';
import Comments from '../Comments/Comments';
import PetSingle from './PetSingle';
import Facebook from '../Social/Facebook';
import Twitter from '../Social/Twitter';

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

  let photos = [];
  let photo = [];
  let thumbnail = '';
  let renderedThumb = '';
  if (typeof this.props.pets.photos === 'string' ) {
          
    let photos = JSON.parse(this.props.pets.photos);
    console.log(photos);
    if(typeof photos === 'object' && photos.photo.length > 0)
    {
      console.log('photos:', photos);
      photos = photos.photo;
      let photoIdx = 0;
      let photoLen = photos.length;
      
      for(;photoIdx < photoLen; photoIdx++) {
        if(photos[photoIdx]['@size'] == 'pn') {
          thumbnail = photos[photoIdx]['$t'];
          renderedThumb = (
            <div className="thumbnail">
              <img src={thumbnail} alt="242x200" />
            </div>
              )
          break;
        }
      }
    }
  } 



  

  let name = JSON.parse(this.props.pets.name)['$t'];
  let animal = JSON.parse(this.props.pets.animal)['$t'];
  let breed = JSON.parse(this.props.pets.breed)["breed"]['$t'];


  return (
    <div className='pet-list'>
      <Well className='pet-list-well'>
        {renderedThumb}
        <h2>{name}</h2>
        <p>Animal: {animal}</p>
        <p>Breed: {breed}</p>
        <Link className="seeMore" to={`/petsingle/${this.props.pets.id}`}>See more</Link>
      </Well>
      {this.state.fireRedirect ? <Redirect to='/petsList' /> : ''}
      <footer><p><Facebook />
      <Twitter /></p></footer>  
    </div>
    )
  }
}
export default Pet;