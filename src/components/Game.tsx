import { useState } from "react";
function Square({ value, onSquareClick, highlight }) {
  const h = highlight ? "highlight" : "null";

  return (
    <button onClick={onSquareClick} className={`btn ${h}`}>
      {value}
    </button>
  );
}

function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winnerInfo, setWinnerInfo] = useState(null);

  const handleClick = i => {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquare = square.slice();
    nextSquare[i] = xIsNext ? "x" : "O";
    setSquare(nextSquare);
    setXIsNext(!xIsNext);

    const winner = calculateWinner(square);

    if (winner) {
      setWinnerInfo(winner);
    }
  };

  return (
    <div>
      <h1 className="header">Tic Tac Toe</h1>
      <div className="board">
        <div className="board-row">
          <Square
            value={square[0]}
            onSquareClick={() => {
              handleClick(0);
            }}
            highlight={winnerInfo && winnerInfo.includes(0)}
          />
          <Square
            value={square[1]}
            onSquareClick={() => {
              handleClick(1);
            }}
            highlight={winnerInfo && winnerInfo.includes(1)}
          />
          <Square
            value={square[2]}
            onSquareClick={() => {
              handleClick(2);
            }}
            highlight={winnerInfo && winnerInfo.includes(2)}
          />
        </div>
        <div className="board-row">
          <Square
            value={square[3]}
            onSquareClick={() => {
              handleClick(3);
            }}
            highlight={winnerInfo && winnerInfo.includes(3)}
          />
          <Square
            value={square[4]}
            onSquareClick={() => {
              handleClick(4);
            }}
            highlight={winnerInfo && winnerInfo.includes(4)}
          />
          <Square
            value={square[5]}
            onSquareClick={() => {
              handleClick(5);
            }}
            highlight={winnerInfo && winnerInfo.includes(5)}
          />
        </div>
        <div className="board-row">
          <Square
            value={square[6]}
            onSquareClick={() => {
              handleClick(6);
            }}
            highlight={winnerInfo && winnerInfo.includes(6)}
          />
          <Square
            value={square[7]}
            onSquareClick={() => {
              handleClick(7);
            }}
            highlight={winnerInfo && winnerInfo.includes(7)}
          />
          <Square
            value={square[8]}
            onSquareClick={() => {
              handleClick(8);
            }}
            highlight={winnerInfo && winnerInfo.includes(8)}
          />
        </div>
      </div>
      <div className="c-btn">
        <button>Restart</button>
        <button>Undo</button>
      </div>
    </div>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }
  return null;
}

function Game() {
  return <Board />;
}
export default Game;
