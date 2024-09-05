import React, { useState, useEffect } from 'react';
import Shape from './components/Shape';
import './App.css';

const shapes = ['circle', 'square', 'triangle'];

const getRandomShape = () => shapes[Math.floor(Math.random() * shapes.length)];

function App() {
  const [shape1, setShape1] = useState(getRandomShape());
  const [shape2, setShape2] = useState(getRandomShape());
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setGameOver(true);
    }
  }, [timeLeft]);

  const handleMatch = (isMatch) => {
    if (gameOver) return;

    const correctMatch = shape1 === shape2;
    if ((isMatch && correctMatch) || (!isMatch && !correctMatch)) {
      setScore(score + 1);
    }

    // Randomize new shapes
    setShape1(getRandomShape());
    setShape2(getRandomShape());
  };

  return (
    <div className="game-container">
      <h1>Shape Matcher Game</h1>
      <h2>Score: {score}</h2>
      <h3>Time Left: {timeLeft} seconds</h3>

      <div className="shape-container">
        <Shape shape={shape1} />
        <Shape shape={shape2} />
      </div>

      {!gameOver ? (
        <div>
          <button onClick={() => handleMatch(true)}>Match</button>
          <button onClick={() => handleMatch(false)}>No Match</button>
        </div>
      ) : (
        <h2>Game Over! Final Score: {score}</h2>
      )}
    </div>
  );
}

export default App;
