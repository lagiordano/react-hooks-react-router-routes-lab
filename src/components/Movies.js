import React, {useState} from "react";
import { movies } from "../data";
import { uuid } from "uuidv4";

function Movies() {

  const moviesToDisplay = movies.map(movie => {
    return (
      <div key={uuid()}>
        <h4>Name: {movie.title}</h4>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {movie.genres.map(genre => <li key={uuid()}>{genre}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesToDisplay}
    </div>
  );
}

export default Movies;
