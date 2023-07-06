import React from 'react';

function Head(props) {
  const {title, score} = props;

  return (
    <div>
      <p>{title}</p>
      <p>{score}</p>
    </div>
  )
}

export default Head;