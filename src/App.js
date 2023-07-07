import Card from './Card';
import Head from './Head';
import './App.css';
import data from './data';
import React, { useState, useEffect } from 'react';

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
		});
		setSaved([])
	}

	const mockValues = [
		data.cards[0].color,
		data.cards[1].color,
		data.cards[2].color,
		data.cards[3].color,
	]

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
					{mockValues.map(color =>(<Card name={color} background={color}
					handleLogic={handleLogic} textContent={color} />))}
				</div>
			</div>
		</div>
	)
}

export default App;
