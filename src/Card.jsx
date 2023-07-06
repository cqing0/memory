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
		<div named={props.name} 
			style={{backgroundColor: state.color}} 
			className="card" 
			onClick={() => props.handleLogic(props.name)}
			>
		</div>
	)
}

export default Card;
