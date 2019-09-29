import React, { useState, useEffect } from "react";

import CardList from "./Components/CardList";

import "./App.css";
import { fileURLToPath } from "url";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchFiled] = useState("");

  async function fetchUrl(url) {
    const response = await fetch(url);
    const json = await response.json();
    setMonsters(json);
  }
  useEffect(() => {
    fetchUrl("https://jsonplaceholder.typicode.com/users");
  }, []);

  const filteredMonsters= monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <input
        type="search"
        placeholder="search monsters"
        onChange={e => setSearchFiled(e.target.value)}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
