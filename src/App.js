import React, { useState } from 'react';
import './style.css';

export default function App() {
  const guessArray = [];
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [startDisabled, setStartDisabled] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const computerGuess = Math.round(Math.random() * 100);
  let showGuessArrayMessage = '';
  let resultMesage = '';

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // to be checked
  function onSubmit(e) {
    e.preventDefault();
    const guess = +inputValue;
    setInputValue('');
    guessArray.push(guess);
    showGuessArrayMessage = `Your guesses: ${guessArray.join(', ')}`;

    console.log(showGuessArrayMessage, 'showGuessArrayMessage');
    console.log(computerGuess, 'computerGuess');
    console.log(guess, 'guess');

    if (guess > computerGuess) {
      resultMesage = 'Too high!';
    } else if (guess < computerGuess) {
      resultMesage = 'Too low!';
    } else {
      resultMesage = 'You got it! Congrats';
      return;
    }

    if (guessArray.length >= 10) {
      resultMesage = 'You lost! The number was ' + computerGuess;
    }
  }

  return (
    <div className="container">
      <h1>Guess the Number</h1>

      <form>
        <label className="text"> Enter a guess between 0 to 100</label>
        <br />
        <br />
        <input
          type="number"
          min="1"
          max="100"
          placeholder="Enter a number"
          autoComplete="off"
          onChange={handleInputChange}
        />

        <div className="buttons">
          <button
            type="submit"
            id="submit"
            className="btn btn-primary"
            disabled={submitDisabled}
            onClick={onSubmit}
            value={inputValue}
          >
            Submit
          </button>
          {'  '}
          <button
            type="button"
            id="start"
            className="btn btn-primary"
            disabled={true}
          >
            Start Game
          </button>
          <br />
          {resultMesage}
          <br />
          {showGuessArrayMessage}
        </div>
      </form>
    </div>
  );
}
