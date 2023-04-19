import React from "react";
import { directors } from "../data";
import { uuid } from "uuidv4";

function Directors() {
  let id=0;
  const directorDisplay = directors.map(director => {

    return (
      <div key={uuid()}>
        <h4>Name: {director.name}</h4>
        <p>Movies:</p>
        <ul>
          {director.movies.map(movie => <li key={uuid()}>{movie}</li>)}
        </ul>
      </div>
    )
  })



  return (
    <div>
      <h1>Directors Page</h1>
      {directorDisplay}
    </div>
  );
}

export default Directors;
