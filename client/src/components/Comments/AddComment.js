import React, { Component } from 'react';
import apiServices from '../../apiServices/apiServices'

class AddComment extends Component {
	constructor(props){
		super(props);
		this.state= {
			comment: '',
			pet_id: ''
		}
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
	}
	handleInputChange(e){
		console.log(e.target.value)
		this.setState({
			comment: e.target.value,
			pet_id: this.props.petId
		})
	}

	handleFormSubmit(e){
		apiServices.addComment(this.state)  
        console.log('added from handle form submit!', this.state)
	 }
	render(){
		return(
			<div>
				<form onSubmit={this.handleFormSubmit}>
					<textarea type='text' name='comment' onChange={this.handleInputChange} >
					</textarea>
					<input type='hidden' name='pet_id' value='this.props.petId' />
					<br/>	
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default AddComment;