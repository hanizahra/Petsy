import React, { Component } from 'react';
import apiServices from '../../apiServices/apiServices';
import AddComment from './AddComment';
import EditComment from './EditComment';
import DeleteComment from './DeleteComment';
class Comments extends Component {
	constructor() {
		super();
		this.state = {
			apiDataLoaded: false,
			apiDataComments: '',
		}
		this.renderComments = this.renderComments.bind(this)
	}
	componentDidMount() {
		apiServices.getAllCommentsForThisPet(this.props.petId)
		.then(comments=> {
		console.log('component did mount fr Comments',comments.data.commentsData.comments)
			this.setState({
				apiDataLoaded: true,
				apiDataComments: comments.data.commentsData.comments,
			})
		})
		.catch( err => {
      		console.log('Oh no!!', err)
    	});
	}
	renderComments() {
		console.log('about to render on Comments', this.state.apiDataComments)
		return this.state.apiDataComments.map((el, i) => {
			console.log('about to render fr apiDatcomments dot map', el)
			return <li>{el.comment}</li>
    	})	
	}
	render() {
		return(
			<div>
				<h2>Comments</h2>
				<ul>{this.state.apiDataLoaded ? this.renderComments() : ''}</ul>
				<AddComment petId={this.props.petId} />
			</div>
		)
	}
}

export default Comments; 