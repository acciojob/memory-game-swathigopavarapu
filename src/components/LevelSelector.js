import React from "react";

const LevelSelector = ({ setLevel }) => {
  return (
    <div className="levels_container">
      <label>
        <input type="radio" id="easy" name="level" onChange={() => setLevel('easy')} />
        Easy
      </label>
      <label>
        <input type="radio" id="normal" name="level" onChange={() => setLevel('normal')} />
        Normal
      </label>
      <label>
        <input type="radio" id="hard" name="level" onChange={() => setLevel('hard')} />
        Hard
      </label>
    </div>
  );
};

export default LevelSelector;
