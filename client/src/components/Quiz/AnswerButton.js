import React from 'react';

const AnswerButton = (props) => {
	return (
		<button onClick={() => props.onAnswerSelection(props.questionIndex, props.answerValue)} >
      {props.answerText}
    </button>
	)
}

export default AnswerButton;
