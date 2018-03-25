import React, { Component } from 'react';
import PetResult from './PetResult';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ResultsAnimal from './ResultsAnimal';
import { Carousel } from 'react-bootstrap';



class PetCarousel extends Component {

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
			            <div className="imageSize"> <img id="caroImage" width={450} height={350} alt="900x500" src={el['$t']} /> </div>
			          </Carousel.Item>
							)
						}
					})
					console.log('this is photo---> ', photo)
			} else {
				photo = 'none';
			}
		}

    return (
      <div className="App">
        <Carousel>
          {photo}
        </Carousel>
      </div>
    );
  }
}
























































// class PetCarousel extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={}
//     }
//     onSelect= (active,direction)=>{
//         console.log(`active=${active} && direction=${direction}`);
//     }
//     slideNext=()=>{
//       this.slider.slideNext();
//     }
//     slidePrev=()=>{
//       this.slider.slidePrev();
//     }
//     goToSlide=()=>{
//       this.slider.goToSlide(4);
//     }
//     _changeIcon=()=>{
//       let {leftIcon,rightIcon}=this.state;
//       if(leftIcon && rightIcon){
//         this.setState({
//           leftIcon:undefined,
//           rightIcon:undefined
//         });
//       }
//       else{
//         this.setState({
//           leftIcon:<span className="glyphicon glyphicon-glass"></span>,
//           rightIcon:<span className="glyphicon glyphicon-music"></span>
//         });
//       }
//     }
//     render() {
//       let {leftIcon,rightIcon}=this.state;



// 			let id;
// 			let photos = [];
// 			let photo = [];
			
// 			if (this.props.pet) {
	
// 				if (typeof this.props.pet.media.photos === 'object' && this.props.pet.media.photos.photo.length > 0) {
			
// 						let photos = this.props.pet.media.photos.photo;
// 						photo = photos.map(function(el, id) {
// 							if(el['@size'] === 'x'){
// 								// return (<li key = {id} > <img src={el['$t']} /> </li>)
// 								return (

// 									<div key = {id} className="carousel-fade" >
// 	                  <img 
// 	                    style={{width:"100%",height:"100%"}}
// 	                    src={el['$t']}
// 	                  />
// 	                  <div className="carousel-caption">
// 	                    Image
// 	                  </div>
//                 	</div>

// 								)
// 							}
// 						})
// 						console.log('this is photo---> ', photo)
// 				} else {
// 					photo = 'none';
// 				}
// 			}



//       return(
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-12">
//               <button type="button" className="btn btn-default" onClick={this._changeIcon}>
//                 Change Icon
//               </button>
//               <button type="button" className="btn btn-default" onClick={this.slidePrev}>
//                 Slider prev
//               </button>
//               <button type="button" className="btn btn-default" onClick={this.slideNext}>
//                 Slider next
//               </button>
//               <button type="button" className="btn btn-default" onClick={this.goToSlide}>
//                 Go to slide 4
//               </button>
//             </div>
//             <div className="col-md-12">
//               <React_Bootstrap_Carousel
//                 animation={true}
//                 slideshowSpeed={7000}
//                 leftIcon={leftIcon}
//                 rightIcon={rightIcon}
//                 onSelect={this.onSelect}
//                 ref={r=>this.slider=r}
//                 className="carousel-fade"
//               >
//                 <div style={{height:400}}>
//                   <img
//                     style={{width:"100%",height:"100%"}}
//                     src="https://www.w3schools.com/bootstrap/la.jpg"
//                   />
//                   <div className="carousel-caption">
//                     Image
//                   </div>
//                 </div>

//                 {photo}

//               </React_Bootstrap_Carousel>
//             </div>
//           </div>
//         </div>
//       );
//     }
// };


export default PetCarousel;