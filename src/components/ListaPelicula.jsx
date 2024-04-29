
import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleMoviesUpdated = () => {
      const updatedMovies = JSON.parse(localStorage.getItem("movies")) || [];
      setMovies(updatedMovies);
    };
    document.addEventListener("moviesUpdated", handleMoviesUpdated);
    return () => {
      document.removeEventListener("moviesUpdated", handleMoviesUpdated);
    };
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {movies.map((movie) => (
        <div className="col" key={movie.id}>
          <div className="card">
            <img src={movie.imageUrl} className="card-img-top" alt={movie.name} />
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">{movie.description}</p>
              <p className="card-text">Género: {movie.genre}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
