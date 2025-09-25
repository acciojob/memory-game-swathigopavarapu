import React from "react";

const Tile = ({ tile, handleClick, flipped, matched }) => {
  const className = `tile ${flipped || matched ? 'flipped' : ''} ${matched ? 'matched' : ''}`;

  return (
    <div className={className} onClick={() => handleClick(tile)}>
      {flipped || matched ? tile.value : '?'}
    </div>
  );
};

export default Tile;
