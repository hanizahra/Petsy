import React from 'react';
import { Button } from 'reactstrap';

const AnswerButton = (props) => {
	return (
		<Button onClick={() => props.onAnswerSelection(props.questionIndex, props.answerValue)}
			className='text-left'
			block
			color='secondary' >
      {props.answerText}
    </Button>
	)
}

export default AnswerButton;
