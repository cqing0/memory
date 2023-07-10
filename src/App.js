import Card from './Card';
import Head from './Head';
import './App.css';
import data from './data';
import React, { useState, useEffect } from 'react';

function App() {

	function getRandomNumbers(size) {
		const nums = new Set();
		while(nums.size < 4) {
			nums.add(Math.floor(Math.random() * size));
		}
		return [...nums];
	}

	const [seed, setSeed] = useState({
		init: getRandomNumbers(data.cards.length),
		next: getRandomNumbers(data.cards.length),
	})

	const [state, setState] = useState({
		score: 0,
		highScore: 0,
		colors: [
			data.cards[seed.init[0]],
			data.cards[seed.init[1]],
			data.cards[seed.init[2]],
			data.cards[Math.floor(Math.random()) * 7],
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
		console.log(state)

		const changeColor = () => {
			console.log(state.colors)
			setSeed(prev => {
				return {
					...prev,
					next: getRandomNumbers(data.cards.length),
				}
			})
			setState(prev => {
				return {
					...prev,
					colors: [
						data.cards[seed.next[0]],
						data.cards[seed.next[1]],
						data.cards[seed.next[2]],
						data.cards[seed.next[3]],
					],
				}
			})
		} 

		document.addEventListener('click', changeColor);
		// document.addEventListener('click', makeSeed)

		return () => {
			document.removeEventListener('click', changeColor);
			// document.removeEventListener('click', makeSeed);
		};
	}, [state.score]);

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
					{state.colors.map(color =>(<Card name={color.color} background={color.color}
					handleLogic={handleLogic} textContent={color.name || color.color}
					key={color.color} />))}
				</div>
			</div>
		</div>
	)
}

export default App;
