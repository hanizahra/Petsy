import React, {Component} from 'react';
import apiServices from '../../apiServices/apiServices';
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
<<<<<<< HEAD
import Facebook from '../Social/Facebook';
import Twitter from '../Social/Twitter';
=======
import { Well, Thumbnail, Button} from 'react-bootstrap';
import ShareButton from 'react-social-share-buttons';
>>>>>>> 89f87b237e25289d847f2d58a630e256989b826a
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
<<<<<<< HEAD
        <div>
          <h2>Name:{this.props.pets.name}</h2>
          <Link to={`/petsingle/${this.props.pets.id}`}>See more</Link>
          <p>Type:{this.props.pets.animal}</p>
          <p>Breed:{this.props.pets.breed}</p>
          {this.state.fireRedirect ? <Redirect to='/petsList' /> : ''}
         <footer><p><Facebook /> 
                <Twitter /></p></footer>   
        </div>
=======
    <div className='pet-list'>
      <Well className='pet-list-well'>
        {renderedThumb}
        <h2>{name}</h2>
        <p>Animal: {animal}</p>
        <p>Breed: {breed}</p>
        <Link className="seeMore" to={`/petsingle/${this.props.pets.id}`}>See more</Link>
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
>>>>>>> 89f87b237e25289d847f2d58a630e256989b826a
    )
  }
}
export default Pet;