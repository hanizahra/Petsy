import React, { Component } from 'react';

class PetSingle extends Component {
	componentDidMount() {
		console.log('component did mount petsingle --->', this.props)
	}
	render() {
		return(
			<div>
			<h1></h1>
				{console.log('hello',this.props.pet)}
			</div>
		)
	}
}

export default PetSingle;