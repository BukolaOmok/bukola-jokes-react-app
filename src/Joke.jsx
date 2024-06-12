import { useState } from "react";

export default function Joke(props) {
  return (
    <div className="jokes-group">
      <h3>{props.setup}</h3>
      <p> {props.punchline}</p>
    </div>
  );
}
