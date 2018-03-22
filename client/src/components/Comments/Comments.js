import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import apiServices from '../../apiServices/apiServices'

class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiDataLoaded: false,
			apiData: '',
			fireRedirect: false
		}
	}
	componentDidMount() {
		apiServices.getAllCommentsForThisPet(this.props.petId)
		.then(comments=> {
		console.log(comments)
			this.setState({
				apiDataLoaded: true,
				apiData: comments,
				fireRedirect: true
			})
		})
		.catch( err => {
      		console.log('Oh no!!', err)
    	});
	}
	renderComments() {

	}

	render() {
		return(
			<div>
				Hi comments here
			</div>
		)
	}
}

export default Comments; 