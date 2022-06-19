import React from "react";
import { movies } from "../data";

function Movies() {
  /* MAP THROUGH MOVIES ARRAY OF OBJECTS */
  const movieItems = movies.map((movie, index) => (
    <div key={index}>
      <h2>Title: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      Genres:
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>          
        ))}
      </ul>
    </div>
  ));


  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>
      {movieItems}
    </div>
  );
}

export default Movies;
