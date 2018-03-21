import React from 'react';

const AnswerButton = (props) => {
	return (
		<button onClick={() => props.onAnswerSelection(props.questionIndex, props.answer)} >
      {props.answer}
    </button>
	)
}

export default AnswerButton;
