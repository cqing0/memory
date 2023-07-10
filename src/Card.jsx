import React, { useEffect, useState } from 'react';
import './Card.css';

function Card(props) {
	const [state, setState] = useState({
		counter: 0,
		color: props.background || 'grey'
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
		<div name={props.name} 
			style={{backgroundColor: props.background}} 
			className="card" 
			onClick={() => props.handleLogic(props.name)}
		>
			{props.textContent}
		</div>
	)
}

export default Card;
