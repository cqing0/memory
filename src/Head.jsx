import React from 'react';
import './Head.css';

function Head(props) {
  const {title, score, highScore} = props;

  return (
    <div className="score-section">
			<div>
				<p>{title}:</p>
				<p>{score}</p>
			</div>
			<div>
				<p>High Score:</p>
				<p>{highScore}</p>
			</div>
    </div>
  )
}

export default Head;
