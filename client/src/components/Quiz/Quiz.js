import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';
import questions from 'components/Quiz/questions';
import Question from 'components/Quiz/Question';
import Result from 'components/Quiz/Result';
import ResultModal from 'components/Quiz/ResultModal';
import 'components/Quiz/Quiz.css';
import sampleSize from 'lodash/sampleSize';

const petfinderApiUrl = 'http://api.petfinder.com';
const petfinderApiKey = 'afd0c202e8bb93fc9c52f49d4a226b04';

//converts results object to url format
function objectToQueryString(obj) {
  const keyValuePairs = [];

  for (const key in obj) {
    keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }

  return keyValuePairs.join('&');
}

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      answers: {},
      results: null
    }
    this.handleAnswerSelection = this.handleAnswerSelection.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalHide = this.handleModalHide.bind(this);
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
      currentQuestionIndex: this.state.currentQuestionIndex - 1, results: null
    });
  }

  componentDidUpdate() {
    if (this.state.currentQuestionIndex === questions.length && !this.state.results) {
      let params = Object.assign({}, this.state.answers);
      params['output'] = 'full';
      params['format'] = 'json';
      params['key'] = petfinderApiKey;
      params['count'] = 45;

      let apiUrl = `${petfinderApiUrl}/pet.find?${objectToQueryString(params)}`;
      fetch(apiUrl).then(
        (response) => response.json()
      ).then((jsonResponse) => {
        if (jsonResponse.petfinder.pets) {
          this.setState({results: sampleSize(jsonResponse.petfinder.pets.pet, 6)})
        } else {
          this.setState({results: []})
        }
      }).catch(
        (err) => console.log(err)
      )
    }
  }

  handleModalOpen(result) {
    this.setState({ isModalOpen: true, modalResult: result });
  }

  handleModalHide() {
    this.setState({ isModalOpen: false });
  }

  createResultsDisplay(results) {
    // Create the thumbnails showing the results
    if (results.length > 0) {
      let resultsThumbnails = results.map((result, index) => {
        return (
          <Result key={`${index}-${result.id}`}
            result={result}
            onResultClick={this.handleModalOpen} />
        )
      });

      return (
        <Row>
          {resultsThumbnails}
        </Row>
      );
    } else {
      return (<p>Unfortunately, we could not find the best pet for you.</p>)
    }
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
      if (this.state.results) {
        content = this.createResultsDisplay(this.state.results);
      } else {
        content = (<p>You are done! Please wait while we find the best pets for you...</p>)
      }
    }

    if (this.state.currentQuestionIndex > 0) {
      backButton = (
        <div>
          <Button onClick={this.handleBackButtonClick}>Go Back</Button>
        </div>
      )
    }

    return (
      <div>
        <h1>Quiz</h1>
        <hr/>
        <Jumbotron className='bg-white'>
          {content}
          {backButton}
        </Jumbotron>
        <ResultModal result={this.state.modalResult}
          isModalOpen={this.state.isModalOpen}
          onModalHide={this.handleModalHide} >
        </ResultModal>
      </div>
    )
  }
};

export default Quiz;
