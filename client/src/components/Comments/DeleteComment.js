import React, { Component } from 'react';
import apiServices from '../../apiServices/apiServices';
import { Redirect } from 'react-router-dom';

class DeleteComment extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			fireRedirect: false,
		}
		this.deleteComment = this.deleteComment.bind(this)
	}
	deleteComment() {
		console.log('about to delete', this.props)
		apiServices.deleteComment(this.props.commentId)
		.then((comment) => {
			this.setState({
				fireRedirect:true
			})
		})
		.catch((err) => {
			console.log('err fr deleteComment-->', err)
		})
	}
	render() {
		return(
			<span>
				<button onClick={this.deleteComment}> Delete </button>
				{this.state.fireRedirect ?  window.location.reload() : ''}
			</span>
		)
	}
}

export default DeleteComment;