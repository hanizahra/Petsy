import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

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
      <Form onSubmit={this.handleSubmit} inline>
        <FormControl id="answer" name="answer" type="text" onChange={this.handleInputChange} />
        <Button className='ml-2'>Submit</Button>
      </Form>
    )
  }
}

export default AnswerTextForm;
