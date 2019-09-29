import React, { useState, useEffect } from "react";

import CardList from "./Components/CardList";

import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);

  async function fetchUrl(url) {
    const response = await fetch(url);
    const json = await response.json();
    setMonsters(json);
  }
  useEffect(() => {
    fetchUrl("https://jsonplaceholder.typicode.com/users");
  }, []);

  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
};

export default App;
