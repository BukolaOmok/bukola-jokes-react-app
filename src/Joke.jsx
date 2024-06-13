import { useState } from "react";

export default function Joke(props) {
  return (
    <div className="jokes-group">
      {props.setup && <h3>Setup: {props.setup}</h3>}
      <p>Punchline: {props.punchline}</p>
      <hr />
    </div>
  );
}
