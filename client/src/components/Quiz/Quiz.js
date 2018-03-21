import React, { Component } from 'react';
import questions from 'components/Quiz/questions';
import Question from 'components/Quiz/Question';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      answers: {}
    }
    this.handleAnswerSelection = this.handleAnswerSelection.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  handleAnswerSelection(questionIndex, answer) {
    let question = questions[questionIndex];
    let key = question["key"];

    let answers = Object.assign({}, this.state.answers);
    answers[key] = answer;

    this.setState({
      answers: answers,
      currentQuestionIndex: questionIndex + 1
    });
  }

  handleBackButtonClick() {
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex - 1
    });
  }

  render() {
    let currentQuestion = questions[this.state.currentQuestionIndex];
    let content;
    let backButton;

    if (currentQuestion) {
      content = (
        <Question question={currentQuestion}
          questionIndex={this.state.currentQuestionIndex}
          onAnswerSelection={this.handleAnswerSelection} />
      );
    } else {
      console.log(this.state.answers)
      content = (
        <p>To Do: This is where the results will be shown.</p>
      )
    }

    if (this.state.currentQuestionIndex > 0) {
      backButton = (
        <button onClick={this.handleBackButtonClick}>Go Back</button>
      )
    }

    return (
      <div>
        <h2>Quiz</h2>
        {backButton}
        {content}
      </div>
    )
  }
};

export default Quiz;
