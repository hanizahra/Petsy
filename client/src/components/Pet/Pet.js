import React, {Component} from 'react';
import apiServices from '../../apiServices/apiServices'

class Pet extends Component {
constructor(props){
	super(props)
	this.state = {
		apiDataLoaded: false,
      	apiData: null,
      	fireRedirect: false
	}
	this.deletePet = this.deletePet.bind(this)
}
// componentDidMount() {
// 	apiServices.getAllCommentsForThisPet()
//       .then(comments => {
//         this.setState({
//           apiDataLoaded: true,
//           apiDataComments: comments.data.commentsData.getAllComments
//         })
//     })  
// }
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
        <p>{this.props.pets.id}</p>
        <button onClick={this.deletePet}>Delete</button>
      </div>
    )
	}
}
export default Pet;