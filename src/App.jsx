import { useState } from "react";
import Joke from "./Joke.jsx";
import jokesData from "./jokesData.jsx"
import "./App.css";

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke 
    setup={joke.setup} 
    punchline={joke.punchline} />;
  });

  return <div>
    <h1>Bukola's Dad Jokes</h1>
    {jokeElements}
    </div>;
}
