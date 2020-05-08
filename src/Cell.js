import React from "react";

const Cell = ({ isInitial, number, onChange }) => (
  <div
    className={`cell ${isInitial ? "initial" : ""}`}
    onClick={e => {
      if (isInitial) return;
      onChange((number + 1) % 5);
    }}
  >
    {number !== 0 && number}
  </div>
);

export default Cell;
