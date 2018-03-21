import React from 'react';
import AnswerButton from 'components/Quiz/AnswerButton';

const Question = (props) => {
  let answerChoices = props.question.answers.map((answer) => {
    return (
      <AnswerButton
        key={answer}
        questionIndex={props.questionIndex}
        answer={answer}
        onAnswerSelection={props.onAnswerSelection} />
    )
  });

	return (
		<div>
      <p>{props.question.text}</p>
      {answerChoices}
    </div>
	)
}

export default Question;
