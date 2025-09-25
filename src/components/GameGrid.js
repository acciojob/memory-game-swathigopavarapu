import React, { useState, useEffect } from "react";
import Tile from "./Tile";

const GameGrid = ({ level }) => {
  const levels = {
    easy: 4,
    normal: 8,
    hard: 16
  };

  const [tiles, setTiles] = useState([]);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [attempts, setAttempts] = useState(0);

  // Initialize tiles
  useEffect(() => {
    const numPairs = levels[level];
    let values = [];
    for (let i = 1; i <= numPairs; i++) values.push(i, i);
    values = shuffleArray(values);
    setTiles(values.map((val, idx) => ({ id: idx, value: val, matched: false })));
  }, [level]);

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  const handleClick = (tile) => {
    if (first && second) return; // Prevent clicking when checking
    if (tile.matched) return;

    if (!first) setFirst(tile);
    else if (!second) setSecond(tile);
  };

  // Check match
  useEffect(() => {
    if (first && second) {
      setAttempts(prev => prev + 1);
      if (first.value === second.value) {
        setTiles(prev => prev.map(t => (t.value === first.value ? { ...t, matched: true } : t)));
        resetTurn();
      } else {
        setTimeout(resetTurn, 800);
      }
    }
  }, [second]);

  const resetTurn = () => {
    setFirst(null);
    setSecond(null);
  };

  return (
    <div>
      <h3>Attempts: {attempts}</h3>
      <div className="cells_container">
        {tiles.map(tile => (
          <Tile
            key={tile.id}
            tile={tile}
            handleClick={handleClick}
            flipped={first?.id === tile.id || second?.id === tile.id}
            matched={tile.matched}
          />
        ))}
      </div>
      {tiles.every(t => t.matched) && <h2>🎉 All Pairs Matched!</h2>}
    </div>
  );
};

export default GameGrid;
