import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [startDisabled, setStartDisabled] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const computerGuess = Math.round(Math.random() * 100);
  const [guessArray, setGuessArray] = useState([]);
  const [resultMesage, setResultMesage] = useState('');
  const [guessMessage, setGuessMessage] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function onSubmit(e) {
    e.preventDefault();
    const guess = +inputValue;
    const newArray = [...guessArray, guess];
    setGuessArray(newArray);
    setGuessMessage(`Your guesses: ${newArray}`);

    if (guess > computerGuess) {
      setResultMesage('Too high!');
    } else if (guess < computerGuess) {
      setResultMesage('Too low!');
    } else {
      setResultMesage('You got it! Congrats');
      return;
    }

    if (guessArray.length >= 10) {
      setResultMesage('You lost! The number was ' + computerGuess);
      setSubmitDisabled(true);
      setStartDisabled(false);
    }
    setInputValue('');
  }

  function onStart() {
    setSubmitDisabled(false);
    setStartDisabled(true);
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
          value={inputValue}
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
            disabled={startDisabled}
            onClick={onStart}
          >
            Start Game
          </button>
          <br />
          {resultMesage}
          <br />
          {guessMessage}
        </div>
      </form>
    </div>
  );
}
