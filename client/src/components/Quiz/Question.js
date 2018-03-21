import React from 'react';
import AnswerButton from 'components/Quiz/AnswerButton';
import AnswerTextForm from 'components/Quiz/AnswerTextForm';

const Question = (props) => {
  let answerInput;
  if (props.question.answers) {
    answerInput = props.question.answers.map((answer) => {
      let answerText, answerValue;
      if (Array.isArray(answer)) {
        answerValue = answer[0];
        answerText = answer[1];
      } else {
        answerText = answer;
        answerValue = answer;
      }

      return (
        <AnswerButton
          key={answer}
          questionIndex={props.questionIndex}
          answerValue={answerValue}
          answerText={answerText}
          onAnswerSelection={props.onAnswerSelection} />
      )
    });
  } else {
    answerInput = <AnswerTextForm
      questionIndex={props.questionIndex}
      onAnswerSelection={props.onAnswerSelection} />
  }

	return (
		<div>
      <p>{props.question.text}</p>
      {answerInput}
    </div>
	)
}

export default Question;
