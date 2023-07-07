import Card from './Card';
import Head from './Head';
import './App.css';
import React, { useState } from 'react';

function App() {

	const [state, setState] = useState({
		score: 0,
		saved: []
	})

	const [saved, setSaved] = useState([])

	const resetScore = () => {
		setState(prev => {
			return {
				...prev,
				score: 0
			}
		})
	}

	const mockValues = ['red', 'orange', 'yellow', 'green']

	const handleLogic = (cardName) => {
		if (saved.includes(cardName)) {
			resetScore();
		} else {
			handleScore();
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
			<div className="game-container">
				<div className="card-container">
					<Card name={mockValues[0]} handleLogic={handleLogic} />
					<Card name='Ok' handleLogic={handleLogic} />
					<Card name='Awesome' handleLogic={handleLogic} />
					<Card name='Epic' handleLogic={handleLogic} />
				</div>
			</div>
		</div>
	)
}

export default App;
