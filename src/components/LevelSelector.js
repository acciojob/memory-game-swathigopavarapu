import React from "react";

const LevelSelector = ({ setLevel }) => {
  return (
    <div className="levels_container">
      <h2>Select Difficulty</h2>
      <div>
        <button id="easy" onClick={() => setLevel('easy')}>Easy</button>
        <button id="normal" onClick={() => setLevel('normal')}>Normal</button>
        <button id="hard" onClick={() => setLevel('hard')}>Hard</button>
      </div>
    </div>
  );
};

export default LevelSelector;
