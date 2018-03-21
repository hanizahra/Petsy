import React, { Component } from 'react';

class AnswerTextForm extends Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { answer: null };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAnswerSelection(this.props.questionIndex, this.state.answer);
  }

  handleInputChange(event) {
    this.setState({ answer: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="answer" name="answer" type="text" onChange={this.handleInputChange} />
        <button>Submit</button>
      </form>
    )
  }
}

export default AnswerTextForm;
