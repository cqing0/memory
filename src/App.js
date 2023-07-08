import Card from './Card';
import Head from './Head';
import './App.css';
import data from './data';
import React, { useState, useEffect } from 'react';

function App() {

	const [state, setState] = useState({
		score: 0,
		highScore: 0,
		colors: [
			data.cards[Math.floor(Math.random() * 5)].color,
			data.cards[Math.floor(Math.random() * 5)].color,
			data.cards[Math.floor(Math.random() * 5)].color,
			data.cards[Math.floor(Math.random() * 5)].color,
		],
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

	useEffect(() => {
		const changeColor = () => {
			setState(prev => {
				return {
					...prev,
					color: 'purple',
				}
			})
		} 

		document.addEventListener('click', changeColor);

		return () => {
			document.removeEventListener('click', changeColor);
		};
	}, [state.colors]);

	const handleLogic = (cardName) => {
		if (saved.includes(cardName)) {
			resetScore();
		} else {
			handleScore();
			checkHighScore();
			setSaved((prev) => prev.concat(cardName))
		}
	}

	function handleScore() {
		setState(prev => {
			return {
				...prev,
				score: state.score + 1,
			}
		})
	}

	function checkHighScore() {
		if (state.score >= state.highScore) {
			setState(prev => {
				return {
					...prev,
					highScore: state.score + 1,
				}
			})
		}
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
					{state.colors.map(color =>(<Card name={color} background={color}
					handleLogic={handleLogic} textContent={color} />))}
				</div>
			</div>
		</div>
	)
}

export default App;
