import React from "react";

const LevelSelector = ({ setLevel }) => {
  return (
    <div className="levels_container">
      <h2>Select Difficulty</h2>
      <div>
        <label>
          <input type="radio" name="level" id="easy" onChange={() => setLevel('easy')} /> Easy
        </label>
        <label>
          <input type="radio" name="level" id="normal" onChange={() => setLevel('normal')} /> Normal
        </label>
        <label>
          <input type="radio" name="level" id="hard" onChange={() => setLevel('hard')} /> Hard
        </label>
      </div>
    </div>
  );
};

export default LevelSelector;
