import React from 'react';

export default function Reset(props){
	return (
		<button className="info right" onClick={props.onClick}>{props.text}</button>
	)
}