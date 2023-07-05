import React, { useState } from 'react';
import './Card.css';

function Card(props) {
	const [state, setState] = useState({
		counter: 0,
	});
	
	function handleChange(e) {
		setState(prev => {
			return {
				...prev,
				counter: state.counter + 1
			}
		})
	}

	return (
		<div className="card" onClick={props.onClick}>
			Count: {state.counter}
		</div>
	)
}

export default Card;
