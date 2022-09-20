import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Even } from "./Even";
import { Odd } from "./Odd";

export function Home() {
  const [sentence, setSentence] = useState();
  const [odds, setOdds] = useState([]);
  const [evens, setEvens] = useState([]);
  const [actualList, setActualList] = useState();

  async function getSentence() {
    let response = await fetch("http://numbersapi.com/random/math");
    let data = await response.text();
    setSentence(data);
    const [number, ...rest] = data.split(" ");
    if (number % 1) {
      evens.push(sentence);
    } else {
      odds.push(sentence);
    }
  }
  function handleButtonClick() {
    getSentence();
  }

  function handleEvent(event){
    const value = event.target.value;
    setActualList(value);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Press me!</button>
      <h2>{sentence}</h2>
      <button value={'odds'} onClick={handleEvent}>Odds</button>
      <button value={'evens'} onClick={handleEvent}>Evens</button>
        {actualList === 'odds' && <Odd numbers={odds}/>}
        {actualList === 'evens' && <Even numbers={evens}/>}
    </div>
  );
}
