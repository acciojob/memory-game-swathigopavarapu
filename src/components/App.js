import React, { useState } from "react";
import LevelSelector from "./LevelSelector";
import GameGrid from "./GameGrid";
import '../styles/App.css';

const App = () => {
  const [level, setLevel] = useState(null);

  return (
    <div className="App">
      {!level ? <LevelSelector setLevel={setLevel} /> : <GameGrid level={level} />}
    </div>
  );
};

export default App;
