import { useState } from "react";
function Square({ value }) {
  return <button className="btn">{value}</button>;
}

function Board() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1 className="header">Tic Tac Toe</h1>
      <div className="board">
        {Array(3)
          .fill(null)
          .map((_, row) => (
            <div className="board-row" key={row}>
              {Array(3)
                .fill(null)
                .map((_, col) => {
                  <Square key={col + row} value={2} />;
                })}
            </div>
          ))}
      </div>
      <div className="c-btn">
        <button>Restart</button>
        <button>Undo</button>
        <button>Redo</button>
      </div>
    </div>
  );
}

function Game() {
  return <Board />;
}
export default Game;
