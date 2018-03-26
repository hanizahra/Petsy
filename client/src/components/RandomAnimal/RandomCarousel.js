import React, { Component } from 'react';
import RandomAnimal from './RandomCarousel';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';


class RandomCarousel extends Component {

	constructor(props) {
		super(props)
	}

  	render() {

		let id;
		let photos = [];
		let photo = [];
		
		if (this.props.pet) {

			if (typeof this.props.pet.media.photos === 'object' && this.props.pet.media.photos.photo.length > 0) {
		
					let photos = this.props.pet.media.photos.photo;
					photo = photos.map(function(el, id) {
						if(el['@size'] === 'x'){
							// return (<li key = {id} > <img src={el['$t']} /> </li>)
							return (

								<Carousel.Item>
			            			<div id="randImage"> <img id="caroRandImage" width={450} height={350} alt="900x500" src={el['$t']}/> </div>
			          			</Carousel.Item>
							)
						}
					})
					console.log('this is photo---> ', photo)
			} else {
				photo = 'none';
				console.log('this is photo---> ', photo)
			}
			console.log('the if in RandomCarousel is working')
		}

		console.log('this is this.props.pet', this.props)

    return (
      <div className="App">
        <Carousel>
          {photo}
        </Carousel>
      </div>
    );
  }
}

export default RandomCarousel;