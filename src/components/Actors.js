import React from "react";
import { actors } from "../data";
import { uuid } from "uuidv4";

function Actors() {

  const displayActors = actors.map(actor => {
    return (
      <div key={uuid()}>
        <h4>Name: {actor.name}</h4>
        <p>Movies:</p>
        <ul>
          {actor.movies.map(movie => <li key={uuid()}>{movie}</li>)}
        </ul>
      </div>
    )
  })


  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors}
    </div>
  );
}

export default Actors;
