import React, { Component } from 'react';
import PetSingle from './PetSingle';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';


class SingleCarousel extends Component {

	constructor(props) {
		super(props)
	}

  render() {
	
		console.log('SingleCarousel: ', this.props.photos);
		let photos = this.props.photos;
		let carouselItems = [];
		carouselItems = photos.map(function(el, id) {
			if(el['@size'] === 'x'){
				return (

					<Carousel.Item>
            			<div id="randImage"> <img id="caroRandImage" width={450} height={350} alt="900x500" src={el['$t']}/> </div>
          			</Carousel.Item>
				)
			}
		})
		
    return (
      	<div className="App">
        <Carousel>
          {carouselItems}
        </Carousel>
      	</div>
    );
  }
}

export default SingleCarousel;