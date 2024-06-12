import { useState } from "react";
import Joke from "./Joke.jsx";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Bukola's Dad Jokes</h1>
      <Joke
        setup="Why did the scarecrow win an award?"
        punchline="Because he was outstanding in his field!"
      />
      <Joke
        setup="What do you call a lazy kangaroo?"
        punchline="Pouch potato."
      />
      <Joke
        setup="Did you hear about the restaurant on the moon?"
        punchline="Great food, no atmosphere."
      />
      <Joke setup="What do you call a fish with no eyes?" punchline="Fsh!" />
      <Joke
        setup="Why did the bicycle fall over?"
        punchline=" Because it was two tired!"
      />
    </div>
  );
}
