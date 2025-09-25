import React, { useState } from "react";
import LevelSelector from "./LevelSelector";
import GameGrid from "./GameGrid";
import '../styles/App.css';

const App = () => {
  const [level, setLevel] = useState(null);
  const [start, setStart] = useState(false);

  if (!start) {
    return (
      <div className="App">
        <h1>Welcome!</h1>
        <button onClick={() => setStart(true)}>Start Game</button>
      </div>
    );
  }

  return (
    <div className="App">
      {!level ? <LevelSelector setLevel={setLevel} /> : <GameGrid level={level} />}
    </div>
  );
};

export default App;