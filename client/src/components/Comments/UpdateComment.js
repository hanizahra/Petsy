import React, { Component } from 'react';
import apiServices from '../../apiServices/apiServices';

class UpdateComment extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			fireRedirect: false,
			comment: '',
			commentId: this.props.commentId,
			petId: this.props.petId,
			clicked: false
		}
		this.buttonClick = this.buttonClick.bind(this);
		this.handleSubmitForm = this.handleSubmitForm.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	buttonClick() {
		this.setState({
			clicked: true
		})
	}
	handleInputChange(e) {
		this.setState({
			comment: e.target.value,
		})
	}
	handleSubmitForm() {
		apiServices.updateComment(this.state, this.state.commentId)
      	.then((comment) => {
        	this.setState({
          		fireRedirect: true,
        	});
      	})
    	.catch((err) => {
      		console.log('nooo', err);
    	});
	}
	render() {
    return (
      <div>
        <button onClick={this.buttonClick}>Edit</button>
        {this.state.clicked ? (
          <form onSubmit={this.handleSubmitForm}>
            <textarea
              type="text"
              name="comment"
              onChange={this.handleInputChange}
              placeholder={this.props.comment}
            >
            </textarea>
            <input className="btn btn-primary" type="submit" value="submit" />
            <input className="btn btn-primary" type="reset" value="reset" />
          </form>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default UpdateComment;
        //{this.state.fireRedirect ?  window.location.reload() : ''}
		//<input type="hidden" name="id" value={this.props.commentId} />
