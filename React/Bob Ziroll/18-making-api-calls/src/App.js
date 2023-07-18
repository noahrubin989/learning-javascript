import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [starwarsData, setStarwarsData] = useState({});
  let [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log("component rendered");

  useEffect(
    function () {
      console.log("effect ran");
      // fetch("https://swapi.dev/api/people/1").then((res) => res.json())
      // .then((data) => setStarwarsData(data));
    },
    [count]
  );

  return (
    <div className="App">
      <p>Count = {count}</p>
      <button onClick={handleAdd}>Add</button>
      <pre>{JSON.stringify(starwarsData, null, 2)}</pre>
    </div>
  );
}

export default App;
