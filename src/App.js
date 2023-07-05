import Card from './Card';
import React, { useState } from 'react';

function App() {

	const [state, setState] = useState({
		score: 0
	})

	function handleScore() {
		setState(prev => {
			return {
				...prev,
				score: state.score + 1
			}
		})
		console.log(state.score)
	}

	return (
		<div>
		<p>Score: {state.score}</p>
			<div>
				<Card onClick={handleScore} />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	)
}

export default App;
