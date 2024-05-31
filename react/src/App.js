import { useState } from "react";
function Square({ value, onSquareClick }) {
  return (
    <div
      style={{
        width: "25px",
        height: "25px",
        border: "1px solid black",
        textAlign: "center",
      }}
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </div>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);

  function handleClick(i) {
    if (squares[i]) return;

    const nextSquares = squares.slice();

    if (xNext) nextSquares[i] = "X";
    else nextSquares[i] = "O";

    setXNext(!xNext);
    setSquares(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) status = "Winner: " + winner;
  else status = "Next player: " + (xNext ? "X" : "O");

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row" style={{ display: "flex" }}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row" style={{ display: "flex" }}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row" style={{ display: "flex" }}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
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
    [2, 4, 6],
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    const s = squares;

    if (s[a] && s[a] == s[b] && s[a] == s[c] && s[b] == s[c]) return s[a];
  }
  return null;
}
