import Card from './Card';
import Head from './Head';
import './App.css';
import data from './data';
import React, { useState, useEffect } from 'react';

function App() {

	const [state, setState] = useState({
		score: 0,
		highScore: 0,
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
		console.log(typeof saved);
		if (saved.includes(cardName)) {
			resetScore();
		} else {
			handleScore();
			setSaved((prev) => prev.concat(cardName))
		}
		console.log(saved);
	}

	function handleScore() {
		setState(prev => {
			return {
				...prev,
				score: state.score + 1,
				highScore: state.highScore < state.score ?
				state.score + 1 : 
				state.score
			}
		})
	}

	return (
		<div>
			<Head
			title="score"
			score={state.score}
			highScore={state.highScore}
			/>
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
