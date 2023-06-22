import React from 'react';
import {useState} from 'react';
import {Helmet} from "react-helmet";
import './App.css';

export default function App() {

  const [diceRoll, setDiceRoll] = useState('');
  const [rollName, setRollName] = useState('');
  const [advDis, setAdvDis] = useState(false);

  const handleDiceRollChange = event => {
    setDiceRoll(event.target.value);
  };

  const handleRollNameChange = event => {
    setRollName(event.target.value);
  };

  const handleAdvDisChange = event => {
    setAdvDis(!advDis);
  };

  const handleClick = event => {
    event.preventDefault();
    if(diceRoll !== "") {  
      let finalUrl = "talespire://dice/";
      let name = rollName;

      if(name !== "") {
        finalUrl = finalUrl.concat(encodeURIComponent(name));
        if(advDis) {
          finalUrl = finalUrl.concat(encodeURIComponent(" ADV/DIS"));
        }
        finalUrl = finalUrl.concat(":");
      }

      if(advDis) {
        finalUrl = finalUrl.concat(diceRoll).concat("/").concat(diceRoll);
      } else {
        finalUrl = finalUrl.concat(diceRoll);
      }
      window.open(finalUrl, "_self");
      // console.log(finalUrl);
    }
    setDiceRoll("");
    setRollName("");
    setAdvDis(false);
  };

  return (
    <>
      <Helmet>
        <title>Roll the Spire</title>
      </Helmet>
      <div className="container">
        <div className="navBar">
          <h1 className="navText">
            Roll the Spire
          </h1>
        </div>
        <div className="content">
          <div className="innerContainer">
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
              <div className="diceRow">
                <input
                  type="text"
                  id="diceRoll"
                  name="diceRoll"
                  onChange={handleDiceRollChange}
                  value={diceRoll}
                  autoComplete="off"
                />
                <label className="checkbox">
                  <input 
                    type="checkbox"
                    id="advDis"
                    name="advDis"
                    onChange={handleAdvDisChange}
                    checked={advDis}
                  />
                  ADV/DIS
                </label>
              </div>
            </div>
            <br/>
            <button onClick={handleClick}>Roll in TaleSpire</button>
          </div>
        </div>
        <div className="footer">
          <p className="navText">
            No Footer... <a href="https://www.youtube.com/@ehlien_gaming/live">Checkout My YouTube</a>
          </p>
        </div>
      </div>
    </>
  );
}