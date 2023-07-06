import Card from './Card';
import Head from './Head';
import React, { useState } from 'react';

function App() {

	const [state, setState] = useState({
		score: 0,
		saved: []
	})

	const [saved, setSaved] = useState([])

	const handleLogic = (cardName) => {
		if (saved.includes(cardName)) {
			console.log('HH')
		}
		setSaved(prev => prev.concat(cardName))
		console.log(saved)
	}

	function handleScore() {
		setState(prev => {
			return {
				...prev,
				score: state.score + 1,
			}
		})
		console.log(state.saved)
	}

	return (
		<div>
			<Head
			title="score"
			score={state.score} />
			<div>
				<Card name='bad' handleLogic={handleLogic} />
				<Card name='Ok' handleLogic={handleLogic} />
				<Card name='Awesome' handleLogic={handleLogic} />
				<Card name='Epic' handleLogic={handleLogic} />
			</div>
		</div>
	)
}

export default App;
