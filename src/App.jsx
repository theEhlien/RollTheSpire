import React from 'react';
import {useState} from 'react';
import './App.css';

export default function App() {

  const [diceRoll, setDiceRoll] = useState('');
  const [rollName, setRollName] = useState('');

  const handleDiceRollChange = event => {
    setDiceRoll(event.target.value);
  };

  const handleRollNameChange = event => {
    setRollName(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    if(diceRoll === "") {
      return;
    }
    let finalUrl = "talespire://dice/".concat(encodeURIComponent(rollName)).concat(":").concat(diceRoll);
    console.log()
    window.open(finalUrl, "_self");
    setDiceRoll("");
    setRollName("");
  };

  return (
    <div className="container">
      {/* Maybe we can generate something to show number of dice in a nicer way here */}
      <h2>Current Roll: {diceRoll}</h2>
      <div className="inputFields">
        <h3>Roll Name</h3>
        <input 
          type="text"
          id="rollName"
          name="rollName"
          onChange={handleRollNameChange}
          value={rollName}
          autoComplete="off"  
        />
        <h3>Dice Input</h3>
        <input
          type="text"
          id="diceRoll"
          name="diceRoll"
          onChange={handleDiceRollChange}
          value={diceRoll}
          autoComplete="off"
        />
      </div>
      <br/>
      <button onClick={handleClick}>Roll in TaleSpire</button>
    </div>
  );

}