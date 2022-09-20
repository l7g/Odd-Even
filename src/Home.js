import { useEffect, useState } from "react";
import { Even } from "./Even";
import { Odd } from "./Odd";

export function Home() {
  const [data, setData] = useState("");
  const [sentence, setSentence] = useState("");
  const [list, setList] = useState([]);
  const [odds, setOdds] = useState([]);
  const [evens, setEvens] = useState([]);
  const [listEven, setListEven] = useState(false);
  const [listOdd, setListOdd] = useState(false);

  function handleButton (){
    fetch("http://numbersapi.com/random/math")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setData(data);
        setSentence(data);
        list.push(data);
        let number = data.substring(0, 4);
        if (number % 2 === 0) {
          return evens.push(data);
        } else {
          return odds.push(data);
        }
      });
  };

  function handleListeEven() {
    setListEven(!listEven);
  }
  function handleListOdd() {
    setListOdd(!listOdd);
  }

  return (
    <div>
      <button onClick={handleButton}>Press me!</button>
      <h2>{sentence}</h2>
      {/* <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      <button onClick={handleListOdd}>Odds</button>
      <button onClick={handleListeEven}>Evens</button>
      {listOdd && <Odd numbers={odds} />}
      {listEven && <Even numbers={evens} />}
    </div>
  );
}
