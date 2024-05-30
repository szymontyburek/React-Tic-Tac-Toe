import { useState } from "react";

function Square() {
  return <button className="square">1</button>;
}

export default function Board() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
