import React from 'react';
//tells player how close the guess was

export default function Hint(props) {
	return(
		<div className="hint" >
			<h2 id="hint">{props.feedback}</h2>
		</div>
		);
}