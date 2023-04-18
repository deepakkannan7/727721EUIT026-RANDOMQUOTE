import React, { useState, useEffect } from 'react';
import './App.css';
import './Prorev.css';
function Prorev() {
  const [quote, setQuote] = useState('');
 
  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .catch(error => console.log(error));
  }, []);

  const getNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .catch(error => console.log(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Rand">
        <h1>Random Quote Machine</h1></div>
        <div className="Quote"><p>{quote}</p></div> 
        <button class="btn"onClick={getNewQuote}>New Quote</button>
      </header>
    </div>
  );
}
export default Prorev;